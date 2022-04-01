import React, {Fragment} from 'react'



const Navbar= () => {

  return(

    <React.Fragment>
     <nav id="nav" className="text-align-center navbar navbar-dark bg-dark navbar-expand-sm ">

      <div className="container-nav">


        <p to={'/'} className="navbar-brand">

         <i className="fa fa-mobile text-warning fw-bold"/>
        My Contact
        <span className="text-warning fw-bold"> ☏ Roladex</span>

        </p>


      </div>



    </nav>
    </React.Fragment>
  )

}
export default Navbar
