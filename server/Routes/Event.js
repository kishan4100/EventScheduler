import { fetchEvents, postEvents } from "../Controllers/eventHandler.js";
import express from "express";

const router = express.Router();

router.get("/", fetchEvents);
router.post("/", postEvents);

export default router;
