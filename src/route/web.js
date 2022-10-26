import express from "express";
import { append } from "express/lib/response";
import homeController from "../controllers/homeControllers"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    return app.use("/", router);
}

module.exports = initWebRoutes;

