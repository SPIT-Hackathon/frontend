import React from 'react'

function RCard({ data }) {
    return (
        <div>
            <h3>{data.title}</h3>
            <p>{data.link}</p>
        </div>
    )
}

export default RCard