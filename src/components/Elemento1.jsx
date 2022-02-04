import React, { Component } from 'react';
import { StyledElemento1 } from '../styled/StyledContainer1';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Component5 from './Component5';

export default class Elemento1 extends Component {
  render() {
    return <StyledElemento1><Component1/><Component2/><Component3/><Component5/></StyledElemento1>;
  }
}
