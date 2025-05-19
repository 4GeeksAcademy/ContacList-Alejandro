 import { createContact } from "../services/api"
 import { useNavigate } from "react-router-dom"
 import useGlobalReducer from "../hooks/useGlobalReducer"

const AddContact = () => {
    const navigate =  useNavigate()
    const {store, dispatch} = useGlobalReducer()

    const handleInputChange = (e) => {
        dispatch({
            type: "update_new_contact_form",
            payload: {
                [e.target.name]: e.target.value
            }
        })
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
            <div>
                <h2 style={{textAlign: "center"}}>Add New Contact</h2>
            </div>
            <form className="container mt-5" onSubmit={handlecreateNewContact}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Full Name</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="FormName"  
                    name="name"
                    placeholder="Full Name" 
                    value={store.newContactForm?.name || ""}
                    onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Email</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="FormEmail"
                    name="email" 
                    placeholder="Enter Email" 
                    value={store.newContactForm?.email || ""}
                    onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Phone</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="FormPhone" 
                    name="phone"
                    placeholder="Enter Phone Number" 
                    value={store.newContactForm?.phone || ""}
                    onChange={handleInputChange}/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Address</label>
                    <input 
                    type="text" 
                    class="form-control" 
                    id="FormAddress" 
                    name="address"
                    placeholder="Enter Address" 
                    value={store.newContactForm?.address || ""}
                    onChange={handleInputChange}/>
                </div>
                <button 
                type="submit" 
                className="btn btn-primary"> Create </button>
                <button 
                type="button"
                className="btn btn-secondary mx-2"
                onClick={() => navigate("/")}> Cancel </button>
            </form>
        </>
    )

}

export default AddContact