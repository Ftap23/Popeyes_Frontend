const API_URL = 'http://popeyes-backend.onrender.com/comboextra';

export const obtenerCombosExtras = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener combos extra");
    }
};
