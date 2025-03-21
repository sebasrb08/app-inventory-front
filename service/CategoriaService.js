const API_URL="https://marvelous-vision-production.up.railway.app/categoria"

export async function getCategoria(session){
    const response = await fetch(API_URL,{
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session[1]}`, // Agrega tu token aquí
        }
    })

    if (!response.ok) {
        console.log(`Error en la red: ${response.status}`);
    }
    const data = await response.json();
    return data
}

export async function saveCategoria({nombre,session}){
    const response = await fetch(API_URL,{
        method:"POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session[1]}`
          },
        body: JSON.stringify({nombre:nombre})
    })
    if (!response.ok) {
        console.log(`Error en la solicitud: ${response.status}`);
    }

    const data = await response.json();

    return data
}

export async function deleteCategoria(id,session){
    const response = await fetch(`${API_URL}/${id}`,{
        method:'DELETE',
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${session[1]}`
        }
    })

    if (!response.ok) {
        console.log(`Error en la solicitud: ${response.status}`);
    }


    const data = await response.text();

    return data
}

export async function updateCategoria(id,nombre,session){
    const response = await fetch(`${API_URL}/${id}`,{
        method:'PUT',
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${session[1]}`
        },
        body: JSON.stringify({nombre:nombre})
    })

    
    if (!response.ok) {
        console.log(`Error en la solicitud: ${response.status}`);
    }


    const data = await response.json();

    return data
}