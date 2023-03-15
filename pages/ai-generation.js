import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";
import { saveAs } from "file-saver";
import { useSession } from "next-auth/react";
import { toast, ToastContainer } from "react-toastify";
import resizeImage from "../common/resizeImage";
import Head from "next/head";
import { useRouter } from "next/router";

//= Scripts
//= Layout
import MainLayout from "../layouts/Main";
import { RiseLoader, BarLoader, ClockLoader } from "react-spinners";
//= Components
import { BsFillCaretDownFill } from "react-icons/bs";

const aiCatList = [
  "Photo",
  "Sci-Fi",
  "Techpunk",
  "Dystopia",
  "Fantasy",
  "Cyber",
  "Europa",
  "Ethereal",
  "Ghibli",
  "Vector Art",
  "Realistic Anime",
  "Concept Art",
  "West Coast",
  "Photorealistic",
  "Cute",
];

const AIGeneration = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [lowResImg, setLowResImg] = useState(null);
  const [highResImg, setHighResImg] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState("Photo");
  const [isLoading, setIsLoading] = useState(false);
  const [promptText, setPromptText] = useState("");
  const [downloadLoading, setDownloadLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  let formData;

  function handleDownloadClick(type) {
    if (type === "low") {
      saveAs(lowResImg, `image-${Date.now()}.png`);
    } else {
      // Chack if user is logged in
      if (!session) {
        // Require login
        toast.error("Please, login first!!");

        return false;
      }
      // User have authenticated
      const formData = {
        type: "ai",
        cusEmail: session.user.email,
      };
      setDownloadLoading(true);
      axios
        .post(`api/service`, formData)
        .then((x) => {
          setDownloadLoading(false);
          if (x.data.success == true) {
            saveAs(highResImg, `image-${Date.now()}.png`);
          } else if (x.data.success == false) {
            toast.error("Insufficient credit.");
          } else console.log(x.data);
        })
        .catch((err) => {
          // setIsLoading(false);
          console.log("Something went wrong!!", err);
        });
    }
  }

  function imageUrlToBase64(url) {
    return fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const imageFile = new File([blob], `image-${Date.now()}.png`, {
          type: "image/png",
        });
        return imageFile;
      });
  }

  const checkImageGeneration = (taskid) => {
    axios
      .get(
        `https://www.cutout.pro/api/v1/getText2imageResult?taskId=${taskid}`,
        {
          headers: {
            APIKEY: "1ebae678d2ab4eacb47e72fe4f7adb9b",
          },
        }
      )
      .then(async (res) => {
        if (res.data.data.percentage !== 100) {
          setLoadingPercentage(res.data.data.percentage || 0);
          setTimeout(() => {
            checkImageGeneration(taskid);
          }, 250);
        } else {
          setHighResImg(res.data.data.resultUrl);
          imageUrlToBase64(res.data.data.resultUrl).then(async (x) => {
            const imageHigh = await resizeImage(x);
            setLowResImg(imageHigh);
          });
          setIsImageLoading(false);
        }
      });
  };

  const sendApiRequest = (data) => {
    axios
      .post(`https://www.cutout.pro/api/v1/text2imageAsync`, data, {
        headers: {
          APIKEY: "1ebae678d2ab4eacb47e72fe4f7adb9b",
        },
      })
      .then((response) => {
        checkImageGeneration(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 415)
          toast.error("Image format not supported!!");
        console.error(error);
        setIsLoading(false);
      });
  };

  const handleAiPrompt = (e) => {
    e.preventDefault();
    setLowResImg(null);
    setHighResImg(null);
    setIsLoading(true);
    setLoadingPercentage(0);
    setIsImageLoading(true);
    const aiObj = {
      prompt: promptText,
      style: selectedStyle,
      width: 1024,
      height: 768,
    };
    sendApiRequest(aiObj);
  };

  return (
    <>
      <Head>
        <title>Edit Pro - AI Art Generation</title>
      </Head>
      <MainLayout>
        <main className="portfolio-page style-1">
          <div className="portfolio-projects style-1 py-5">
            <h1 className="text-center fs-2 mb-5">AI Art Generation</h1>
            <div className="container">
              <div className="row px-4 d-flex justify-content-around">
                <div className="col-5">
                  <div className="rounded-3 border shadow-sm bg-white p-4">
                    {isLoading ? (
                      <RiseLoader
                        loading={isLoading}
                        color="#36d7b7"
                        size={10}
                        className="text-center my-2"
                      />
                    ) : (
                      <form onSubmit={(e) => handleAiPrompt(e)}>
                        <div className="d-flex align-items-start">
                          <textarea
                            class="form-control"
                            type="text"
                            value={promptText}
                            onChange={(e) => setPromptText(e.target.value)}
                            name="prompt"
                            id="prompt"
                            placeholder="Type anything..."
                          />
                          <button
                            className="btn btn-danger py-2 ms-2"
                            type="submit"
                          >
                            Generate
                          </button>
                        </div>
                      </form>
                    )}
                    {isImageLoading && (
                      <>
                        <div className="progress mt-4">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: `${loadingPercentage}%` }}
                          ></div>
                        </div>
                        <div className="text-center fw-bold op-7">
                          Generating: {loadingPercentage}%
                        </div>
                      </>
                    )}

                    {lowResImg && (
                      <>
                        <div className="text-center my-3 fs-5 fw-bold">
                          Result
                        </div>
                        <div className="mx-2 text-center">
                          {lowResImg && (
                            <img
                              className="bg-transparent-img rounded-3 border w-100"
                              src={lowResImg}
                              download={lowResImg}
                              alt="result"
                            />
                          )}
                        </div>

                        <div className="text-center mt-3 mb-2 d-flex justify-content-around">
                          <div className="d-flex flex-column">
                            <button
                              className="btn btn-sm rounded-3 btn-primary px-3 py-2 d-flex align-items-center"
                              onClick={() => handleDownloadClick("low")}
                            >
                              Free Download{" "}
                              <BsFillCaretDownFill className="ms-1" />
                            </button>
                            <small className="mt-1 text-muted fs-12px">
                              Low Quality
                            </small>
                          </div>
                          <div className="d-flex flex-column">
                            <button
                              disabled={downloadLoading}
                              className="btn btn-sm rounded-3 btn-outline-primary px-3 py-2  d-flex align-items-center"
                              onClick={() => handleDownloadClick("high")}
                            >
                              {downloadLoading ? (
                                <BarLoader className="my-2" color="#36d7b7" />
                              ) : (
                                <>
                                  Download HD{" "}
                                  <BsFillCaretDownFill className="ms-1" />
                                </>
                              )}
                            </button>
                            <small className="mt-1 text-muted fs-12px">
                              High Quality, <b>6 Credit</b>
                            </small>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="col-5 rounded-3 border shadow-sm bg-white px-4 py-2">
                  <h4 className="text-center mb-3">Select Style</h4>
                  <div className="row d-flex justify-content-start">
                    {aiCatList.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="col-3 mb-2 px-2 d-flex flex-column justify-content-center"
                        >
                          <img
                            onClick={() => {
                              setSelectedStyle(item);
                            }}
                            className={`w-100 rounded ${
                              selectedStyle === item
                                ? "border shadow border-3 border-blue6"
                                : ""
                            }`}
                            src={`./img/ai/${item}.png`}
                            alt=""
                          />
                          <small className="fs-12px text-center op-8">
                            {item}
                          </small>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default AIGeneration;
