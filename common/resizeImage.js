import Resizer from "react-image-file-resizer";

export default (file) =>
  new Promise((resolve) => {
    Resizer.imageFileResizer(
      file,
      400,
      400,
      "PNG",
      90,
      0,
      (uri) => {
        resolve(uri);
      },
      "base64"
    );
  });
