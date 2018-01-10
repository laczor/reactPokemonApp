import React from 'react';
import {Modal,Button } from 'react-bootstrap/lib/';
import PokemonInfo from './PokemonInfo';
// toggleModal is a passed function which will toggle if the modal should be opened or not
// showModal is a boolean which will help to determine modal if it should be displayed or not
// pokemon is the passed pokemon object
const PokemonModal = ({toggleModal,showModal,pokemon})=> {
		console.log(pokemon);
		return (
			<div>
				<Modal
					show={showModal}
					onHide={toggleModal}
					container={this}
					aria-labelledby="contained-modal-title">
					<Modal.Header closeButton>
						<Modal.Title id="contained-modal-title">
							{ pokemon !== null ?pokemon.name:'Loading...'}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						{ pokemon !== null ?<PokemonInfo pokemon={pokemon}/>:null}
					</Modal.Body>
					<Modal.Footer>
						<Button onClick={toggleModal}>Close</Button>
					</Modal.Footer>
				</Modal>
			</div>
		);
}

export default PokemonModal;