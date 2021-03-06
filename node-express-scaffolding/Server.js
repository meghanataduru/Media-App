const express = require('express');
const bodyParser = require('body-parser')
const config = require('./package.json')
const PORT = 8088;
const CONTEXT_ROOT = `/api/${config.apiVersion}`

let app;

const boot = () => {
    return new Promise((resolve,reject) => {
        app = express();
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({extended : true}))
        resolve();
    })
}


const registerRouting = () => {
    return new Promise((resolve,reject) => {
        app.get('/ping', (req,res) => {
            res.send("PING RECEIVED!!!")
        })
        app.get('/pong', (req,res) => {
            res.send("PONG RECEIVED!!!")
        })
        app.use(`${CONTEXT_ROOT}`,require(`./handlers/routeHandler`))
        resolve();
    })
}


const listen = () => {
    app.listen(PORT, (err) => {
        if(err) throw err;
        console.log(`APP Listening on port ${PORT}`);
    })
}


boot()
    .then(() => registerRouting())
    .then(() => listen())
