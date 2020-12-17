import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

class Details extends Component {
  constructor(props){
    super(props); 
      this.state = {
      expanded: false,  
    }

    this.openInfo = this.openInfo.bind(this); 
    this.closeInfo = this.closeInfo.bind(this); 
  }

  openInfo(){
    this.setState({ expanded: !this.state.expanded })
  }

  closeInfo(){
    this.setState({ expanded: !this.state.expanded })
  }

  render() {
    const info = this.props.details; 

    if(!this.state.expanded){
      return <p className="ui primary button" onClick={this.openInfo}>Show Info</p>
    }

    return(
      <div>
          <Container>
        <p className= "ui secondary button" onClick={this.closeInfo}>Hide Info</p>
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
