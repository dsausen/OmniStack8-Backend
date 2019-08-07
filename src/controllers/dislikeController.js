const dev = require("../models/dev")

module.exports = {
    async store(req, res) {
        const { user } = req.headers, //loggedDev
        { devId } = req.params, //targetDev
        loggedDev = await dev.findById(user),
        targetDev = await dev.findById(devId)

        //If devId does not exist, return status 400
        if(!targetDev) {
            return res.status(400).json({ error: "Dev does not exist" })
        }

        //Pushes dislike to database
        /* loggedDev.dislikes.push(targetDev._id)
        await loggedDev.save() */

        return res.json(loggedDev)
    }
}