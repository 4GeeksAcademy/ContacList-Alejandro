

const apiBaseUrl = "https://playground.4geeks.com/contact" 


//servicio para crear un nuevo contacto
export const createContact = async (agenda, bodyData) => {

    const newUser = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts",
        {
            method: "POST",
            body: JSON.stringify(bodyData),
            headers: {
                "Content-Type": "application/json"
            }

        }
    )
    const response = await newUser.json()
    return response


}

// servicio para obtener la lista de los contactos
export const getContacts = async (agenda) => {
    const response = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts")
    const data = await response.json()
    const contactos = data.contacts
    return contactos
}

// servicio para actualizar un contacto
export const UpdateContact = async (agenda, id, bodyData) => {
    const update = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts/" + id,
        {
            method: "PUT",
            body: JSON.stringify(bodyData),
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    const response = await update.json()
    return response
}

// servicio para eliminar un contacto
export const deleteContact = async (agenda, id) => {
    const Contactdelete = await fetch(apiBaseUrl + "/agendas/" + agenda + "/contacts/" + id,
        {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        }
    )
    // Solo intenta leer JSON si hay contenido
    if (Contactdelete.headers.get("content-length") === "0" || Contactdelete.status === 204) {
        return { msg: "Contacto eliminado" };
    }
    try {
        return await Contactdelete.json();
    } catch {
        return { msg: "Contacto eliminado" };
    }
}