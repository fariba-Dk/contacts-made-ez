import React, {Fragment, useState} from 'react';
import '../index.css'


const AddContact = () => {

  const [contacts, setContacts ] = useState("")

  //hooks
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cellPhone , setCellPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [notes, setNotes] = useState('');


   //NOW we need to submit the formhandle the e of the user typing into the form
  const onSubmitForm = async (e) => {

    e.preventDefault(); //prevent default to occur

    try{

      const body = {firstName, lastName, cellPhone, email, address, dob, notes}
      console.log(body)

      const response = await fetch("http://localhost:8080/contacts/", {

        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body),

      });

      if(response.status === 200){
        await onSubmitForm()
      }

      window.location = '/'; //once response has been sent it'll refresh

    }catch(error){
      console.error(error.message)
    }
  }


  return (
    <Fragment>
      <section className="add-contact p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <p className="h4 text-success fw-bold">Create Contact</p>
              <p className="fst-italic">Lorem20 </p>
            </div>
          </div>


          <div className="row">
            <div className="col-md-4">
              <form>
                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Cell phone"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Address"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Dob"
                    className="form-control"
                  />
                </div>

                <div className="mb-2">
                  <input
                    type="text"
                    placeholder="Notes"
                    className="form-control"
                  />
                </div>

                <div>
                  <input type="submit" className="btn btn-success" value="Create"/>
                  <button className="btn btn-dark ms-2">Create</button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </section>
    </Fragment>




  )
}


export default AddContact;



{/*
        </div>
      </section>
      <h1 className="text-center mt-5">My Roladex ☏ with PERN</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>

          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => {setFirstName(e.target.value)}
          }
        />
          <br />


          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => {setLastName(e.target.value)}
            }
          />
          <br />

          <input
            type="text"
            className="form-control"
            placeholder="Cell Phone"
            value={cellPhone}
            onChange={(e) => {setCellPhone(e.target.value)}
            }
          />
          <br />


          <input
            type="type"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => {setEmail(e.target.value)}}
          />
          <br/>



          <input
            type="type"
            className="form-control"
            placeholder="Address"
            value={address}
            onChange={(e) => {setAddress(e.target.value)}}
          />
          <br/>


          <input
            type="date"
            className="form-control"
            placeholder="Date Of Birth"
            value={dob}
            onChange={(e) => {setDob(e.target.value)}}
          />
          <br/>


          <input
            type="text"
            className="form-control"
            placeholder="Additional notes... "
            onChange={(e) => {setNotes(e.target.value)}}
          />
          <br />

          <button className="btn btn-success" type="submit">Add</button>

        </form> */}
