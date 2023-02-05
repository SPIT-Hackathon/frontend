import React from 'react'
import { Card } from 'react-bootstrap'

function NCard({ data }) {
    console.log("data", data)
    return (
        <Card style={{ width: '18rem', minHeight: '20rem', textAlign: "center", alignItems: "center", padding: "15px 0 5px 0" }}>
            {/* <Card.Img variant="top" src={data.urlToImage} style={{
                width: '35%',
            }} /> */}
            <Card.Img variant="top" src={data.urlToImage} />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <a href={data.url} target="_blank">{data.source.name}</a>
                <p>

                </p>
            </Card.Body>
        </Card>
    )
}

export default NCard