import React from 'react';
import './scorebar.css'

function Scorebar(props) {
    
        return (
        <div>
            <div className="container ">
                <div className="row scorebar">
                    <div className="col ml-4">HighScore: {props.highScore}</div>
                    <div className="col-md-auto">{props.clickedMessage}</div>
                    <div className="col mr-4 text-right">Correct: {props.correctGuess}/12</div>
                </div>
            </div>
        </div>
  );
}



export default Scorebar;