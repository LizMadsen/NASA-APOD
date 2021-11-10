const { logger } = require("../utils/Logger")


const apiKey = 'api_key=ICZCRsH76Xu919R70J1bF2ac5X7pPlHcgaEVzbWw'

class ApodSearchService {
    async findApodByQuery(query) {
        const res = await apodDB.get(`query=${query}&${apiKey}`)
        logger.log(res.data)
    }
}