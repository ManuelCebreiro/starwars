import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

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
				{datosplanetas.map((ele) => {

					return (
						<div className="col-3 text-center mx-3 my-3" style={{ width: "18rem" }}>
							<div key={ele.uid} className="card" style={{ width: "18rem" }}>
								<img src="..." className="card-img-top" alt="..."></img>
								<div className="card-body">
									<h5 className="card-title">{ele.name}</h5>
									<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<a href="{el.url}" className="btn btn-primary">Go somewhere</a>
								</div>
							</div>
						</div>

					)
				}


				)}


	
				
			</div>
		</div>
	)
			}

			export default Planets