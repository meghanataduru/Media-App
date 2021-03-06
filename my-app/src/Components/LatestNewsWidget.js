import React, { useEffect, useState } from 'react';
import axios from 'axios';
import htmlParse from 'html-react-parser'

function LatestNewsWidget() {
    const [body,setBody] = useState(``)
    useEffect(() => {
            axios.get('http://localhost:8088/api/v1/getLatestNews')
                 .then((resp) => {
                    console.log(resp.data);
                    const parsedData = htmlParse(resp.data)
                    setBody(parsedData)
                })
        })
    return(
    <div>
        {body}
    </div>)
    }

export default LatestNewsWidget;