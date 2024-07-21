
async function createCategory(res, res) {
    try {

    } catch (error) {

    }
}
async function getCategories(res, res) {
    try {
        res.json([
            { "name": "Programming & Tech" },
            { "name": "Graphics & Design" },
            { "name": "Digital Marketing" },
            { "name": "Writing & Translation" },
            { "name": "Video & Animation" },
            { "name": "AI Services" },
            { "name": "Music & Audio" },
            { "name": "Business Consulting" }
        ])
    } catch (error) {
        return res.status(500).json({ message: error.message || error })
    }
}

module.exports = { createCategory, getCategories }