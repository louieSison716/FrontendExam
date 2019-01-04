//i did not had much time anymore
// i already have the props and state values from my bigcart component to minicart component
// i was going to make a loop via map to an array to increment the components of mini Cart
// if given an extra hour i could finish this application
// Thanks
// React Developer: Louie Sison

import React, {  Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HeaderSection from './components/header_section.js';
import ContentSection from './components/content_section.js';

class App extends Component {

  constructor(props){
    super(props);
    this.HeaderSection = React.createRef();
   }

shirtSizeCallback(sizeVal){
  this.HeaderSection.current.getSizeVal(sizeVal);
}
 render() {

    const shirtSizeCallback = (sizeVal) => {this.shirtSizeCallback(sizeVal)}

    return (
         <React.Fragment>
            <HeaderSection
              ref={this.HeaderSection}
            />
            <ContentSection
              getShirtSize = {shirtSizeCallback}
            />
         </React.Fragment>
     );
 }
}


ReactDOM.render(<App />, document.getElementById('root'));
