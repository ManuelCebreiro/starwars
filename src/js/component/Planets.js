import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./card";
import "../../styles/demo.css";

export const Planets = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getPlanets()
	}, [])

	const datosplanetas = store.planets;



	return(
<div className="container-fluid py-2 overflow-x" id="scrollhorizontal" >
			<h1 style={{ color: "red" }}>Planets</h1>
			<div className="d-flex flex-row flex-nowrap">
				{datosplanetas.map((el) => {

						return (
							<Card uid={el.uid} name={el.name} url={el.url} key={el.uid}/>
						)

					
				}


				)}


	
				
			</div>
		</div>
	)
			}

			export default Planets