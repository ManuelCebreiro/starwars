import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
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
				{datosvehiculos.map((el) => {
					return (
						<Card uid={el.uid} name={el.name} url={el.url} key={el.uid} />
					)
				}
				)}

			</div>
		</div>
	)
}

export default Vehicles