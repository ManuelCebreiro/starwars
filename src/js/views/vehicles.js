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
	const img = "https://elcomercio.pe/resizer/_jenrsQckC0AT7Cn3_xrbfAaj8A=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VDBO46ZDFJANRILHPBPBKBULAA.jpg"
	return (
		<div className="container-fluid py-2" id="scrollhorizontal" >
			<h1 style={{ color: "red" }}>Vehicles</h1>
			<div className="d-flex flex-row flex-nowrap">
				{datosvehiculos.map((el) => {
					return (
						<Card demo={"vehicles"} uid={el.uid} name={el.name} url={el.url} key={el.uid}/>
					)
				}
				)}

			</div>
		</div>
	)
}

export default Vehicles