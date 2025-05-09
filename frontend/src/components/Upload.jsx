import React, { useState } from "react";
import Tilt from "react-parallax-tilt";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      setPreview(URL.createObjectURL(droppedFile));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div id="upload" className="flex flex-col items-center justify-center gap-10 px-4">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center">
        Upload Your Image
      </h2>

      {/* Tilt Upload Box */}
      <Tilt
        tiltMaxAngleX={15}
        tiltMaxAngleY={15}
        glareEnable={true}
        glareMaxOpacity={0.2}
        scale={1.05}
        transitionSpeed={1000}
        className="w-full max-w-md"
      >
        <div
          className="flex flex-col items-center justify-center min-h-[300px] bg-[#1A1A1A] border-2 border-dashed border-orange-500 rounded-2xl p-6 text-white transition-all duration-300 hover:shadow-[0_0_20px_#ff8c00] hover:border-orange-400"
          onDrop={handleDrop}
          onDragOver={handleDragOver}
        >
          {!preview ? (
            <>
              <label
                htmlFor="fileUpload"
                className="cursor-pointer flex flex-col items-center gap-3"
              >
                <div className="text-4xl">📁</div>
                <div className="text-lg font-medium text-white">
                  Drag & drop your file here
                </div>
                <div className="text-sm text-gray-400">or click to browse</div>
              </label>
              <input
                id="fileUpload"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
            </>
          ) : (
            <div className="flex flex-col items-center">
              <img
                src={preview}
                alt="Preview"
                className="max-w-xs max-h-64 rounded-xl shadow-lg"
              />
              <p className="mt-4 text-sm text-[#b5b5b5]">{file.name}</p>
              <button
                onClick={() => {
                  setFile(null);
                  setPreview(null);
                }}
                className="mt-4 px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition duration-300"
              >
                Remove
              </button>
            </div>
          )}
        </div>
      </Tilt>
    </div>
  );
};

export default Upload;
