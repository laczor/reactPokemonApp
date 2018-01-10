import React, { Component } from 'react';                           //React component
import logo from './logo.svg';
import './App.css';                                                 //Styling
import 'whatwg-fetch';                                              //for fetch API
import PokemonIndexList from './components/PokemonIndexList';       //Created Pokemon List
import PokemonModal from './components/PokemonModal';       //Created Pokemon List

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      pokemon: [],
      activePage: 1,
      limit: 50,
      offset: 0,
      totalPages: 0,
      count: 0,
      loaded: false,
      showModal: false,
      selectedPokemon : null,
    };

    this.loadPokemon = this.loadPokemon.bind(this);
    this.handlePaginationSelect = this.handlePaginationSelect.bind(this);
    this.handleLimitChange = this.handleLimitChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  loadPokemon(url) {
    fetch(url)
      .then(response => {
        return response.json();
      }).then(json => {
        // console.log(json);
        let pages = Math.round(json.count / this.state.limit);

        this.setState({
          pokemon: json.results,
          totalPages: pages,
          count: json.count,
          loaded: true
        });
        // console.log(this.state)
      }).catch(err => {
        console.log(err)
      })
  }

  componentWillMount() {
    this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=${this.state.offset}`);
  }

  handlePaginationSelect(selectedPage) {
    // console.log(selectedPage);
    let offset = this.state.limit * selectedPage;
    this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=${offset}`);
    this.setState({
      activePage: selectedPage
    });
  }

  handleLimitChange(event) {
    // console.log(event.target.innerHTML);
    this.setState({
      limit: +event.target.innerHTML || this.state.count,
      activePage: 1
    }, () => {
      this.loadPokemon(`${this.props.baseUrl}/pokemon/?limit=${this.state.limit}&offset=0`);
    })
  }
  toggleModal(pokemon){
    // console.log(pokemon);
    // console.log(pokemon.url);
    if(pokemon.url !== undefined){
        fetch(`${pokemon.url}`)
        .then(response=>{
            return response.json();
        }).then(json =>{
          console.log(json);
            let setShowModal = this.state.showModal?false:true;
              this.setState({
                selectedPokemon: json,
                showModal: setShowModal,
              });
           }).catch(error=>{
            console.log('parsing failed', error);
           })
      }else{
          let setShowModal = this.state.showModal?false:true;
          this.setState({
            showModal: setShowModal,
          });
      }
       // console.log(this.state.selectedPokemon);      
  }
//
// display={this.state.loaded}                      //To control if the component should be visible or not
// all of the other properties are just a passed value from the main appState

// PokemonModal has a passed function of toggleModal + a boolean to show the modal or not
render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Pokemon Dashboard</h2>
        </div>

        {this.state.loaded ? null : "Loading..."}
        <PokemonIndexList 
          display={this.state.loaded}
          options={[10,50,100,200]}
          selectedValue={this.state.limit}
          allValue={this.state.count}
          onOptionSelected={this.handleLimitChange}
          listOfPokemon={this.state.pokemon}
          bsSize="small"
          items={this.state.totalPages}
          activePage={this.state.activePage}
          onSelect={this.handlePaginationSelect}
          totalPages={this.state.totalPages}
          toggleModal={this.toggleModal}
          />
          <PokemonModal toggleModal={this.toggleModal} showModal={this.state.showModal} pokemon={this.state.selectedPokemon}
          />

      </div>
    );
  }
}

export default App;
