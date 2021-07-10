import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Activity from "./Components/Activity";

function App() {
  return (
    <React.Fragment>
      <div className="container" style={{borderStyle:'solid', marginTop: 10, textAlign:'center'}}> 
          <h1>Test App</h1>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <div style={{padding: 10}}>
              <Activity />
            </div>
          </div>
          <div className='column'>
            <div style={{padding: 10}}>
            <Activity />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='column'>
            <div style={{padding: 10}}>
            <Activity />
            </div>
          </div>
          <div className='column'>
            <div style={{padding: 10}}>
            <Activity />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
              <button className='btn btn-primary'>Button 1</button>
              <button className='btn btn-primary'>Button 2</button>
        </div>
        <div className='row'>
              <button className='btn btn-primary'>Button 3</button>
              <button className='btn btn-primary'>Button 4</button>
        </div>
        <div className='row' style={{justifyContent: 'center', marginTop: 30, fontWeight: 'bold'}}>
            Current Unix Timestamp
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
 