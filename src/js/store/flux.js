const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favoritos: [],
			elementos: [],
			characters: [],
			location: [],
			episode:[]
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
				fetch("https://rickandmortyapi.com/api/character")
			   .then(response => response.json())
			   .then(data => setStore({ characters: data.results }))
			   .catch(error => console.log(error));
		   },
			addLocation () {
				fetch("https://rickandmortyapi.com/api/location")
			   .then(response => response.json())
			   .then(data => setStore({ location: data.results }))
			   .catch(error => console.log(error));
		   },
		   addEpisodes () {
				fetch("https://rickandmortyapi.com/api/episode")
				.then(response => response.json())
				.then(data => setStore({ episode: data.results }))
				.catch(error => console.log(error));
	   		},
			

		}
	};
};

export default getState;