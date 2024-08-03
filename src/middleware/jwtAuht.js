import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const jwtAuth = (req, res, next) => {

    // 1. Read the token from the cookie
    const token = req.cookies.author;

    // 2. if no token, return the error
    if (!token) {
        return res.status(401).send(" missed token from cookies Unauthorized");
    }

    // 3. check if token is valid
    try {
        const payload = jwt.verify(token, process.env.SECRET_KEY);
        req.user = payload;
    } catch (err) {
        // 4. return error
        console.log(err);
        return res.status(401).send("Error happen Unauthorized");
    }

    // 5. call next middleware
    next();
};

export default jwtAuth;