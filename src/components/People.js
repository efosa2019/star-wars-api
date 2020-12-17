import React, {Component} from 'react'
import {Grid, Card} from 'semantic-ui-react';
import Details from './Details'

class SearchBar extends Component {
    constructor(props){
    super(props);
    this.state = {
      query: "",
      people: [],
      token: null,
      isLoading: true
    };
}
    onChange = e => {
      const { value } = e.target;
      this.setState({
        query: value
      });
  
      this.search(value);
    };
  
    search = query => {
      const url = `https://swapi.dev/api/people?search=${query}`;
      const token = {};
      this.token = token;
       fetch(url)
        .then(results => results.json())
        .then(data => {
          if (this.token === token) {
            this.setState({ people: data.results,  isLoading: false  });
          }
        });
    };
  
    componentDidMount() {
      this.search("");
      this.setState({ isLoading: true });
    }
  
    render() {
      const {people, isLoading} = this.state;
      
      if (isLoading) {
        return <p>Loading ...</p>;
      }
      return (
        <div>
        <form>
          <input
            type="text"
            className="search-box"
            placeholder="Search for..."
            onChange={this.onChange}
          />
          <Grid columns={4}>
          {people.map(person => (
            <ul key={person.name}>
            <Card>
            <Card.Content>
            <Card.Header>Name:{person.name}</Card.Header>
            <Card.Description>
            <Details details={person} /> 
            </Card.Description>
            </Card.Content>
            </Card>
            </ul>
          ))}
          </Grid>
        </form>
        </div>
      );
    }
}
export default SearchBar;
