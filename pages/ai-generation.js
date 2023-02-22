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
import { RiseLoader, ClockLoader } from "react-spinners";
//= Components

const AIGeneration = () => {
  const [resImg, setResImg] = useState(null);
  const [upImg, setUpImg] = useState(null);
  const [resPrintImg, setResPrintImg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isImageLoading, setIsImageLoading] = useState(false);
  let formData;

  function handleDownloadClick() {
    saveAs(resImg, `image-${Date.now()}.png`);
  }

  const checkImageGeneration = (taskid) => {
    console.log("Checking Task....");
    axios.get(`https://www.cutout.pro/api/v1/getText2imageResult?taskId=${taskid}`, {
      headers: {
        APIKEY: "1ebae678d2ab4eacb47e72fe4f7adb9b",
      }
    }).then(res => {
      if (res.data.data.percentage !== 100) {
        setTimeout(() => {
          checkImageGeneration(taskid)
        }, 150);
      } else {
        setResImg(res.data.data.resultUrl)
        setIsImageLoading(false);
      }
    })
  }


  const sendApiRequest = (data) => {
    axios
      .post(`https://www.cutout.pro/api/v1/text2imageAsync`, data, {
        headers: {
          APIKEY: "1ebae678d2ab4eacb47e72fe4f7adb9b",
        },
      })
      .then((response) => {
        checkImageGeneration(response.data.data)
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.response.status === 415) toast.error("Image format not supported!!");
        console.error(error);
        setIsLoading(false);
      });
  };

  const handleAiPrompt = (e) => {
    e.preventDefault()
    setResImg(null);
    setUpImg(null);
    setIsLoading(true);
    setIsImageLoading(true);
    console.log("FormData>>", e.target["prompt"].value);
    // {
    //   prompt: "A dog eating Banana",
    //   // style(string, optional): The style of the image,
    //   // imageUrl(string, optional): The url of the input image,
    //   // width: (integer, optional): The width of the result image, between 128 and 2048, default value is 512, width*height must be less equal than 1920* 1080
    //   // height: (integer, optional): The height of the result image, between 128 and 2048, default value is 512, width*height must be less equal than 1920* 1080
    // }
    sendApiRequest({ prompt: e.target["prompt"].value })
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
            <div className="col-12 col-md-6 mx-md-auto mx-2 rounded-3 shadow-sm bg-white p-4">
              <form onSubmit={(e) => handleAiPrompt(e)}>
                <input type="text" name="prompt" id="prompt" />
                <button type="submit">Generate</button>
              </form>
              <RiseLoader
                loading={isLoading}
                color="#36d7b7"
                size={8}
                className="text-center my-2"
              />
            </div>
            <div className="container-sm mx-auto mt-4">
              <div className="row bg-white mx-2 mx-md-4 p-3 rounded shadow-lg">
                <div className="col-12 col-md-6 px-5">
                  <div className="text-center mb-3 fs-5 fw-bold">Result</div>
                  <div className='mx-2 text-center'>
                    <ClockLoader loading={isImageLoading} />
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

          </div>
        </main>
      </MainLayout>
    </>
  );
};

export default AIGeneration;
