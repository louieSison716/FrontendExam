import React, { Component } from 'react';
import BigCartSection from './bigcart_section';
var shirt = require('../assets/images/classic-tee.jpg');

class ContentSection extends Component {

 shirtSizeCallback(sizeVal){
   this.props.getShirtSize(sizeVal);
 }

  render(){

    const shirtSizeCallback = (sizeVal) => {this.shirtSizeCallback(sizeVal)}

    return(
         <div className="container content-section">
          <div className="row">
            <div className="col-md-6 col-xs-12">
              <img alt="shirt" src={shirt} />
            </div>
            <div className="col-md-6 col-xs-12">
                <BigCartSection
                  getShirtSize = {shirtSizeCallback}
                />
            </div>
          </div>

         </div>
    );
  }
}


export default ContentSection;
