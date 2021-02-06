import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

import images from "../images.js";
import Card from "./Card.js";

function Cards(props) {

  const { score, addCard } = props;
  const [cards, setCards] = useState(images)
 
  useEffect(() => {
    shuffle(cards);
    console.log(cards);
  }, [score]);

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
       const randomIndx = Math.floor(Math.random() * i);
      [array[i], array[randomIndx]] = [array[randomIndx], array[i]];
    }
  };

  return (
    <div className="cards-container">
      {
        cards.map((image) => { 
          return (
            <Card 
              key={uniqid()}
              cardId={image.id} 
              src={image.src} 
              description={image.description} 
              onClickHandler={addCard}
            />
          );
        })

      }
    </div>
  );
}

export default Cards