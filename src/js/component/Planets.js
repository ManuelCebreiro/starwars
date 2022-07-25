import React, { useEffect, useContext } from "react";
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



	return (
		<div className="container-fluid py-2" >
			<h1 style={{ color: "red" }}>Planets</h1>
			<div className="d-flex flex-row flex-nowrap" id="scrollhorizontal">
				{datosplanetas.map((el) => {

					return (
						<Card demo={"planets"} uid={el.uid} name={el.name} url={el.url} />
					)


				}


				)}




			</div>
		</div>
	)
}

export default Planets