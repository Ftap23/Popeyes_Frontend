const API_URL = 'http://popeyes-backend.onrender.com/extra_tostyroll';

export const obtenerExtraTostyRoll = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener TostyRolls");
    }
};