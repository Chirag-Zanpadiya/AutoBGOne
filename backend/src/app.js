// import express from "express";
// import "dotenv/config";
// import cors from "cors";

// // const app = express();

// // app.use(cors());
// // app.use(express.json({ limit: "32kb" }));

// // // This middleware allows your Express app to parse URL-encoded form data (e.g., from HTML forms).
// // // When a form is submitted with application/x-www-form-urlencoded data (e.g., name=Chirag&age=22), Express needs to extract the values from the request body.
// // // This middleware helps convert form data into a JavaScript object.
// // // TODO: url se aya huva data yaha handle hota hai
// // app.use(express.urlencoded({ extended: true, limit: "32kb" }));

// // // Purpose: This serves static files like images, CSS, JavaScript, PDFs, etc.
// // // If your frontend needs images or CSS files stored in your backend, this middleware helps serve those files.
// // // For example, if there is a file public/logo.png, you can access it at http://localhost:5000/logo.png.
// // app.use(express.static("public"));

// // // Purpose: This middleware parses cookies from incoming requests.
// // // When users log in, authentication tokens (JWT, session IDs) are often stored in cookies.
// // // cookieParser() allows Express to read and manipulate those cookies.
// // // Example: If a request has Cookie: sessionId=abc123, this middleware makes it available in req.cookies.sessionId.
// // // TODO:Haan! cookieParser() ka use tokens (jaise JWT) ko cookies se read karne ke liye hota hai — taaki hum unse user ka data access kar sakein aur authentication/authorization kar sakein.

// // import userRouter from "./routes/user.routes.js";
// // import imageRouter from "./routes/image.routes.js";
// // app.use("/api/user", userRouter);
// // app.use("/api/image" , imageRouter)
// // export { app };





// const app = express();

// // Handle Clerk raw-body webhook before JSON parser
// app.use("/api/user/webhooks", express.raw({ type: "*/*" }));


// // Now parse JSON and urlencoded after that
// // app.use(express.json({ limit: "32kb" }));
// // app.use(express.urlencoded({ extended: true, limit: "32kb" }));
// app.use(cors({
//   origin: "*", // or restrict to vercel URL if needed
// }));
// app.use(express.static("public"));

// // Routers
// import userRouter from "./routes/user.routes.js";
// import imageRouter from "./routes/image.routes.js";

// app.use("/api/user", userRouter);
// app.use("/api/image", imageRouter);

// export { app };




// new chatGPT 
import express from "express";
import "dotenv/config";
import cors from "cors";
import { buffer } from "node:stream/consumers";

const app = express();

// Raw parser for Clerk Webhook only
app.use("/api/user/webhooks", express.raw({ type: "*/*" }));

// JSON parser for rest of the app
app.use(express.json({ limit: "32kb" }));
app.use(express.urlencoded({ extended: true, limit: "32kb" }));

app.use(cors({ origin: "*" }));
app.use(express.static("public"));

// Routers
import userRouter from "./routes/user.routes.js";
import imageRouter from "./routes/image.routes.js";

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

export { app };
