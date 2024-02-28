const aboutMeService = require('../services/aboutMeService')

const { getLocationTemp } = aboutMeService

const getTemp = async (req, res, next) => {
  const {location} = req.body
  try {
    await getLocationTemp(location)
    res.sendStatus(201)
    next()
  } catch(e) {
    console.log(e.message)
    res.sendStatus(500) && next(error)
  }
}

export default aboutMeController