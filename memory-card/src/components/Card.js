import React from "react";



function Card(props) {
    const { cardId, src, description, onClickHandler } = props

        
    return (
        <div className="card" id={cardId} onClick={onClickHandler.bind(this, cardId)}>
            <img src={src} alt="" />
            <p>{description}</p>
        </div>
    );
}

export default Card