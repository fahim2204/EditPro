import multer from "multer";
import axios from "axios";
import fs from "fs";

export default async (req, res) => {
  const { method } = req;

  const upload = multer({ dest: "./public/images" });

  switch (method) {
    case "POST":
      console.log(req.file);
      upload.single("file")(req, res, async (err) => {
        if (err) {
          console.error(err);
          res.statusCode = 500;
          res.end("Error uploading file");
          return;
        }
        const filePath = req.body.path;
        const fileData = fs.readFileSync(filePath);

        // Make a POST request to the other API with the file as the request body
        try {
          const response = await axios.post(
            "https://example.com/upload",
            fileData,
            {
              headers: {
                "Content-Type": "image/jpeg", // Set the Content-Type header according to your file type
              },
            }
          );

          console.log("File uploaded to other API:", response.data);

          // Do any other necessary processing, such as renaming or moving the file

          res.statusCode = 200;
          res.end("File uploaded successfully");
        } catch (error) {
          console.error(error);
          res.statusCode = 500;
          res.end("Error uploading file to other API");
        }
      });
      // const { file } = req.body;

      // // decode the base64-encoded file data
      // const data = Buffer.from(file, "base64");

      // // create a unique filename for the uploaded file
      // const filename = Date.now().toString() + ".png";

      // // write the file to disk
      // fs.writeFile(filename, data, (err) => {
      //   if (err) {
      //     console.log(err);
      //     return res.status(400).json({ message: "Error uploading file" });
      //   }

      //   // do something with the file, such as save it to a database or process it

      //   return res.status(200).json({ message: "File uploaded successfully" });
      // });
      // Record.Create()
      // axios
      //   .post("https://www.cutout.pro/api/v1/matting?mattingType=6", req.body.get('data'), {
      //     headers: {
      //       APIKEY: "1ebae678d2ab4eacb47e72fe4f7adb9b",
      //     },
      //     responseType: "blob", // Add this line to get a blob response
      //   })
      //   .then(async (response) => {
      //     const imageBlob = response.data; // Get the response data as a blob
      //     const imageUrl = URL.createObjectURL(imageBlob); // Convert the blob to a URL
      //     console.log("ImgafgeURL",imageUrl)
      //   //   setResImg(imageUrl);
      //   //   setIsLoading(false);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
      break;
    default:
      res.status(405).json({ error: "Bad Method Called!!" });
      break;
  }
};
