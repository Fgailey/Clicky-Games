import React from 'react';
import "./cards.css"


function Cards(props) {
  return (
    <div>
      
        <div className="col my-1">
          <div className="card chars" onClick={() => props.clicker(props.id)}>
            <img src={props.image} className="card-img-top" alt={props.name} />
          </div>
        </div>

    </div>
  );
}

export default Cards;