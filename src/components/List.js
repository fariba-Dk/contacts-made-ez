import { useState, useEffect, Fragment } from "react";
import EditContact from "./EditContact";
import '../index.css'

const List = () => {

  const [contacts, setContacts] = useState([])

  // getting the list of contacts
  const getContacts = async () => {

    try{
      const response = await fetch('http://localhost:8080/contacts')

      //takes time to parse data => await
      const contacts = await response.json()

      //to change state
      setContacts(contacts)

    }catch(err){
      console.error(err.message)

    }
  }

  useEffect(() => {
    getContacts();
  }, []);//to ensure we are making one request

  console.log("this is contact list------->", contacts)


  //deleting a contact from the list with a delete button
  const deleteContact = async (id) => {
    try{

      const contactToBeDeleted = await fetch(`http://localhost:8080/contacts/${id}`,{
      //need to specify method
      method: "DELETE"
    })

      setContacts(contacts.filter(contact => contact.id !== id))

      console.log(contactToBeDeleted)

    }catch(error){
      console.error(error.message)
    }
  }

  return(
    <Fragment>
    { " " }
      <h1 className="mt-5 text-center"> My Contacts 📇 </h1>
        <table className="table mt-5 text-center">
            <thead className="head">
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Cell Phone</th>
                <th>Email</th>
                <th>Address</th>
                <th>Dob</th>
                <th>Notes</th>
              </tr>
            </thead>


            <tbody>

              {contacts.map(contact => (

                  <tr key={contact.id}>

                  <td>{contact.first_name}</td>
                  <td>{contact.last_name}</td>
                  <td>{contact.cell_phone}</td>
                  <td>{contact.email}</td>
                  <td>{contact.address}</td>
                  <td>{contact.dob}</td>
                  <td>{contact.notes}</td>
                  <td>
                  <button className="btn btn-success">Edit</button>
                  </td>

                  {/* we need to pass the PROP for Edit contact bringing component as a child*/}
                  <td>
                    <EditContact contact={contact}/>
                  </td>
                  <td>
                  {/* we need to fetch request */}
                  <button
                  className="btn btn-danger"
                  onClick={()=> deleteContact(contact.id)}>Delete</button>
                  </td>
                </tr>

              ))}

              </tbody>

          </table>

      </Fragment>
    )
  }
export default List;
