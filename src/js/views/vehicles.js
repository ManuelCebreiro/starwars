import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Vehicles = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getVehicles()
	}, [])

	const datosvehiculos = store.vehicles;



	return (
		<div className="container-fluid py-2" id="scrollhorizontal" >
			<h1 style={{ color: "red" }}>Vehicles</h1>
			<div className="d-flex flex-row flex-nowrap">
				{datosvehiculos.map((ele) => {

					return (
						<div className="text-center mx-3 my-3" style={{ width: "18rem" }}>
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

export default Vehicles