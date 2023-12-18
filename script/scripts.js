const pokedex = (() =>   {
    
    const pokemonName = document.querySelector(".pokemon-name");
    const pokemonNumber = document.querySelector(".pokemon-number");
    const pokemonImage = document.querySelector(".pokemon-img");
    const pokemonInput = document.querySelector("#searchBar");

    let searchPkm = 1;


    const fetchPkm = async (pokemon) =>  {
        if(pokemon == undefined || pokemon == "" || pokemon == null)    {
            pokemon = 1;
        }
        const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
       if(APIResponse.status === 200)   {
            const data = await APIResponse.json();
            return data;
       }
    }

    const renderPkm = async (pokemon) =>  {
        pokemonName.innerHTML = "Loading....";
        pokemonNumber.innerHTML = "-";
        const data = await fetchPkm(pokemon); //will receive data from fetchPkm]
        if(data)    {
            pokemonName.innerHTML = data.name;
            pokemonNumber.innerHTML = data.id;
            pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
            searchPkm = data.id;
            
        }else{
            pokemonName.innerHTML = "NOT FOUND T-T";
        }
       
    }
    
    
    const confirmBtn = document.querySelector('.pokedex-confirm').addEventListener('click', (search) => {
            
        if(pokemonInput.value.toLowerCase() === null || pokemonInput.value === undefined || pokemonInput.value === '')    {
            alert("Insira o nome ou endereço da pokédex de um pokémon");
        }else{
        renderPkm(pokemonInput.value.toLowerCase());

    }});
    const form = document.querySelector('.form').addEventListener('submit', (search) => {
        search.preventDefault()
        renderPkm(pokemonInput.value.toLowerCase());
    });

    const nextBtn = document.querySelector('.pokedex-next').addEventListener('click',  () => {
        searchPkm += 1;
        renderPkm(searchPkm);
    });

    const prevBtn = document.querySelector('.pokedex-prev').addEventListener('click',  () => {
        if(searchPkm > 1){
            searchPkm -= 1;
            renderPkm(searchPkm);
        }
    });

    renderPkm(searchPkm)
})();