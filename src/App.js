import React, {Fragment} from 'react';
import Navbar from './components/Navbar'
import List from './components/List';
import AddContact from './components/AddContact';
import ViewContact from './components/ViewContact'
import EditContact from './components/EditContact'
import "./index.css"





function App(){

  return(

    <Fragment>

      <Navbar/>


      <List/>


        {/* <Routes> */}
          {/* <Route path={'/'} element={<Navigate to={'/contacts'}/>} />
          <Route path={'/contacts/add'} element={<Form/>} />

          <Route path={'/contacts/view/:id'} element={<ViewContact/>} />
          <Route path={'/contacts/edit/:id'} element={<EditContact/>} /> */}

        {/* </Routes> */}

        <ViewContact/>

    </Fragment>
  )

}
export default App;

