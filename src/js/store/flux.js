// const url = "https://assets.breatheco.de/apis/fake/contact/";
const getState = ({ getStore, setStore }) => {
	const url = "https://assets.breatheco.de/apis/fake/contact/";
	return {
		store: {
			contacts: [],
			contactsFB: []
			//Your data structures, A.K.A Entities
		},
		actions: {
			getContactFromFB: async () => {
				try {
					const getContacts = firebase.firestore().collection("contacts");
					const response = await getContacts.get();

					response.forEach(contact => {
						setStore({
							contactsFB: [...getStore().contactsFB, { ...contact.data(), id: contact.id }]
						});
					});
					console.log("data from Firebase", getStore().contactsFB);
				} catch (e) {
					console.log(e);
				}
			},
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kevincastro015")
					.then(response => response.json())
					.then(result => {
						console.log("getContacts", result),
							setStore({
								contacts: result
							});
					})
					.catch(e => console.error(e));
				//(Arrow) Functions that update the Store
				// Remember to use the scope: scope.state.store & scope.setState()
			},
			addContact: (name, email, address, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						email: email,
						agenda_slug: "kevincastro015",
						address: address,
						phone: phone
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kevincastro015")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									contacts: result
								});
						})
						.catch(e => console.error(e));
				});
			},
			editContact: (id, name, address, email, phone) => {
				fetch("https://assets.breatheco.de/apis/fake/contact/" + id, {
					method: "PUT",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						address: address,
						email: email,
						phone: phone,
						agenda_slug: "kevincastro015"
					})
				}).then(() => {
					fetch("https://assets.breatheco.de/apis/fake/contact/agenda/kevincastro015")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									contacts: result
								});
						})
						.catch(e => console.error(e));
				});
			},
			deleteContact: id => {
				fetch(url + id, {
					method: "delete"
				}).then(() => {
					fetch(url + "agenda/kevincastro015")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									contacts: result
								});
						})
						.catch(e => console.error(e));
				});
			}
		}
	};
};
export default getState;
