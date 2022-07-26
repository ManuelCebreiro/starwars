const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			planetsdetalles: [],
			vehicles: [],
			propiedades: [],
			favoritos: [],
			datos: [],
		},
		actions:
		{

			setfavoritos: (name) => {
			let eliminados = getStore().favoritos.filter(valor => valor == name)
				if(eliminados.length == 0){
					setStore({ favoritos: [...getStore().favoritos, name] })			//una vez que el if se cumple, el setstore funciona
				}
			},
			setborrarfavorito: (elemento) => {									//funcion para borrar elemento de lista
			let aux = getStore().favoritos.filter(valor => valor !== elemento)  //crear un array para meter el resultado de filter
			setStore({favoritos: aux})    //  como en todos los demas, se llama al setStore, y se guarda en el array que yo quiero, en este caso "favoritos"
			},

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

		// },
		// getPropertiesCharacters: async () => {
		// 	try {
		// 		await fetch("https://www.swapi.tech/api/people/1")
		// 		.then(res => res.json())
		// 		.then(data => {
		// 			setStore({ propiedades: data.result.properties  })
		// 			console.log(data)
		// 		})
		// 	} catch (error) {
		// 	console.log(`No se ha podido cargar los datos error: ${error}`)	
		// 	}


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
			getPlanetsDetails: async () => {
				try {
					await fetch("https://www.swapi.tech/api/planets/")
						.then(res => res.json())
						.then(data => {
							setStore({ planetsdetalles: data.result.properties })
							console.log(data.result.properties)
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
					getId: (url) => {

						fetch(url)
							.then((res) => {
								if (res.ok) {
									return res.json();
								} else {
									throw new Error("los planetas  no se han podido cargar");
								}
							})
							.then((datos) => {
								let aux = datos.result.properties;
								console.log(aux)
								setStore({ datos: aux });
							})
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
