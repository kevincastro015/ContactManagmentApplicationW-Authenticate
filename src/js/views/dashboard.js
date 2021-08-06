import React from "react";
import { signOut } from "../utilities/signOut";
import { useHistory } from "react-router-dom";

export const Dashboard = () => {
	const history = useHistory();
	return (
		<>
			<h1>LoggedIn</h1>
			<button
				onClick={() => {
					signOut();
					history.push("/");
				}}>
				LogOut
			</button>
		</>
	);
};