import { DB_NAME } from "../constants.js";
import mongoose from "mongoose"


const connectDB = async () => {
    try {
       const connectionInstance = await mongoose.connect(
        `${process.env.MONGODB_URI}/${DB_NAME}`
      );
  
  
      console.log(` \n  MongoDB Connected :: db/index.js ${connectionInstance.connection.host}`);
      // console.log(connectionInstance.connection.host);
      
    } catch (error) {
      console.log(` MONGODB CONNECTION ERROR FAILED :: db/index.js :: ${error}`);
  
      // curr process ko terminate karo
      process.exit(1);
    }
  };
  export default connectDB