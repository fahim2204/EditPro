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

const PassportPhoto = () => {
  const { data: session } = useSession();
  const [originalImgFile, setOriginalImgFile] = useState(null);
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
        type: "passport",
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

  const sendApiRequest = (formUpData) => {
    axios
      .post("https://www.cutout.pro/api/v1/idphoto/printLayout", formUpData, {
        headers: {
          APIKEY: "1ebae678d2ab4eacb47e72fe4f7adb9b",
        },
      })
      .then(async (response) => {
        setHighResImg(response.data.data.idPhotoImage);
        imageUrlToBase64(response.data.data.idPhotoImage).then(async (x) => {
          const imageLow = await resizeImage(x);
          setLowResImg(imageLow);
          setIsLoading(false);
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Show Dropped Image in Original
  const handleDropImage = async (item) => {
    setLowResImg(null);
    setHighResImg(null);
    setUpImg(null);
    const file = item[0];
    if (!file.type.startsWith("image/")) {
      toast.error("Please select image only.");
      return null;
    }
    const blob = new Blob([await item[0].arrayBuffer()], {
      type: "image/png",
    });
    const url = URL.createObjectURL(blob);
    setUpImg(url);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      const base64 = e.target.result;
      setOriginalImgFile(base64);
    };
  };

  // Image Size, BG color and Call API
  const handleImageSizeColorSubmit = (e) => {
    e.preventDefault();
    console.log(e.target["bgColor"].value);
    setLowResImg(null);
    setHighResImg(null);
    setIsLoading(true);
    // Setting Other parameters For Passport photo modifications
    const imgData = {
      base64: originalImgFile.split(",")[1],
      bgColor: e.target["bgColor"].value.split("#")[1] || "FFFFFF",
      dpi: 300,
      mmHeight: e.target["imgHeight"].value || 30,
      mmWidth: e.target["imgWidth"].value || 35,
      printBgColor: "FFFFFF",
      printMmHeight: 210,
      printMmWidth: 150,
    };
    sendApiRequest(imgData);
  };

  return (
    <>
      <Head>
        <title>Edit Pro - Passport Photo</title>
      </Head>
      <MainLayout>
        {/* <ToastContainer /> */}
        <main className="portfolio-page style-1">
          <div className="portfolio-projects style-1 py-5">
            <h1 className="text-center fs-2 mb-5">Passport Photo Maker</h1>
            <div className="col-12 col-md-6 mx-md-auto mx-2 rounded-3 border shadow-sm bg-white p-4">
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
            </div>
            {upImg && (
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
                    {lowResImg ? (
                      <>
                        <div className="text-center mb-3 fs-5 fw-bold">
                          Result
                        </div>
                        <div className="mx-2 text-center">
                          {lowResImg && (
                            <img
                              className="bg-transparent-img rounded-3 border w-75"
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
                              High Quality, <b>2 Credit</b>
                            </small>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {isLoading ? (
                          <>
                            <RiseLoader
                              // loading={isLoading}
                              color="#36d7b7"
                              size={10}
                              className="text-center mt-5"
                            />
                          </>
                        ) : (
                          <form onSubmit={handleImageSizeColorSubmit}>
                            <div className="d-flex flex-column align-items-start mt-5">
                              <div className="d-flex">
                                <input
                                  class="form-control mx-2"
                                  type="number"
                                  min={1}
                                  name="imgHeight"
                                  id="imgHeight"
                                  placeholder="Height (mm)"
                                  required
                                />
                                <input
                                  class="form-control mx-2"
                                  type="number"
                                  min={1}
                                  name="imgWidth"
                                  id="imgWidth"
                                  placeholder="Width (mm)"
                                  required
                                />
                              </div>
                              <div className="d-flex my-2">
                                <label htmlFor="bgColor" className="ms-2 mt-2">
                                  Background:
                                </label>
                                <input
                                  className="form-control-color ms-2 my-1"
                                  type="color"
                                  name="bgColor"
                                  id="bgColor"
                                />
                              </div>

                              <button
                                className="btn btn-danger py-2 mt-2 mx-auto"
                                type="submit"
                              >
                                Generate
                              </button>
                            </div>
                          </form>
                        )}
                      </>
                    )}
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

export default PassportPhoto;
