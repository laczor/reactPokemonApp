import React from 'react';
import SelectItemsPerPageButtons from './SelectItemsPerPageButtons';
import PaginationContainer from './PaginationContainer';
import PokeList from './PokeList';

//ES6 extended class which will create html tags
//Instead of having them in the main component we are having these values here,
// all of the values are the same, only it has been parsed through a function as arguments from the main app.

const PokemonIndexList = ({display, options, selectedValue, allValue, onOptionSelected, listOfPokemon, btnSize, totalPages, activePage, onSelect,toggleModal}) => {
//Set style to ve visible or not
  let style ={ display: 'none' }

  if (display) {
    style.display = 'initial'
  } else {
    style.display = 'none'
  }

  return (
    <div style={style} >
      <SelectItemsPerPageButtons
        options={options}
        selectedValue={selectedValue}
        allValue={allValue}
        onOptionSelected={onOptionSelected} />

      <PokeList
        listOfPokemon={listOfPokemon}
        toggleModal={toggleModal} />

      <PaginationContainer
        btnSize={btnSize}
        totalPages={totalPages}
        activePage={activePage}
        onSelect={onSelect} />
    </div>
  )
}

export default PokemonIndexList;
