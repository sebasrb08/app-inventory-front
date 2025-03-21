const API_URL="https://marvelous-vision-production.up.railway.app/producto"
const API_URL_IMAGE="https://marvelous-vision-production.up.railway.app/upload/producto"

export async function getProduct({session}){

    const response = await fetch(API_URL,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${session[1]}`
        },
    })

    const data = await response.json();
    return data
}

export async function saveProduct({producto,session}){
    const response = await fetch(API_URL,{
        method:'POST',
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${session[1]}`
        },
        body: JSON.stringify({
            nombre:producto.nombre,
            sku:producto.sku,
            descripcion:producto.descripcion,
            precio:producto.precio,
            cantidad:producto.cantidad,
            id_categoria:producto.categoria

        })
    })
    const data = await response.json();
    return data
}

export async function uploadImage({id,session,selectedImage}){
    const ext = selectedImage.split('.').pop().toLowerCase();

    const mimeTypes = {
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        png: "image/png",
        webp: "image/webp",
    };

    const formData = new FormData();

    formData.append("image", {
        uri: selectedImage,
        name: selectedImage.split('/').pop(),
        type: mimeTypes[ext] || "image/jpeg",
    });


    const response = await fetch(`${API_URL_IMAGE}/${id}`,{
        method:'PATCH',
        headers:{
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${session[1]}`
        },
        body: formData
    })
    const data = await response.json();
    return data
}

export async function getImage({nameImage,session}){

    const response = await fetch(`${API_URL}/image/${nameImage}`,{
        method:"GET",
        headers:{
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${session[1]}`
        },
    })
    const data = await response.json();
    console.log("data: ",data)  
    return data
}

export async function getProductById({id,session}){
    const response = await fetch(`${API_URL}/${id}`,{
        method:"GET",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${session[1]}`
        },
    })

    const data = await response.json();
    return data
}

export async function deleteProduct({id,session}){
    const response = await fetch(`${API_URL}/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json",
            Authorization: `Bearer ${session[1]}`
        },
    })

    const data = await response.text();
    return data
}


export async function updateProduct({producto2,session}){
        try {
            console.log("Producto a actualizar:", producto2);
            const response = await fetch(`${API_URL}/${producto2.id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${session[1]}`
                },
                body: JSON.stringify({
                    nombre: producto2.nombre,
                    sku: producto2.sku,
                    descripcion: producto2.descripcion,
                    precio: producto2.precio,
                    cantidad: producto2.cantidad,
                    image: producto2.image,
                    id_categoria: producto2.categoria
                })
            });
    
            if (!response.ok) {
                const errorText = await response.text();
                console.error("Error en la respuesta del servidor:", errorText);
                throw new Error(`Error en la actualización del producto: ${response.statusText}`);
            }
    
            const data = await response.json();
            console.log("Respuesta del servidor:", data);
            return data;
        }catch (error) {
            console.error("Error en la actualización del producto:", error);
            throw error;
        }
}




