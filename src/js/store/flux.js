const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],
			elementos: [],
			characters: [],
			planets: [],
			vehicles:[]
		},
		actions: {
			addFavoritos: (elemento) => {
				const store = getStore();
				if (store.favoritos.includes(elemento)) {
					alert("Ya has agregado este elemento a favoritos");
					return
				}
				const updatedFavoritos = [...store.favoritos, elemento];
				setStore({ favoritos: updatedFavoritos });
			},

			deleteFavoritos: (elemento) => {
				const store = getStore();
				const updatedFavoritos = store.favoritos.filter((fav) => fav !== elemento);
				setStore({ favoritos: updatedFavoritos });
			},

			verificarFavorito: (elemento) => {
				const store = getStore();
				if (store.favoritos.includes(elemento)) {
					return true
				}
				return false
			},
			addCharacters () {
				fetch("https://swapi.tech/api/people")
			   .then(response => response.json())
			   .then(data => setStore({ characters: data.results }))
			   .catch(error => console.log(error));
		   },
			addPlanets () {
				fetch("https://swapi.tech/api/planets")
			   .then(response => response.json())
			   .then(data => setStore({ planets: data.results }))
			   .catch(error => console.log(error));
		   },
		   addVehicles () {
				fetch("https://swapi.tech/api/vehicles")
				.then(response => response.json())
				.then(data => setStore({ vehicles: data.results }))
				.catch(error => console.log(error));
	   		},
			

		}
	};
};

export default getState;