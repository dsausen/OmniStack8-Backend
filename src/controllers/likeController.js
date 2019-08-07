const dev = require("../models/dev")

module.exports = {
    async store(req, res) {
        const { user } = req.headers,
        { devId } = req.params,
        loggedDev = await dev.findById(user),
        targetDev = await dev.findById(devId)

        if(!targetDev) {
            return res.status(400).json({ error: "Dev does not exist" })
        }

        if(targetDev.likes.includes(loggedDev._id)) {
            console.log("DEU MATCH!")
        }

        //Pushes like to database
        /* loggedDev.likes.push(targetDev._id)
        await loggedDev.save() */

        return res.json(loggedDev)
    }
}