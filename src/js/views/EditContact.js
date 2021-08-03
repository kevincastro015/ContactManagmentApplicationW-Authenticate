import React, { useState, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

export const EditContact = props => {
	const { store, actions } = useContext(Context);
	let { index } = useParams();
	let contact = store.contacts[index];
	const [phone, setPhone] = useState(contact.phone);
	const [name, setName] = useState(contact.full_name);
	const [email, setEmail] = useState(contact.email);
	const [address, setAddress] = useState(contact.address);
	console.log("try", store.contacts[index].id);
	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit Contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							defaultValue={name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							placeholder="Enter email"
							defaultValue={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input
							type="phone"
							className="form-control"
							placeholder="Enter phone"
							defaultValue={phone}
							onChange={e => setPhone(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Address</label>
						<input
							type="text"
							className="form-control"
							placeholder="Enter address"
							defaultValue={address}
							onChange={e => setAddress(e.target.value)}
						/>
					</div>
					<Link to="/">
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => {
								actions.editContact(store.contacts[index].id, name, email, address, phone);
							}}>
							save
						</button>
					</Link>

					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};

EditContact.propTypes = {
	match: PropTypes.object
};
