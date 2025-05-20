import { useEffect, useState } from "react"
import { getContacts } from "../services/api"
import ContactCards from "../components/ContactCards"
import useGlobalReducer from "../hooks/useGlobalReducer"




const Contact = () => {

    const {store, dispatch} = useGlobalReducer()

    const reloadContacts = async () => {
        try{
            const contactsData = await getContacts("Agenda_Alejandro")
            dispatch({ type: "get_contacts", payload: contactsData })
        } catch (error) {
            console.error("Error al obtener los contactos:", error);
        }
    }

    useEffect(() => {
        reloadContacts()
    }, [])

    return (
        <>
            <ul>
                {
                    store.contacts.map((contact) =>
                        <li key={contact.id}>
                            <ContactCards
                                id={contact.id}
                                name={contact.name}
                                phone={contact.phone}
                                email={contact.email}
                                address={contact.address}
                                onChange={reloadContacts} />
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default Contact