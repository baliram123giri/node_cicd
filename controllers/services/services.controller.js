const { Service } = require("../../model/services/services.model");
const { errorHandler, foundHandler, uploadCloudinary, deleteCloudinaryFile, getCloudinaryId } = require("../../utils/helpers");
const { createServiceValidator } = require("./validation");

async function createService(req, res) {
    try {
        await createServiceValidator.validateAsync(req.body)
        const { name, imageUrl } = req.body
        const services = await Service.findOne({ name })
        if (services) {
            //delete services image 
            await deleteCloudinaryFile(`Fiverr/${getCloudinaryId(imageUrl)}`, res)

            return foundHandler(res, "Service")
        }
        const result = await Service.create(req.body)
        return res.json(result)
    } catch (error) {
        errorHandler(res, error)
    }
}

async function listOfService(req, res) {
    try {
        const result = await Service.find()

        return res.json(result)
    } catch (error) {
        errorHandler(res, error)
    }
}

module.exports = { createService, listOfService }

