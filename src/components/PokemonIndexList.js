import React from 'react';
import SelectItemsPerPageButtons from './SelectItemsPerPageButtons';
import PaginationContainer from './PaginationContainer';
import PokeList from './PokeList';
import { Col } from 'react-bootstrap/lib/';

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

       <div>
        <Col sm={12}>
            <h4>Item per Page</h4>
        </Col>
      </div>
      <SelectItemsPerPageButtons
        options={options}
        selectedValue={selectedValue}
        allValue={allValue}
        onOptionSelected={onOptionSelected} />

       <div>
        <Col sm={12}>
            <h2>Select your pokemon</h2>
        </Col>
      </div>

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
