import { deleteContact, UpdateContact } from "../services/api"


const ContactCards = ({id, name, phone, address, email, onChange}) => {
    const agenda = "Agenda_Alejandro"

    const handleDeleteContact = async () => {
        try {
            await deleteContact(agenda, id)
            alert("Contacto eliminado")
            if (onChange) {
                onChange()
            }
        } catch (error) {
            console.log("Error al eliminar el contacto", error)
        }
    }

    const handleUpdateContact = async () => {
        try {
            await UpdateContact(id, { name, phone, address, email })
            alert("Contacto actualizado:")
            if (onChange) {
                onChange()
            }
        } catch (error) {
            console.error("Error al actualizar el contacto:", error)
        }
    }
    return (
        <div className="card" >
            <img src="https://img.freepik.com/foto-gratis/joven-mujer-feliz-sueter_23-2148012141.jpg?semt=ais_hybrid&w=740" className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-name">{name}</h5>
                <p className="card-phone">Phone: {phone}</p>
                <p className="card-address">Address: {address}</p>
                <p className="card-email">Email: {email}</p>
                <button type="button" className="btn-card btn mx-1" onClick={handleUpdateContact}>
                    <i className="fa-solid fa-pen"></i>
                </button>
                <button type="button" className="btn-card btn" onClick={handleDeleteContact}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default ContactCards