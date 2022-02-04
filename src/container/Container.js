import React, { Component } from "react";
import Component4 from "../components/Component4";
import Elemento1 from "../components/Elemento1";
import { StyledMainContainer } from "../styled/StyledContainer1";

export default class Container extends Component {
   render() {
      return (
         <StyledMainContainer>
            <Component4 />
            <Elemento1 />
         </StyledMainContainer>
      );
   }
}
