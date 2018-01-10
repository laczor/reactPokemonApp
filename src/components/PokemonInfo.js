import React from 'react';
import { Radar } from 'react-chartjs';

let capitalize =(string)=>{
return string.charAt(0).toUpperCase() + string.slice(1);
}

const PokemonInfo = ({pokemon})=>{
	console.log(pokemon);
	const labels = pokemon.stats.map(info=>{
		return capitalize(info.stat.name)
	})

	const dataPokemon = pokemon.stats.map(info=>{
		return info.base_stat;
	})

	let chartData = {
		labels: labels,
		datasets:[{
			labels: labels,
			data: dataPokemon,
			fillColor: "rgba(255,99,123,0.2)",
			strokeColor: "rgba(255,99,123,1)",
			pointColor: "rgba(255,99,123,1)",
			pointBorderColor: "#fff",
			pointHoverBackgroundColor: "#fff",
			pointHoverBorderColor:"rgba(255,99,123,1)",
		}],
	}
	let chartOptions = {
	  scale: {
	    pointLabels: {
	      fontSize: 40
	    }
	  },
	}

	return(
		<div>
			<div className="Aligner">
				<img class="Aligner-item"src={pokemon.sprites.front_default} alt="pokemon-front"/>
				<img class="Aligner-item"src={pokemon.sprites.back_default} alt="pokemon-front"/>
				<img class="Aligner-item"src={pokemon.sprites.front_shiny} alt="pokemon-front"/>
				<img class="Aligner-item"src={pokemon.sprites.back_shiny} alt="pokemon-front"/>
			</div>
			<div className="Aligner">
				<Radar class="Aligner-item" data={chartData} options={chartOptions} width="450" height="400"/>
			</div>
		</div>
		)

}

export default PokemonInfo;
