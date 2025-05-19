import ContactCards from "./components/ContactCards";
import Contact from "./pages/Contact";

export const initialStore=()=>{
  return{
    contacts: [],
    newContactForm: {
      name: "",
      email: "",
      phone: "",
      address: ""
    }
  }

}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case 'get_contacts':
      return {
        ...store,
        contacts: action.payload
      };
      case 'update_new_contact_form':
        return {
          ...store,
          newContactForm: {...store.newContactForm, ...action.payload}
        };
      case 'reset_new_contact_form':
        return {
          ...store,
          newContactForm: {
            name: "",
            email: "",
            phone: "",
            address: ""
          }
        };
    default:
      throw Error('Unknown action.');
  }    
}
