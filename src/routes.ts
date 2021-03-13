import express from "express";
import DoctorsController from "./controllers/DoctorsController";

const router = express.Router();

router.post("/doctors", DoctorsController.insert);
router.get("/doctors", DoctorsController.select);
router.delete("/doctors/:id", DoctorsController.softDelete);
router.put("/doctors/:id", DoctorsController.update);

export default router;
