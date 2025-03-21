const API_URL="https://marvelous-vision-production.up.railway.app/compra"


export async function getBuy({session}){
    const response = await fetch(API_URL,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${session[1]}`
        },
    })
    console.log(response)
    const data = response.json()
    return data
}

export async function saveBuy({compra,session}){
    console.log(compra)
    const response = await fetch(API_URL,{
        method:"POST",
        headers:{
            "Content-Type": "application/json",
            Authorization:`Bearer ${session[1]}`
        },
        body: JSON.stringify({id_cliente:compra.id_cliente,detalleProductos:compra.detalleProductos})
    })
    const data = response.json()
    return data
}