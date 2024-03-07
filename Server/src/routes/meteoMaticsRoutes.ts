import { Router } from 'express';
import { getLocationTempController } from '../controllers/meteoMaticsController';

export const getLocationTempRoute = Router();

getLocationTempRoute.get('/getLocationTemp', getLocationTempController);
