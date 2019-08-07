const axios = require("axios"),
    dev = require("../models/dev")

module.exports = {
    async index(req, res) {
        const { user } = req.headers,
        loggedDev = await dev.findById(user),
        users = await dev.find({
            $and: [
                { _id: {$ne: user} },
                { _id: {$nin: loggedDev.likes} },
                { _id: {$nin: loggedDev.dislikes} }
            ]
        })

        return res.json(users)
    },
    async store(req, res) {
        const { username } = req.body,
        userExists = await dev.findOne({ user: username })
        
        if (userExists) {
            return res.json(userExists)
        }

        const response = await axios.get(`https://api.github.com/users/${username}`),
        {name, bio, avatar_url: avatar} = response.data,
        novoDev = await dev.create({
            name,
            user: username,
            bio,
            avatar
        })

        return res.json(novoDev)
    }
}
