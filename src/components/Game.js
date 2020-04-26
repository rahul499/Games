import React, { Component } from 'react';
import Square from './Square';
import Board from './Board';

export default class Game extends Component {
	
  constructor(props) {
    super(props);
    this.state = {
       xisNext: true,
       stepNumber: 0,
       history:[
              {squares: Array(9).fill(null) }
       ]
    }
  }

jumpTo(step) {
this.setState({
  stepNumber: step,
  xisNext: (step%2)===0
})
}

  handleClick(i) {
const history = this.state.history.slice(0, this.state.stepNumber+1);
const current =history[history.length-1];
const squares = current.squares.slice();
const winner = calculateWinner(squares);

if(winner || squares[i]){
  return;
}
squares[i] = this.state.xisNext?'X':'O';
this.setState({
     history:history.concat({
      squares :  squares
     }),
     xisNext: !this.state.xisNext,
     stepNumber: history.length
});

}
  
   
   render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner =calculateWinner(current.squares);
    const moves = history.map((step, move) => {
          const desc = move?  'Turn ' + move:'Start the Game';
          return(
                   <li key={move}>
                   <button onClick={()=> {this.jumpTo(move)}}>
                        {desc}
                   </button>
                   </li>
            )
    });

    let status;
    if(winner){
      status = 'Winner is ' + winner;
    }
    else{
      status = 'Next Player is ' + (this.state.xisNext?'X':'O');
    }


   	return(
          <div className="game">
          <div className="game-board">
          <Board onClick={(i)=>this.handleClick(i)}
          squares={current.squares} />
         </div> 
         <div className="game-info">
         <div>{status}</div>
         <ul> {moves} </ul>
        </div>
        </div>
   		)
   }
 }

function calculateWinner(squares){

const lines = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
  [2,1,0],
  [5,4,3],
  [8,7,6],
  [6,3,0],
  [7,4,1],
  [8,5,2],
  [8,4,0],
  [6,4,2]
];

  for(let i=0;i<lines.length;i++)
  {
    const [a,b,c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[b] === squares[c])
    {
      return squares[a];
    }
  }


  return null;
}