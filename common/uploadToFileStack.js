import axios from "axios";

export const UploadToFileStack = () => {
  const headers = {
    "Content-Type": "image/png",
  };

  const file = "<file contents here>";

  axios
    .post(
      "https://www.filestackapi.com/api/store/S3?key=AQYE57hWSGAea06WK8Rxgz",
      file,
      {
        headers,
      }
    )
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error));
};
