import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Infovehicles = (planet) => {
	const { store, actions } = useContext(Context);
	const datosvehiculos = store.datos;

	return (

		<div className="jumbotron ">
			<div className="row">
				<div className="col">
					<img id="img2" src="https://elcomercio.pe/resizer/_jenrsQckC0AT7Cn3_xrbfAaj8A=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/VDBO46ZDFJANRILHPBPBKBULAA.jpg"/>
				</div>
				<div className="col">
					<h1 className="display-4 text-center mt-4">{datosvehiculos.name}</h1>
					<p className="lead p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend ex. Aliquam efficitur venenatis diam, sed tincidunt nulla tempus sed. Duis consectetur nisi ligula, eget bibendum augue elementum mattis. Nulla fringilla lacus tortor, sed sagittis magna commodo eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo nisl eget augue vestibulum aliquam. Etiam nec luctus risus.</p>
				</div>
			</div>
			<hr className="hr my-4" />
			<div className="row fs-4">
				<div className="col">
					<strong>Name</strong>
				</div>
				<div className="col">
					<strong>Model</strong>
				</div>
				<div className="col">
					<strong>Vehicle Class</strong>
				</div>
				<div className="col">
					<strong>Length</strong>
				</div>
				<div className="col">
					<strong>Cargo Capacity</strong>
				</div>
				<div className="col">
					<strong>Max Speed</strong>
				</div>
			</div>
			<div className="row">
				<div className="col fs-5">
					{datosvehiculos.name}
				</div>
				<div className="col fs-5">
					{datosvehiculos.model}
				</div>
				<div className="col fs-5">
					{datosvehiculos.vehicle_class}
				</div>
				<div className="col fs-5">
					{datosvehiculos.length}
				</div>
				<div className="col fs-5">
					{datosvehiculos.cargo_capacity}
				</div>
				<div className="col fs-5">
					{datosvehiculos.max_atmosphering_speed}
				</div>
			</div>
			<Link to="/">
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" id="atras" className="bi bi-arrow-left-square-fill black" viewBox="0 0 16 16">
					<path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z" />
				</svg>
			</Link>

		</div>

	);
};
