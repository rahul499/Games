import React, { Component } from 'react';
import Square from './Square';

export default class Board extends Component {

renderSquare(i){
	return <Square value = {this.props.squares[i]}
	onClick={()=> this.props.onClick(i)}
	/>
   }

   render() {

   	return(
        
       

   		)
   }
}
