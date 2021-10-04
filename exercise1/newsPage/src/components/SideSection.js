import React from 'react'

export default function SideSection(props) {
    return (
        <div className="sidesection">
            <div className="sidesectionNum">{ props.number }</div>
            <div className="sidesectionTitle">{ props.topic } <span className="sidesectionStory">{props.story}</span></div>
        </div>
    )
}
