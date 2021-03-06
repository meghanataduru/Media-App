const express = require('express')
const router = express.Router()
const axios = require('axios');
// const htmlParser = require('html-parse-stringify')

module.exports = router;


router.get('/getLatestNews',(req,res) => {
    // axios.get('https://www.wqpmag.com/jsonapi/node/articles',(req,res) => {
    // }).then((data) => {
    //     console.log(`Data Received from WQP -> ${data.jsonapi}`);
    //     // res.send(JSON.stringify(JSON.parse(data)))
    // })
    // res.send('Request Came in for GetName')
    return new Promise((resolve,reject) => {
        axios.get('https://www.wwdmag.com/content/export?_format=json')
            .then((response) => {
                console.log(JSON.stringify(response.data[0]));
                // res.send(data)
        
                // let attributeNames = response.data.data.map((dataArr) => {
                //     return dataArr.attributes.title
                // })
                let responseBody =response.data[0]
                // res.send(response.body[0].body) 
                // res.send(htmlParser(response.data[0].body))
                res.send(responseBody.body)
            })
            resolve()
    })
})

router.get('/getIdentity',(req,res) => {
    res.send('Request Came in for getIdentity')
})

router.get('/getSomethingelse',(req,res) => {
    res.send('Request Came in for getSomethingelse')
})