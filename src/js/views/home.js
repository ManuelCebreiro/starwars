import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { element } from "prop-types";
import Demo from "./demo";
import Planets from "../component/Planets";
import Vehicles from "./vehicles";
import Characters from "./characters";

export const Home = () => {

	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
	}, [])

	const auxdatos = store.characters;		//array de personajes
	// const datosplanetas = store.planets;	//array de planetas


	// console.log(auxdatos);   
	return (

		<div className="container-fluid py-2" >
			<Characters/>
			<Planets/>
			<Vehicles/>
		</div>
		
	
)

};
