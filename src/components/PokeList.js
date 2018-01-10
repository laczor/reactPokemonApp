import React from 'react';
import { ListGroup, ListGroupItem, Col } from 'react-bootstrap/lib/';


//toggleModal.bind(null,creature) we want to pass the current pokemon to this toggleModalFunction
//null means it is bound to the same function for app this. keyword, but we can parse in some additonal arguments
const PokeList = ({listOfPokemon,toggleModal}) => {

  let pokemon = listOfPokemon.map((creature) => {
    return (
      <Col sm={6} md={4} key={creature.name}>
        <ListGroupItem onClick={toggleModal.bind(null,creature)}className='PokeList-item'>{creature.name}</ListGroupItem>
      </Col>
    )
  });

  return (
    <Col sm={8} md={10} smOffset={2} mdOffset={1}>
      <ListGroup>
        {pokemon}
      </ListGroup>
    </Col>
  )
}

export default PokeList;
