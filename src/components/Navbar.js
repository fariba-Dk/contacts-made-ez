import React, {Fragment} from 'react'
import {Link} from 'react-router-dom'





const Navbar= () =>{

  return(

    <React.Fragment>
    <nav className="navbar navbar-dark bg-dark navbar-expand-sm">
      <div className="container">
        <p to={'/'} className="navbar-brand">
         <i className="fa fa-mobile text-warning"/>
        My Contact
        <span className="text-warning"> ☏ Roladex</span>
        </p>
      </div>


    </nav>

    </React.Fragment>
  )

}
export default Navbar
