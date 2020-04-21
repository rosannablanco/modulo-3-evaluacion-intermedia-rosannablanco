import React from 'react';
import PokeList from './PokeList';
import list from '../data/data.json';
import PropTypes from 'prop-types';

import '../stylesheets/App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: {list},
    };
    this.classFavorite = this.classFavorite.bind(this);
  }

  classFavorite(element) {
    const elementId = parseInt(element.id);
    const {pokemons} = this.state;
    const pokemonFav = pokemons.list.findIndex((itemfav) => itemfav.id === elementId);
    if (pokemons.list[pokemonFav].isFavorite) {
      pokemons.list[pokemonFav].isFavorite = false;
    } else {
      pokemons.list[pokemonFav].isFavorite = true;
    }
    this.setState({
      pokemons: pokemons,
    });
  }

  render() {
    const {pokemons} = this.state;
    return (
      <div className="App">
        <h2>Mi lista de pokemon</h2>
        <PokeList data={pokemons} addFavorite={this.classFavorite} />
      </div>
    );
  }
}
App.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
};
export default App;
