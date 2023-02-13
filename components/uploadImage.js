export default function UploadImage() {
  return (
    <>
      <label for="dropzone-file">
        <div className="flex flex-col justify-center items-center bg-neutral-400 w-full h-full cursor-pointer rounded-xl">
            <svg
              aria-hidden="true"
              className="text-black-400 w-20 h-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              ></path>
            </svg>
            <p className="mb-2 text-m text-black-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-black-400">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>
        <input id="dropzone-file" type="file" className="hidden" />
      </label>
    </>
  );
}
