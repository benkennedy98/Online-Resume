import { getTemp } from '../services/meteoMaticsService';

export const getLocationTemp = async (req, res) => {
    const { location } = req.body;
    try {
        const temp = await getTemp(location);
        res.send(temp);
    } catch (error) {
        console.log(error.message);
        res.send(error);
    }
};
