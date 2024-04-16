import { useState, useEffect } from 'react';

const usePokemon = () => {
    const [datosPokemon, setDatosPokemon] = useState(null);
    const [nombrePokemon, setNombrePokemon] = useState('');
    const [error, setError] = useState(null);

    const obtenerDatosPokemon = async () => {
        try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
        if (!respuesta.ok) {
            throw new Error('¡Pokémon no encontrado!');
        }
        const datos = await respuesta.json();
        setDatosPokemon(datos);
        setError(null);
        } catch (error) {
        setError(error.message);
        setDatosPokemon(null);
        }
    };

    useEffect(() => {
        if (nombrePokemon !== '') {
        obtenerDatosPokemon();
        }
    }, [nombrePokemon]);

    return { datosPokemon, nombrePokemon, error, setNombrePokemon };
};

export default usePokemon;
