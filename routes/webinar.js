const express = require('express')
const webinarRouter = express.Router()
const axios = require('axios')

webinarRouter.get('/', async(req, res) => {
    try {
        const webinarAPI = await axios.get(`https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fplaylist_id%3DPLtArheW_rmIbXtsm7Ff4eYKWut-CgC5Gr`)
        console.log(webinarAPI.data.items[0].link);
        res.render('webinars', { webinars : webinarAPI.data.items })
    } catch (err) {
        if(err.response) {
            res.render('webinars', { webinars : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('webinars', { webinars : null })
            console.log(err.requiest)
        } else {
            res.render('webinars', { webinars : null })
            console.error('Error', err.message)
        }
    } 
})

module.exports = webinarRouter 