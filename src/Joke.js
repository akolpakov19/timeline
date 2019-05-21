import React from 'react'

function Joke(props) {
    return (
        <div>
            <h3 style={{display: !props.question && "none"}}>{props.question}</h3>
            <h3 style={{color: !props.question && "#888888"}}>{props.punchLine}</h3>
            <hr/>
        </div>
    )
}

export default Joke