// import React, { useState } from "react";
// import { assets } from "../assets/assets";

// const BgSlider = () => {
//   const [sliderposition, setSliderPosition] = useState(50);

//   const handleSliderChange = (e) => {
//     setSliderPosition(e.target.value);
//   };
//   return (
//     <div className="pb-10 md:py-20 mx-2">
//       {/* Tittle */}
//       <h1 className="mb-12 sm:mb-20">
//         Remove Background With High <br /> Quality and Accuracy{" "}
//       </h1>
//         <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl">
//             {/* bg image */}
//             <img src={assets.image_w_bg} style={{clipPath : `inset(0 ${100.2 - sliderposition}% 0 0)`}} alt="image_w_bg" />
//             {/* foreground image */}
//             <img className="absolute top-0 left-0 w-full h-full" src={assets.image_wo_bg} style={{clipPath : `inset(0 0 0 ${sliderposition}%)`}} alt="image_wo_bg" />

//             {/* slider */}

//             <input className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider" type="range" min={0} max={100} value={sliderposition} onChange={handleSliderChange} />

//         </div>

//     </div>
//   );
// };

// export default BgSlider;


import React, { useState } from "react";
import { assets } from "../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="pb-10 md:py-20 mx-2">
      <h1 className="mb-12 sm:mb-20 text-center text-3xl sm:text-4xl font-bold text-white">
        Remove Background With High <br /> Quality and Accuracy
      </h1>

      <div className="relative w-full max-w-3xl overflow-hidden m-auto rounded-xl shadow-2xl group aspect-[4/3]">
        {/* Background image */}
        <img
          src={assets.image_w_bg}
          alt="with_bg"
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            zIndex: 1,
          }}
        />

        {/* Foreground image */}
        <img
          src={assets.image_wo_bg}
          alt="without_bg"
          className="absolute top-0 left-0 w-full h-full object-cover transition-all duration-500"
          style={{
            clipPath: `inset(0 0 0 ${sliderPosition}%)`,
            zIndex: 2,
          }}
        />

        {/* Vertical Indicator Line */}
        <div
          className="absolute top-0 h-full w-[2px] bg-white opacity-80 z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
        />

        {/* Slider */}
        <input
          type="range"
          min={0}
          max={100}
          value={sliderPosition}
          onChange={handleSliderChange}
          className="slider absolute z-30 top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default BgSlider;
