const { cwd } = require("process")

exports.renderHome = (req, res) => {
    res.sendFile(process, cwd() + "views/index.js")
}