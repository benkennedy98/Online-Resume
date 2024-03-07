import { Request, Response } from 'express';
import { getTemp } from '../services/meteoMaticsService';

export const getLocationTempController = async (req: Request, res: Response) => {
    const { location } = req.body;
    const currentTemp = await getTemp(location);
    res.send(currentTemp);
};
