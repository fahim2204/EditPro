import axios from "axios";

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
        console.log(req);
      axios
        .post("https://www.cutout.pro/api/v1/matting?mattingType=6", req.body.get('data'), {
          headers: {
            APIKEY: "1ebae678d2ab4eacb47e72fe4f7adb9b",
          },
          responseType: "blob", // Add this line to get a blob response
        })
        .then(async (response) => {
          const imageBlob = response.data; // Get the response data as a blob
          const imageUrl = URL.createObjectURL(imageBlob); // Convert the blob to a URL
          console.log("ImgafgeURL",imageUrl)
        //   setResImg(imageUrl);
        //   setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
      break;
    default:
      res.status(405).json({ error: "Bad Method Called!!" });
      break;
  }
};
