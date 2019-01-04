import React, { Component } from 'react';
var shirt = require('../assets/images/classic-tee.jpg');

class MiniCartSection extends Component {
  constructor(props){
    super(props);
      this.state = {
          minicartCondition: false,
          shirtSize: '',
          increment: 0
        }
    }

  onClickNav(){
    this.setState({
      minicartCondition: !this.state.minicartCondition
    });
  }

  getSizeVal(sizeVal){

        this.setState({
          shirtSize: sizeVal,
          increment: this.state.increment + 1
        });

  }
  render(){
    return(
        <div className={this.state.minicartCondition ? 'visible minicart-section' : 'hidden minicart-section'}>
          <div className="row">
            <div className="col-md-4 col-xs-4">
              <img alt="shirt" src={shirt} />
            </div>
            <div className="col-md-8 col-xs-8">
              <p>Classic Tea</p>
              <p>{this.state.increment} $75</p>
              <p>Size: {this.state.shirtSize}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default MiniCartSection;
