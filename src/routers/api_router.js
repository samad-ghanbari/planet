import { Router } from "express";
import * as apiController from "../controllers/api_controller.js";

const router = Router();

router.get("/home", (req, res) => {
	apiController.getHome(req, res);
});

router.get("/about", (req, res) => {
	apiController.getAbout(req, res);
});

export default router;
