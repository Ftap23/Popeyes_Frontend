const API_URL = 'http://popeyes-backend.onrender.com/combo';

export const obtenerCombos = async () => {
    try{
        const response = await fetch(API_URL);
        return await response.json();
    } catch(error){
        console.error("Error al obtener combos");
    }
};

export const crearCombo = async (combo) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(combo),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear combo");
    }
}
