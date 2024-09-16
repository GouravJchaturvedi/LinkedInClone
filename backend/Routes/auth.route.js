import { Router } from "express";
import { login, logout, signup  , getCurrentUser} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const authRoute = Router();

authRoute.post("/signup", signup);
authRoute.post("/login", login);
authRoute.post("/logout", logout);

authRoute.get("/me" , protectRoute , getCurrentUser)

export default authRoute;
