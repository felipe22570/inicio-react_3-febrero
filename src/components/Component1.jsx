import React, { Component } from 'react';
import { StyledContainer1, StyledH2 } from '../styled/StyledContainer1';


export default class Component1 extends Component {
  render() {
    return( 
    <StyledContainer1>
        <StyledH2>Mis estudios</StyledH2>
        <h4>Universidad Sergio Arboleda</h4>
        <span>Mision Tic 2022</span>
        <h4>SENA</h4>
        <span>Técnico en programación de software</span>
    </StyledContainer1>)
    ;
  }
}
