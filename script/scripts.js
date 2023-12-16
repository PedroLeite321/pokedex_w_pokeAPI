const pokedex = (() =>   {

    const pokemonName = document.querySelector(".pokemon-name");
    const pokemonNumber = document.querySelector(".pokemon-number");
    const pokemonImage = document.querySelector(".pokemon-img");
    const pokemonInput = document.querySelector("#searchBar");


    const fetchPkm = async (pokemon) =>  {
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);
        const data = await APIResponse.json();
        console.log(data)
        return data;
    }

    const renderPkm = async (pokemon) =>  {
        const data = await fetchPkm(pokemon); //will receive data from fetchPkm]
        console.log(data);
        pokemonName.innerHTML = data.name;
        pokemonNumber.innerHTML = data.id;
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    }
    
    const confirmBtn = document.querySelector('.pokedex-confirm').addEventListener('click', (search) => {
            
        if(pokemonInput.value === null || pokemonInput.value === undefined || pokemonInput.value === '')    {
            alert("Insira o nome ou endereço da pokédex de um pokémon");
        }else{
        renderPkm(pokemonInput.value);

    }});
    const form = document.querySelector('.form').addEventListener('submit', (search) => {

        search.preventDefault()
        renderPkm(pokemonInput.value);
    });
})();