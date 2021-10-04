import React from 'react'

export default function Newsnotification(props) {
    return (
        <div className="notification">
            <span className="subnottopic">{ props.topic }</span> { props.body }
        </div>
        
    )
}
