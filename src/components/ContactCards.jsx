import { deleteContact, UpdateContact } from "../services/api"
import { useNavigate } from "react-router-dom"

const ContactCards = ({id, name, phone, address, email, onChange}) => {
    const navigate = useNavigate()
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

    const handleUpdateContact = () => {
        navigate("editcontact/" + id)
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