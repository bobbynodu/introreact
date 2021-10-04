import React from 'react'

export default function MainSection(props) {
    return (
        <div className="mainSection">
            <div className="mainSectionHeader">{ props.header }</div>
            <div className="mainSectionBody">{ props.body }</div>
            <div className="mainSectionTime">{props.language} { props.time}</div>
        
        </div>
    )
}
