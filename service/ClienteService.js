const API_URL="https://marvelous-vision-production.up.railway.app/cliente"
export async function getClient({session}){
    const response = await fetch(API_URL,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${session[1]}`
        }
    })
    const data = response.json()
    return data
}

export async function saveClient({client,session}){
    const response = await fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${session[1]}`
        },
        body: JSON.stringify({nombre:client.nombre,apellido:client.apellido,email:client.email,telefono:client.telefono})
    })
    const data = response.json()
    return data
}

export async function getClientById({id,session}){
    const response = await fetch(`${API_URL}/${id}`,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${session[1]}`
        },
    })
    const data = response.json()
    return data
}

export async function updateClient({client,session}){
    const response = await fetch(`${API_URL}/${client.id}`,{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${session[1]}`
        },
        body: JSON.stringify({nombre:client.nombre,apellido:client.apellido,email:client.email,telefono:client.telefono})
    })
    const data = response.json()
    return data
}

export async function deleteClient({id,session}){
    const response = await fetch(`${API_URL}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${session[1]}`
        },
    })
    const data = response.text()
    return data
}