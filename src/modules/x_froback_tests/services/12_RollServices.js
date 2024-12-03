const API_URL = 'https://popeyes-backend.onrender.com/roll';

export const crearRoll = async (roll) => {
    try {
        const response = await fetch(API_URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(roll),
        })
        return await response.json();
    }catch(error){
        console.error("Error al crear roll");
    }
}
