import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";
import Login from "../js/views/home";
import { Contacts } from "./views/Contacts.js";
import { AddContact } from "./views/AddContact.js";
import { EditContact } from "./views/EditContact.js";

export const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Switch>
						<Route exact path="/" component={Contacts} />
						<Route exact path="/add" component={AddContact} />
						<Route exact path="/edit/:index" component={EditContact} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Switch>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
