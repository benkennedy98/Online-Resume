import express from 'express';
import aboutMeController from './controllers/aboutMeController';

const router = express.Router()

router.get('/aboutMe', aboutMeController.getTemp)

export default router