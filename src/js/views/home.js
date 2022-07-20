import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { element } from "prop-types";
import Demo from "./demo";
import Planets from "../component/Planets";
import Vehicles from "./vehicles";




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
			<h1 style={{ color: "red" }}>Characters</h1>
			<div className="d-flex flex-row flex-nowrap" id="scrollhorizontal">
				{ store.characters.length > 0 && auxdatos.map((el) => {

					return (
						<div className="text-center mx-3 my-3" style={{ width: "18rem" }}>
							<div key={el.uid} className="card" style={{ width: "18rem" }}>
								<img src="..." className="card-img-top" alt="..."></img>
								<div className="card-body">
									<h5 className="card-title">{el.name}</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="{el.url}" className="btn btn-primary">Go somewhere</a>
								</div>
							</div>
						</div>

					)
				}
				)}
				
			</div>
			<Planets/>
			<Vehicles/>
		</div>
		
	
)

};
