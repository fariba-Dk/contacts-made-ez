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
      <section className="add-contact p-3">
        <div className="container">
        {/* container */}
          <div className="row">
            <div className="col">
              <p className="h4 text-primary fw-bold">Edit Contact</p>
              <p className="fst-italic">Lorem20 </p>
            </div>
          </div>


          <div className="row align-items-center">
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

                {/* buttons */}

                <div>
                  <input type="submit" className="btn btn-success" value="Create"/>
                  <button className="btn btn-warning ms-2">Update</button>
                </div>

            </form>

          </div>

          {/* image url */}

          <div className="col-md-6">
          <img className="contact-img" src="https://randomuser.me/api/portraits/men/99.jpg" alt="pic"/>
          </div>

        </div>
      </div>
    </section>
  </Fragment>
    // <Fragment>
    //   <button type="button" className="btn btn-warning" data-toggle="modal" data-target={`#id${contact.id}`}>
    //     Edit
    //   </button>


    //     {/* id= id(num) */}
    //   <div className="modal" id={`id${contact.id}`}>
    //     <div className="modal-dialog">
    //       <div className="modal-content">

    //         {/* <!-- Modal Header --> */}

    //         {/* <!-- Modal body --> */}
    //         <div className="modal-body">
    //           <input
    //             type="text"
    //             className="form-control"
    //             value={contact}
    //             onChange={(e)=> setContact(e.target.value)}
    //           />
    //         </div>

    //         {/* <!-- Modal footer --> */}
    //         <div className="modal-footer">
    //           <button type="button" className="btn btn-warning" data-dismiss="modal"
    //           onClick={(e)=> updateContact(e)}
    //           >
    //           Edit</button>
    //         </div>


    //       </div>
    //     </div>
    //   </div>
    // </Fragment>

  )
}
export default EditContact


