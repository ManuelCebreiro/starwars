import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = (name) => {
	const { store, actions } = useContext(Context);
	const datospersonales = store.datos;
	console.log(datospersonales)

	return (
		
		<div className="jumbotron ">
			<h1 className="display-4">{datospersonales.name}</h1>
			<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend ex. Aliquam efficitur venenatis diam, sed tincidunt nulla tempus sed. Duis consectetur nisi ligula, eget bibendum augue elementum mattis. Nulla fringilla lacus tortor, sed sagittis magna commodo eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo nisl eget augue vestibulum aliquam. Etiam nec luctus risus.</p>
			<hr className="hr my-4" />
			<div class="row">
				<div class="col">
					Primera de tres columnas
				</div>
				<div class="col">
					Segunda de tres columnas
				</div>
				<div class="col">
					Tercera de tres columnas
				</div>
			</div>
			<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
		</div>
	);
};
