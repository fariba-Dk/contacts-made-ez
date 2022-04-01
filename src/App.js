import React, {Fragment} from 'react';

import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import List from './components/List';
import Navbar from './components/Navbar'
import ViewContact from './components/ViewContact'

import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"



function App(){

  return(

    <Fragment>

      <Navbar/>
      <List/>
     



    </Fragment>
  )

}
export default App;

