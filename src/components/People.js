import React, { Component } from 'react';
import {Grid, Card} from 'semantic-ui-react';
import Details from './Details';



class People extends Component {
  constructor(props) {
    super(props);
    this.state = {
    people: [],
    };
  }
  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('https://swapi.dev/api/people')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => this.setState({ people: data.results, isLoading: false }))
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const {people, isLoading, error } = this.state;
 
    if (error) {
      return <p>{error.message}</p>;
    }
 
    if (isLoading) {
      return <p>Loading ...</p>;
    }
 
    return (
        <div>
       <h1>People</h1>
            <Grid columns={4}>
                {people.map((people, i) =>{
                    return(
                        <Grid.Column key={i}>
                            <Card>
                                <Card.Content>
                                    <Card.Header>Name:{people.name}</Card.Header>
                                    <Card.Description>
                                    <Details details={people} /> 
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>
                    )
                })}
            </Grid>
            
        </div>
    );
  }

}

  export default People;
