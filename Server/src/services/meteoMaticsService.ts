import axios from 'axios';

export const getTemp = async (location: string) => {
    const username = 'none_kennedy_ben';
    const password = 'HT1p95qHum';

    const getAccessToken = async () => {
        try {
            return axios({
                method: 'get',
                url: 'https://login.meteomatics.com/api/v1/token',
                auth: {
                    username: username,
                    password: password,
                },
            });
        } catch (error) {
            console.log('something went wrong', error.message);
        }
    };

    const accessToken = (await getAccessToken()).data.access_token;

    const getTemp = async (accessToken: string) => {
        try {
            return axios({
                method: 'get',
                url: `https://api.meteomatics.com/${new Date().toISOString()}/t_2m:F/postal_US${location}/json`,
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
            });
        } catch (error) {
            console.log('something went wrong', error.message);
        }
    };

    const currentTemp = (
        await getTemp(accessToken)
    ).data.data[0].coordinates[0].dates[0].value.toString();

    return currentTemp;
};
