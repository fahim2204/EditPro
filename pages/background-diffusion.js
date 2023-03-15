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
import { RiseLoader, BarLoader } from "react-spinners";
//= Components
import { BsFillCaretDownFill } from "react-icons/bs";

const BackgroundDiffusion = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [lowResImg, setLowResImg] = useState(null);
  const [highResImg, setHighResImg] = useState(null);
  const [upImg, setUpImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadLoading, setDownloadLoading] = useState(false);

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
        type: "correction",
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

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }, []);

  const sendApiRequest = (formUpData) => {
    axios
      .post("https://www.cutout.pro/api/v1/matting?mattingType=4", formUpData, {
        headers: {
          APIKEY: "1ebae678d2ab4eacb47e72fe4f7adb9b",
        },
        responseType: "blob", // Add this line to get a blob response
      })
      .then(async (response) => {
        const imageBlob = response.data; // Get the response data as a blob
        const imageUrl = URL.createObjectURL(imageBlob); // Convert the blob to a URL
        setHighResImg(imageUrl);

        const imageFile = new File([imageBlob], `image-${Date.now()}.png`, {
          type: "image/png",
        });

        const imageHigh = await resizeImage(imageFile);
        setLowResImg(imageHigh);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDropImage = async (item) => {
    setLowResImg(null);
    setHighResImg(null);
    setUpImg(null);
    setIsLoading(true);
    const file = item[0];
    if (!file.type.startsWith("image/")) {
      setIsLoading(false);
      toast.success("Please select image only.");
      return null;
    }
    const blob = new Blob([await item[0].arrayBuffer()], {
      type: "image/png",
    });
    const url = URL.createObjectURL(blob);
    setUpImg(url);
    const formUpData = new FormData();
    formUpData.append("file", file);
    formUpData.append("preview", false);
    sendApiRequest(formUpData);
  };

  return (
    <>
      <Head>
        <title>Edit Pro - Background Diffusion</title>
      </Head>
      <MainLayout>
        <main className="portfolio-page style-1">
          <div className="portfolio-projects style-1 py-5">
            <h1 className="text-center fs-2 mb-5">Background Diffusion</h1>
            <div className="col-12 col-md-6 mx-md-auto mx-2 rounded-3 border shadow-sm bg-white p-4">
              {isLoading ? (
                <RiseLoader
                  loading={isLoading}
                  color="#36d7b7"
                  size={10}
                  className="text-center my-2"
                />
              ) : (
                <Dropzone
                  onDrop={(acceptedFiles) => handleDropImage(acceptedFiles)}
                  maxFiles={1}
                  multiple={false}
                >
                  {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()}>
                      <input {...getInputProps()} />
                      <div className="btn btn-danger rounded-3 w-100 d-flex align-items-center">
                        <MdCloudUpload className="fs-5 me-2" />{" "}
                        <span className="fw-bold fs-5">Upload Image</span>
                      </div>
                      <div className="w-full">
                        <p className="text-center mt-1">or drop a file here</p>
                      </div>
                    </div>
                  )}
                </Dropzone>
              )}
            </div>
            {lowResImg && (
              <div className="container-sm mx-auto mt-4">
                <div className="row bg-white mx-2 mx-md-4 p-3 rounded shadow-lg">
                  <div className="col-12 col-md-6 px-2 px-lg-5">
                    <div className="text-center mb-3 fs-5 fw-bold">
                      Original
                    </div>
                    <div className="mx-2 text-center mb-3 mb-md-0">
                      {upImg && (
                        <img
                          className="rounded-3 shadow w-100"
                          src={upImg}
                          alt="original"
                        />
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-2 px-lg-5">
                    <div className="text-center mb-3 fs-5 fw-bold">Result</div>
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
                          Free Download <BsFillCaretDownFill className="ms-1" />
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
                          High Quality, <b>2 Credit</b>
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default BackgroundDiffusion;
