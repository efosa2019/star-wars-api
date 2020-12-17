import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

class Details extends Component {
  constructor(props){
    super(props); 
      this.state = {
      expanded: false,  
    }

    this.open = this.open.bind(this); 
    this.close = this.close.bind(this); 
  }

  open(){
    this.setState({ expanded: !this.state.expanded })
  }

  close(){
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const info = this.props.details; 

    if(!this.state.expanded){
      return <p className="ui primary button" onClick={this.open}>Show info</p>
    }

    return(
      <div>
          <Container>
        <p className= "ui secondary button" onClick={this.close}>Hide info</p>
            <h4>Gender: {info.gender}</h4>
            <p>BirthYear:{info.birth_year}</p>
            <p>HairColor:{info.hair_color}</p>
            <strong>Mass: {info.mass}</strong>
            </Container>
        </div>
    )
  }
}

export default Details;
