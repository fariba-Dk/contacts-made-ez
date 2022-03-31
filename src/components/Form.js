import React, {Fragment, useState} from 'react';
import '../index.css'


const Form = () => {

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

        </form>

    </Fragment>
  )
}


export default Form;
