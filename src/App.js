import React, {Fragment} from 'react';
import Navbar from './components/Navbar'
import List from './components/List';
import Form from './components/Form';
import ViewContact from './components/ViewContact'
import EditContact from './components/EditContact'
import "./index.css"
import {Routes, Route, Navigate} from 'react-router-dom'




function App(){

  return(

    <Fragment>
      <Navbar/>
        <Routes>
          <Route path={'/'} element={<Navigate to={'/contacts'}/>} />
          <Route path={'/contacts/add'} element={<Form/>} />

          <Route path={'/contacts/view/:id'} element={<ViewContact/>} />
          <Route path={'/contacts/edit/:id'} element={<EditContact/>} />

        </Routes>


        <Form/>


        <List/>


    </Fragment>
  )

}
export default App;

