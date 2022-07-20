import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const img ="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png"
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
			<img src={img}
			width="75 px"
			height="75 px"></img>

			</Link>
			<div className="ml-auto">
				<Link to="/Demo">
					<button className="btn btn-primary">"</button>
				</Link>
			</div>
		</nav>
	);
};
