const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			vehicles: [],
			propiedades: []
		},
		actions: {

			getCharacters: async () => {
				try {
					await fetch("https://www.swapi.tech/api/people/")
					.then(res => res.json())
					.then(data => {
						setStore({ characters: data.results })
						console.log(characters)
					})
				} catch (error) {
				console.log(`No se ha podido cargar el personaje error: ${error}`)	
				}
				

			},
			getPropertiesCharacters: async () => {
				try {
					await fetch("https://www.swapi.tech/api/people/1")
					.then(res => res.json())
					.then(data => {
						setStore({ propiedades: data.result.properties  })
						console.log(data)
					})
				} catch (error) {
				console.log(`No se ha podido cargar los datos error: ${error}`)	
				}
				

			},

			

			getPlanets: async () => {
				try {
					await fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => {
						setStore({ planets: data.results })
						// console.log(data.results)
					})
				} catch (error) {
				console.log(`No se ha podido cargar el planeta error: ${error}`)	
				}
				

			},

			getVehicles: async () => {
				try {
					await fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => {
						setStore({ vehicles: data.results })
						// console.log(data.results)
					})
				} catch (error) {
				console.log(`No se ha podido cargar el vehiculo error: ${error}`)	
				}
				

			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
