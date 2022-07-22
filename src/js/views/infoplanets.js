import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Infloplanets = (planet) => {
	const { store, actions } = useContext(Context);
	const datospersonales = store.datos;
    console.log(datospersonales)

	return (

		<div className="jumbotron ">
			<div className="row">
				<div className="col">
					<img id="img2" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/dev17yq-ce816241-f6aa-444a-94b6-7104f945e050.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2MTd5cS1jZTgxNjI0MS1mNmFhLTQ0NGEtOTRiNi03MTA0Zjk0NWUwNTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XmhMzTExSOrmbu-HzPseIJ_H09JyCOV8S3UrqpE9Kfg" />
				</div>
				<div className="col">
					<h1 className="display-4 text-center mt-4">{datospersonales.name}</h1>
					<p className="lead p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non eleifend ex. Aliquam efficitur venenatis diam, sed tincidunt nulla tempus sed. Duis consectetur nisi ligula, eget bibendum augue elementum mattis. Nulla fringilla lacus tortor, sed sagittis magna commodo eget. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin commodo nisl eget augue vestibulum aliquam. Etiam nec luctus risus.</p>
				</div>
			</div>
			<hr className="hr my-4" />
			<div className="row fs-4">
				<div className="col">
					<strong>Name</strong>
				</div>
				<div className="col">
					<strong>Population</strong>
				</div>
				<div className="col">
					<strong>Climate</strong>
				</div>
				<div className="col">
					<strong>Terrain</strong>
				</div>
				<div className="col">
					<strong>Rotation_period</strong>
				</div>
				<div className="col">
					<strong>Orbital_period</strong>
				</div>
			</div>
			<div className="row">
				<div className="col fs-5">
					{datospersonales.name}
				</div>
				<div className="col fs-5">
					{datospersonales.population}
				</div>
				<div className="col fs-5">
					{datospersonales.climate}
				</div>
				<div className="col fs-5">
					{datospersonales.terrain}
				</div>
				<div className="col fs-5">
					{datospersonales.rotation_period}
				</div>
				<div className="col fs-5">
					{datospersonales.orbital_period}
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
