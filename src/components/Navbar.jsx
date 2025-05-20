import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
					<span className="navbar-brand mb-0 h1">Contact Agent</span>
				<div className="ml-auto">
					<Link to="/AddContact">
						 <button className="btn btn-primary" onClick={() => handlecreateNewContact()}> Crear Contacto </button>
					</Link>
				</div>
			</div>
		</nav>
	);
};