import React, { Component } from 'react';
// import logo from './logo.svg';
import Navbar from './components/Navbar'
import Scorebar from './components/Scorebar';
import Cards from './components/Cards';
import './components/cards.css';
import chars from './chars.json'


let clickedMessage = "Click a card to start, dont click the same card twice!!";
let highScore = 0;
let correctGuess = 0;
class App extends Component {
  state = {
    chars,
    clickedMessage,
    highScore,
    correctGuess
    
};
//this function will be called when one of the cards is clicked  
clicker = id =>{
  const chars = this.state.chars
  
  const currentChar = chars.filter(char => char.id === id)

  //clickedChar is an array with only the most recent char inside it
  //if the card property clicked is true then the user will lose
  if (currentChar[0].clicked){
    console.log("you lose")

    clickedMessage = "Oh No you Lose! Better luck next time!"

    correctGuess = 0

    //reset all clicked cards to false
    chars.forEach(char => char.clicked = false);


    this.setState({clickedMessage})
    this.setState({correctGuess})
    this.setState({chars})
    
  }
  //if the correct guess count has not reached the max then continue the game
  else if(correctGuess < 11){
    console.log("right")
    currentChar[0].clicked = true;
    
    clickedMessage = "Nice guess, keep it going"

    correctGuess++


    if (highScore < correctGuess){
      highScore = correctGuess
    }

    //sorts the array so the images chang order every click
    chars.sort((a,b)=> 0.5 - Math.random())


    this.setState({highScore})
    this.setState({clickedMessage})
    this.setState({correctGuess})
    this.setState({chars})
  }
  //once the game has been won, announce win and reset the game
  else{
    console.log("win")
    
    clickedMessage = "CONGRATS YOU GOT THEM ALL RIGHT!!!, Now can you do it again?"
  
    correctGuess = 0

    highScore = 12

    chars.forEach(char => char.clicked = false);


    this.setState({correctGuess})
    this.setState({clickedMessage})
    this.setState({highScore})
    this.setState({chars})
  }

  }
  render(){
    return (
      <div>
        <div className="container-fluid p-0">

        <Navbar />
        <Scorebar 
          clickedMessage={this.state.clickedMessage}
          highScore={this.state.highScore}
          correctGuess={this.state.correctGuess}
          />
          </div>
        <div className="container body-background">
          <div className="row my-1 justify-content-md-center">
            {
              this.state.chars.map(char => (
                <Cards  
                key={char.id} 
                id={char.id} 
                name={char.name}
                image={char.image}
                clicked={char.clicked}
                clicker={this.clicker}
                />)
              )
            }
          </div>
        </div>

      </div>
  );
}
}

export default App;
