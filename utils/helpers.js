const cloudinary = require('cloudinary').v2
const fs = require('fs');
cloudinary.config({
    api_key: process.env.CLOUDINARY_KEY,
    cloud_name: process.env.CLOUDINARY_NAME,
    api_secret: process.env.CLOUDINARY_SECRET
})

function uploadCloudinary(folder) {
    return async (req, res, next) => {
        if (!req?.file) {
            errorHandler(res, { message: "Please provide a file" })
        }
        cloudinary.uploader.upload_stream({
            folder,
            public_id: Date.now(),
            resource_type: "image",
            transformation: {
                quality: "auto:low"
            }
        }, async (error, result) => {

            if (req.file && req.file.path) {
                fs.unlink(req.file.path, (unlinkError) => {
                    if (unlinkError) {
                        console.error('Error removing uploaded file:', unlinkError);
                    } else {
                        console.log('Uploaded file removed from the local file system');
                    }
                });
            }

            if (error) {
                console.error('Error uploading to Cloudinary:', error.message);
                return res.status(500).json({ error: 'Error uploading to Cloudinary', error });
            }
            req.body.imageUrl = result.url
            next()
        }).end(req.file.buffer)
    }
}
async function deleteCloudinaryFile(id, res) {
    await cloudinary.api.delete_resources([id], async (err) => {
        if (err) {
            return res.status(500).json({ message: "File delete error", err })
        }
    })

}

function errorHandler(res, err) {
    return res.status(500).json({ message: err?.message || err })
}

//found error handler
function foundHandler(res, type) {
    return res.status(500).json({ message: `${type} is already exists` })
}

function getCloudinaryId(url) {
    return url.split("/").pop().split(".")[0]
}

module.exports = { errorHandler, foundHandler, uploadCloudinary, deleteCloudinaryFile, getCloudinaryId }