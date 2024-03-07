import express from 'express';
import { defaultRoute } from './defaultRoute';
import { getLocationTempRoute } from './meteoMaticsRoutes';

export const routes = express.Router();

routes.use(defaultRoute);
routes.use(getLocationTempRoute);
