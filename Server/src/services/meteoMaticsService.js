export const getTemp = async (location) => {
    try {
        const username = 'none_kennedy_ben';
        const password = 'HT1p95qHum';
        let accessToken = '';
        const getAccessToken = () => {
            axios({
                method: 'get',
                url: 'https://login.meteomatics.com/api/v1/token',
                auth: {
                    username: username,
                    password: password,
                },
            })
                .then(({ data }) => {
                    const token = data.access_token;
                    console.log('token', token);
                    accessToken = token;
                })
                .catch(function (err) {
                    console.log('something went wrong', err);
                });
        };

        const getTemp = () => {
            axios({
                method: 'get',
                url: `https://api.meteomatics.com/${new Date().toISOString()}/t_2m:F/postal_US80128/json`,
                headers: {
                    Authorization:
                        'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjoxLCJ1c2VyIjoibm9uZV9rZW5uZWR5X2JlbiIsImlzcyI6ImxvZ2luLm1ldGVvbWF0aWNzLmNvbSIsImV4cCI6MTcwOTA4Nzk2MSwic3ViIjoiYWNjZXNzIn0.YLvVuuIMpYoar0AMfZIEzkbi6Fr70Ja2aU4tftwCrZBhfmlNX7if8B7P8vzgifQwE57-Yr4A2IO_fr9THise2Q',
                },
            })
                .then(({ data }) => {
                    console.log(data.data[0].coordinates[0].dates[0].value);
                })
                .catch(function (err) {
                    console.log('something went wrong', err);
                });
        };

        return '20F';
    } catch (e) {
        throw new Error(e.message);
    }
};

// app.get('/aboutMe', (req, res) => {

//     const username = 'none_kennedy_ben';
//     const password = 'HT1p95qHum';
//     let accessToken = '';

//     const getAccessToken = () => {
//       axios({
//         method: 'get',
//         url: 'https://login.meteomatics.com/api/v1/token',
//         auth: {
//           username: username,
//           password: password,
//         },
//       })
//         .then(({ data }) => {
//           const token = data.access_token;
//           console.log('token', token);
//           accessToken = token;
//         })
//         .catch(function (err) {
//           console.log('something went wrong', err);
//         });
//     };

//     const getTemp = () => {
//         axios({
//           method: 'get',
//           url: `https://api.meteomatics.com/${new Date().toISOString()}/t_2m:F/postal_US80128/json`,
//           headers: {
//             Authorization: 'Bearer eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2IjoxLCJ1c2VyIjoibm9uZV9rZW5uZWR5X2JlbiIsImlzcyI6ImxvZ2luLm1ldGVvbWF0aWNzLmNvbSIsImV4cCI6MTcwOTA4Nzk2MSwic3ViIjoiYWNjZXNzIn0.YLvVuuIMpYoar0AMfZIEzkbi6Fr70Ja2aU4tftwCrZBhfmlNX7if8B7P8vzgifQwE57-Yr4A2IO_fr9THise2Q'
//           }
//         })
//           .then(({ data }) => {
//             console.log(data.data[0].coordinates[0].dates[0].value);
//           })
//           .catch(function (err) {
//             console.log('something went wrong', err);
//           });
//       };

//       getTemp()

//     res.send('Hello World!')
//   })
