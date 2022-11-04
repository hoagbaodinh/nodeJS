import express from "express";
import { append } from "express/lib/response";
import homeController from "../controllers/homeControllers"

let router = express.Router();

let initWebRoutes = (app) => {
    router.get("/", homeController.getHomePage);
    router.get("/about", homeController.getAboutPage);
    router.get("/crud", homeController.getCRUD)
    router.post("/post-crud", homeController.postCRUD)
    return app.use("/", router);
}

module.exports = initWebRoutes;

