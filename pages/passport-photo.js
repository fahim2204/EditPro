import { useState, useEffect, useRef, useCallback } from "react";
import axios from "axios";
import Dropzone from "react-dropzone";
import { MdCloudUpload } from "react-icons/md";
import { saveAs } from "file-saver";
import { toast } from "react-toastify";

import Head from "next/head";
//= Scripts
//= Layout
import MainLayout from "../layouts/Main";
import { RiseLoader } from "react-spinners";
//= Components

const PassportPhoto = () => {
  const [resImg, setResImg] = useState(null);
  const [upImg, setUpImg] = useState(null);
  const [resPrintImg, setResPrintImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  let formData;


  function handleDownloadClick() {
    saveAs(resImg, `image-${Date.now()}.png`);
  }
  const sendApiRequest = (data) => {
    axios
      .post("https://www.cutout.pro/api/v1/idphoto/printLayout", data, {
        headers: {
          APIKEY: "1ebae678d2ab4eacb47e72fe4f7adb9b",
        },
      })
      .then((response) => {
        console.log("PassRes", response.data.data.idPhotoImage);
        setResImg(response.data.data.idPhotoImage)
        setResPrintImg(response.data.data.printLayoutImage)
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 415) toast.error("Image format not supported!!");
        console.error(error);
        setIsLoading(false);
      });
  };

  const handleDropImage = async (item) => {
    setResImg(null);
    setUpImg(null);
    setIsLoading(true);
    const file = item[0];
    if (!file.type.startsWith("image/")) {
      setIsLoading(false);
      toast.success("Please select image only.");
      return null;
    }


    // Setting Other parameters For Passport photo modifications
    formData = {
      ...formData,
      bgColor: "FFFFFF",
      dpi: 300,
      mmHeight: 40,
      mmWidth: 35,
      printBgColor: "FFFFFF",
      printMmHeight: 210,
      printMmWidth: 150
    }

    const blob = new Blob([await item[0].arrayBuffer()], {
      type: 'image/png',
    });
    const url = URL.createObjectURL(blob);
    setUpImg(url);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      const base64 = e.target.result;
      formData = { ...formData, base64: base64.split(",")[1] }

      console.log("Sending API request...");
      sendApiRequest(formData);
      console.log("API request Sent");
    };

  };

  return (
    <>
      <Head>
        <title>Edit Pro - Passport Photo</title>
      </Head>

      <MainLayout>
        <main className="portfolio-page style-1">
          <div className="portfolio-projects style-1 py-5">
            <h1 className="text-center fs-2 mb-5">Passport Photo</h1>
            <div className="col-12 col-md-6 mx-md-auto mx-2 rounded-3 shadow-sm bg-white p-4">
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
                      <p className="text-center">or drop a file here</p>
                    </div>
                  </div>
                )}
              </Dropzone>
              <RiseLoader
                loading={isLoading}
                color="#36d7b7"
                size={8}
                className="text-center my-2"
              />
            </div>
            {resImg && (
              <div className="container-sm mx-auto mt-4">
                <div className="row bg-white mx-2 mx-md-4 p-3 rounded shadow-lg">
                  <div className="col-12 col-md-6 px-5">
                    <div className="text-center mb-3 fs-5 fw-bold">Original</div>
                    <div className="mx-2">
                      {upImg && <img className="rounded-3 shadow" src={upImg} alt="original" />}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 px-5">
                    <div className="text-center mb-3 fs-5 fw-bold">Result</div>
                    <div className="mx-2">
                      {resImg && (
                        <img
                          className="bg-transparent-img"
                          src={resImg}
                          download={resImg}
                          alt="result"
                        />
                      )}
                    </div>
                    <div className="text-center">
                      <div
                        className="btn btn-sm rounded-3 btn-success my-2"
                        onClick={handleDownloadClick}
                      >
                        Download Image
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

export default PassportPhoto;
