const express = require('express')
const app = express()

app.get('/', (req,res) => {
    res.send("hello")
    
})

app.get('/multbythree/:number', (req,res) => {
    try {
        const { number } = req.params

        if(number){
            const ourNumber = parseInt(number)
            const answer = ourNumber * 3
            res.json({
                'message': `${ourNumber} is multiplied by three to get: ${answer}`,
                'answer' : `${answer}`
            })
        }
    } catch (error) {
        this.response.status(500).send(error)

    }
})

module.exports = app