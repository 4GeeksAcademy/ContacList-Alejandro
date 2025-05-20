import { createContact, UpdateContact } from "../services/api"
import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer"
import { useEffect } from "react"
import { useParams } from "react-router-dom"

const AddContact = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        if (id) {
            const contact = store.contacts.find((contact) => contact.id === parseInt(id))
            if (contact) {
                dispatch({
                    type: "update_new_contact_form",
                    payload: contact
                })
            }
        }
    }, [id, store.contacts, dispatch])

    const handleInputChange = (e) => {
        dispatch({
            type: "update_new_contact_form",
            payload: {
                [e.target.name]: e.target.value
            }
        })
    }

    const handleUpdate = async (e) => {
        e.preventDefault()
        try {
            await UpdateContact(id, store.newContactForm)
            alert("Contacto actualizado correctamente")
            navigate("/")
        } catch (error) {
            alert("Error al actualizar el contacto")
        }
    }

    const handlecreateNewContact = async (e) => {
        e.preventDefault()
        const agenda = "Agenda_Alejandro"
            const bodyData = store.newContactForm
            await createContact(agenda, bodyData)
            dispatch({ type: "reset_new_contact_form" })
            navigate("/")
    }

    return (
        <>
            <form className="container mt-5" onSubmit={handlecreateNewContact}>
                <div className="mb-3">
                    <label htmlFor="FormName" className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="FormName"
                        name="name"
                        placeholder="Full Name"
                        value={store.newContactForm?.name || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="FormEmail" className="form-label">Email</label>
                    <input
                        type="text"
                        className="form-control"
                        id="FormEmail"
                        name="email"
                        placeholder="Enter Email"
                        value={store.newContactForm?.email || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="FormPhone" className="form-label">Phone</label>
                    <input
                        type="text"
                        className="form-control"
                        id="FormPhone"
                        name="phone"
                        placeholder="Enter Phone Number"
                        value={store.newContactForm?.phone || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="FormAddress" className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        id="FormAddress"
                        name="address"
                        placeholder="Enter Address"
                        value={store.newContactForm?.address || ""}
                        onChange={handleInputChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                >Create</button>
                {id && (
                    <button
                        type="button"
                        className="btn btn-success mx-1"
                        onClick={handleUpdate}
                    >Update</button>
                )}
                <button
                    type="button"
                    className="btn btn-secondary mx-1"
                    onClick={() => navigate("/")}
                >Cancel</button>
            </form>
        </>
    )
}

export default AddContact