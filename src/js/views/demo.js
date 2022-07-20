import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);




			return (
				<div className="jumbotron">
					<h1 className="display-4">jaja</h1>
					<p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
					<hr className="my-4 bg-warning" />
					<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
					<a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
				</div>
	);
	};
