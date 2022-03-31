import { useState, useEffect, Fragment } from "react";
import EditContact from "./EditContact";
import ViewContact from './ViewContact';
import '../index.css'
//import {Link} from 'react-router-dom'
import Form from './AddContact'

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

      <section className="contact-search">
        <div className="container">
          <div className="grid">
            <div className="row">
              <div className="col">
                <p className="h3 fw-bold">Contact Manager
                  <h1 className="mt-5 text-center"> My Contacts 📇 </h1>
                    <div>

                    <Form/>
                      className="btn btn-primary ms-2">
                      <i className="fa fa-plus-circle me-2"/>
                      Add New Contact
                      </div>
                </p>
                <p className="fst-italic">lorem30  </p>
              </div>
            </div>
              <div className="row">
                <div className="col-md-6">
                  <form className="row">
                    <div className="col">
                      <div className="mb-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Search contacts"
                        />
                      </div>

                    </div>
                    <div className="col">

                      <div className="mb2">
                        <input
                          type="submit"
                          className="btn btn-outline-dark"
                          value="Search"/>
                      </div>
                    </div>

                  </form>

                </div>

              </div>
          </div>
        </div>
      </section>

      <section className="contact-list">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body">
                  {/* 12   4 7 1 */}
                  <div className="row align-items-center d-flex justify-content-around">
                      <div className="col-md-4">
                        <img src="https://randomuser.me/api/portraits/men/99.jpg" alt="pic" className="img-fluid contact-img"/>
                        </div>

                      <div className="col-md-7">

                        <ul className="list-group">
                          <li className="list-group-item list-group-item-action">
                          First Name : <span className="fw-bold"> Andy</span>
                          </li>

                          <li className="list-group-item list-group-item-action">
                           Last Name: <span className="fw-bold"> Andy</span>
                          </li>

                          <li className="list-group-item list-group-item-action">
                          Cell Phone : <span className="fw-bold"> Andy</span>
                          </li>

                          <li className="list-group-item list-group-item-action">
                          Email : <span className="fw-bold"> Andy</span>
                          </li>

                          <li className="list-group-item list-group-item-action">
                           Address : <span className="fw-bold"> Andy</span>
                          </li>

                          <li className="list-group-item list-group-item-action">
                          DOB : <span className="fw-bold"> Andy</span>
                          </li>

                          <li className="list-group-item list-group-item-action">
                          Notes : <span className="fw-bold"> Andy</span>
                          </li>

                        </ul>
                      </div>


                    <div className="col-md-1 d-flex flex-column align-items-center">

                      <div className="btn btn-warning my-1"></div>

                      <ViewContact/>
                      <i className="fa fa-eye"/>
                      </div>

                      <div className="btn btn-primary my-1">
                      <ViewContact/>
                      </div>
                      <i className="fa fa-pen"/>
                      </div>

                      <button className="btn btn-danger my-1"  >
                      <i className="fa fa-trash"/>
                      </button>

                    </div>
                  </div>
                </div>
              </div>
            </div>

      </section>

    </Fragment>
  )
}






export default List;
