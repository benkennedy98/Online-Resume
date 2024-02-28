export const getTemp = async (location) => {
    try {
        return '20F'
    } catch(e) {
        throw new Error(e.message)
    }
}
