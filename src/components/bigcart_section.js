import React, { Component } from 'react';


class BigCartSection extends Component {

  constructor(props){
    super(props);

    this.state = {
        size :'',
        firstCondition: false,
        secCondition: false,
        thirdCondition: false,
        btnCondition: false
    }

   }
  OnSizeEvenet(event){
    this.setState({
        size: event
    });

    switch (event) {
          case 'Small':
            this.setState({
              firstCondition: !this.state.firstCondition,
              secCondition: false,
              thirdCondition: false,
              btnCondition: !this.state.btnCondition
            })
          break;
          case 'Medium':
            this.setState({
              firstCondition: false,
              secCondition: !this.state.secCondition,
              thirdCondition: false,
              btnCondition: !this.state.btnCondition
            });
          break;
          case 'Large':
            this.setState({
              firstCondition: false,
              secCondition: false,
              thirdCondition: !this.state.thirdCondition,
              btnCondition: !this.state.btnCondition
            });
          break;
          default:
          break;
      }
      this.props.getShirtSize(event);
  }
  render(){
    return(
      <div className="bigcart-section-holder">
         <h3 className="cart-title">Classic Tee</h3>
         <p className="cart-price"><b>$75</b></p>
         <p className="cart-desc">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         </p>
         <p className="desc-size">Size<span className="desc-req">* <b>{this.state.size}</b></span></p>
         <ul className="list-group">
            <li className={this.state.firstCondition ? "list-group-item active" : "list-group-item"} onClick={event => this.OnSizeEvenet(event = 'Small')}>S</li>
            <li className={this.state.secCondition ? "list-group-item active" : "list-group-item"} onClick={event => this.OnSizeEvenet(event = 'Medium')}>M</li>
            <li className={this.state.thirdCondition ? "list-group-item active" : "list-group-item"} onClick={event => this.OnSizeEvenet(event = 'Large')}>L</li>
         </ul>
         <div className="add-cart-btn">
           <ul className="list-group">
              <li className={this.state.btnCondition ? "list-group-item" : "list-group-item disable"}>Add To Cart</li>
            </ul>
         </div>
     </div>
    );
  }
}

export default BigCartSection;
