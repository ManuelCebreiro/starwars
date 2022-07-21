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
	const img= "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/d71e379b-3f09-42b2-b3fe-26548591a750/dev17yq-ce816241-f6aa-444a-94b6-7104f945e050.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Q3MWUzNzliLTNmMDktNDJiMi1iM2ZlLTI2NTQ4NTkxYTc1MFwvZGV2MTd5cS1jZTgxNjI0MS1mNmFhLTQ0NGEtOTRiNi03MTA0Zjk0NWUwNTAuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XmhMzTExSOrmbu-HzPseIJ_H09JyCOV8S3UrqpE9Kfg"



	return(
<div className="container-fluid py-2 overflow-x" id="scrollhorizontal" >
			<h1 style={{ color: "red" }}>Planets</h1>
			<div className="d-flex flex-row flex-nowrap">
				{datosplanetas.map((el) => {

						return (
							<Card uid={el.uid} name={el.name} url={el.url} key={el.uid} img={img}/>
						)

					
				}


				)}


	
				
			</div>
		</div>
	)
			}

			export default Planets