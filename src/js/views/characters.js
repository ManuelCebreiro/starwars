import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

import "../../styles/demo.css";

export const Characters = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.getCharacters()
	}, [])

	const datoscharacters = store.characters;  



	return (

		<div className="container-fluid py-2" >
			<h1 style={{ color: "red" }}>Characters</h1>
			<div className="d-flex flex-row flex-nowrap" id="scrollhorizontal">
				{ datoscharacters.length > 0 && datoscharacters.map((el) => {

					return (
						<Card uid={el.uid} name={el.name} url={url}/>
					)
				}
				)}				
			</div>
		</div>
	)
			}

			export default Characters