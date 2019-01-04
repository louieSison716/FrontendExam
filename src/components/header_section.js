import React, { Component } from 'react';
import MiniCartSection from './minicart_section';

class HeaderSection extends Component {

  constructor(props){
    super(props);

    this.state = {
        hiddenIcon: "hidden",
        hiddenText: "",
    }
    this.MiniCartSection = React.createRef();
   }

  componentDidMount() {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
    this.setState({
        hiddenIcon:'',
        hiddenText: 'hidden',
    });
  }
}
onClick(){
    this.MiniCartSection.current.onClickNav();
}
getSizeVal(sizeVal){
  this.MiniCartSection.current.getSizeVal(sizeVal);
}

  render(){

    return(
      <div className="header-section">
          <p onClick={event => this.onClick()}><span className={this.state.hiddenIcon}><i className="fas fa-shopping-cart"></i></span><span className={this.state.hiddenText}>My Cart</span>(4)</p>
          <MiniCartSection
            ref={this.MiniCartSection}
          />
      </div>
    )
  }
}


export default HeaderSection;
