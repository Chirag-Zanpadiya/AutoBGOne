import jwt from "jsonwebtoken";

// TODO: ye fns basically clerk ki jwt token ko decode karte clerk id req.body me dal deta hai taki usko middlware ki tarah use kar sake

const authUser = async (req, res, next) => {
  try {
    //TODO: if this project is in the production then see documentation of :: express clerk middleware

    const { token } = req.headers;

    if (!token) {
      return res.json({ success: false, message: "User is Not Authenticated" });
    }

    const token_decode = jwt.decode(token);
    console.log("token_decoded");

    console.log(token_decode.clerkId);

    console.log(`req`);
    console.log(req);

    req.body = req.body || {};
    req.body.clerkId = token_decode.clerkId;
    // req.clerkId = token_decode.clerkId;

    next();
  } catch (error) {
    console.log(
      `src :: middleware :: auth.js :: authUser :: error :: ${error.message}`
    );

    res.json({ success: false, message: error.message });
  }
};

export default authUser;
