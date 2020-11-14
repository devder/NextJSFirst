const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
        app.render(req, res, '/post', { id: req.params.id, color: 'pink' }) //id key is coming from the 'post file which was made a prop from the query and 'color' is also passed to 'post' as a prop still from the server side
    })

    //handle is for the default route that is expected while app.render is for when we wanna make alternatives
    server.get('*', (req, res) => {
        handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> now serving on http://localhost:3000')
    })
})