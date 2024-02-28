const getLocationTemp = async (user, content) => {
  try {
    return '20F'
  } catch(e) {
    throw new Error(e.message)
  }
}

export default aboutMeService