import React from 'react';
import './App.css';
import Basic from './Basic';
import Basic2 from './Basic2';
import HooksMyForm from './HooksMyForm';
import FormikBasic from './FormikBasic';
import ReactHookFormBasic from './ReactHookFormBasic';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col col-md-6">
            <FormikBasic />
          </div>
          <div className="col col-md-6">
            <ReactHookFormBasic />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
