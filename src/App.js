import React, {Fragment} from 'react';
import List from './components/List';
import Form from './components/Form';
import "./index.css"




function App(){

  return(

    <Fragment>
      <div className="container">
        <Form/>
      </div>
      <div>
        <List/>
      </div>

    </Fragment>
  )

}
export default App;

