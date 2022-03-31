import React, {useState, Fragment} from 'react';

const EditContact = ({contacts}) => {

  const [contact, setContact] = useState([])
  //edit contact update

        const updateContact = async (e) => {
        //i dont want to refresh yet
          e.preventDefault();

          try{
            const body = {contact}

            const response = await fetch(`http://localhost:8080/contacts/${contact.id}`, {

              method: "PUT",
              headers : {"Content-Type": "application/json"},
              body: JSON.stringify(body)
            })

            window.location = "/";

          }catch(error){
            console.error(error.message)
          }

      }

  return(
    <Fragment>
      <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${contact.id}`}>
        Edit
      </button>


        {/* id= id(num) */}
      <div className="modal" id={`id${contact.id}`}>
        <div className="modal-dialog">
          <div className="modal-content">

            {/* <!-- Modal Header --> */}

            {/* <!-- Modal body --> */}
            <div className="modal-body">
              <input
                type="text"
                className="form-control"
                value={contact}
                onChange={(e)=> setContact(e.target.value)}
              />
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button type="button" className="btn btn-warning" data-dismiss="modal"
              onClick={(e)=> updateContact(e)}
              >
              Edit</button>
            </div>


          </div>
        </div>
      </div>
    </Fragment>

  )
}
export default EditContact


