import express from "express";
import protect from "../middleware/authMiddleware.js";
import { createResume, deleteResume, getpublicResumeById, getResumeById, updateResume } from "../controllers/resumeController.js";
import upload from "../config/multer.js";


const resumeRouter = express.Router();

resumeRouter.post('/create', protect, createResume);
resumeRouter.put('/update', upload.single('image'), updateResume);
resumeRouter.delete('/delete/:resumeId', protect, deleteResume);
resumeRouter.get('/get/:resumeId', protect, getResumeById);
resumeRouter.get('/public/:resumeId', getpublicResumeById);

export default resumeRouter