import axios from "axios";
import fs from "fs";
import FormData from "form-data";
import { User } from "../models/user.model.js";

// Controller function to remove bg

const removeBGImage = async (req, res) => {
  try {
    const { clerkId } = req.body;
    console.log(`removeBGImage :: clerkId :: ${clerkId}`);
    

    const user = await User.findOne({ clerkId });

    if (!user) {
      return res.json({ success: false, message: "image.controller.js :: User Not Found" });
    }

    if (user.creditBalance === 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    const imagePath = req.file?.path;

    // reading the image file

    const imageFile = fs.createReadStream(imagePath);

    const formdata = new FormData();
    formdata.append("image_file", imageFile);

    const { data } = await axios.post(
      "https://clipdrop-api.co/remove-background/v1",
      formdata,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    const base64Image = Buffer.from(data, "binary").toString("base64");

    const resultImage = `data:${req.file.mimetype};base64,${base64Image}`;

    await User.findByIdAndUpdate(user._id, {
      creditBalance: user.creditBalance - 1,
    });

    res.json({ success: true, resultImage, creditBalance: user.creditBalance-1 , message : "BackGroun Removed"});
  } catch (error) {
    console.log(
      `src :: controllers :: image.controller.js :: removeBGImage :: error :: ${error.message}`
    );

    res.json({ success: false, message: error.message });
  }
};

export { removeBGImage };
