

// * Codigo sucio.
// const getPokemonById = (id, callback) => {

//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
//     fetch(url).then((response) => {

//         response.json().then((pokemon) => {
//             callback(pokemon.name);
//         })
        
//     })

// }

// const getPokemonById = (id) => {

//     const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

//     return fetch(url)
//         .then((resp) => resp.json())
//         .then((pokemon) => pokemon.name);
// }

// funcion asy await
const getPokemonById = async(id) => {
    const url  = `https://pokeapi.co/api/v2/pokemon/${id}`;

    const resp = await fetch(url);
    const pokemon = await resp.json();

    // throw new Error('Pokemon no existe');

    return pokemon.name;
};

module.exports = getPokemonById;