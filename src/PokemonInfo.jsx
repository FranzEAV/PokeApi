import usePokemon from './UsePokemon';

const PokemonInfo = () => {
    const { datosPokemon, nombrePokemon, error, setNombrePokemon } = usePokemon();

    return (
        <div className="pokemon-info-container"> {}
        <h1>Buscar un Pokémon</h1><br></br>
        <input 
            type="text" 
            value={nombrePokemon} 
            onChange={(e) => setNombrePokemon(e.target.value.toLowerCase())} 
            placeholder="Ingresa el nombre del Pokémon" 
        />
        {error && <p>{error}</p>}
        {datosPokemon && (
            <div className="pokemon-details"> {}
            <h2>{datosPokemon.name}</h2>
            <img src={datosPokemon.sprites.front_default} alt={datosPokemon.name} className="pokemon-image" /> {}
            <p className="pokemon-description"> {}
                Tipo: {datosPokemon.types.map((type) => type.type.name).join(', ')} <br />
                Altura: {datosPokemon.height} <br />
                Peso: {datosPokemon.weight} <br />
                Habilidades: {datosPokemon.abilities.map((ability) => ability.ability.name).join(', ')}
            </p>
            </div>
        )}
        </div>
    );
};

export default PokemonInfo;
