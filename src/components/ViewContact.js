import React, {Fragment} from 'react'


const ViewContact= () => {

  return(

    <React.Fragment>

      <section className="view-contact-intro p-3">
        <div className="container">
          <div className="row">
            <div className="col">

              <p className="h3 text-warning fw-bold">View Contact</p>
              <p className="fst-italic">Lorem20 </p>

            </div>
          </div>
        </div>
      </section>

      <section className="view-contact mt-3">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <img className="contact-img" src="https://randomuser.me/api/portraits/men/99.jpg" alt="pic"/>
            </div>

            <div className="col-md-8">
              <ul>
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

            <div className="row">
              <div className="col">

              {/* <div to={'/contacts/'} className="btn btn-warning">Back
              </div> */}

              </div>
            </div>
          </div>
        </div>
      </section>



    </React.Fragment>
  )

}
export default ViewContact
