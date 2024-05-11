import React,{useState,useEffect} from 'react';
import './App.css';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import Headers from './components/Header';
import Login from './components/Login';
import NavBar from './components/NavBar';
import Dashboard from './components/Pages/Dashboard';
import Logout from './components/Logout';
import Staff from './components/Pages/Staff/Staff';

import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  const [isLoggedin, setIsLoggedin] = useState(false);
   console.log('dsfdsf'+sessionStorage.getItem('user'));
  
  

   useEffect(() => {
         if(sessionStorage.getItem('user'))
            setIsLoggedin(true);
          
      },[]);



  return (
    <>
          {!isLoggedin ? (
            
            <Login  />  ) : (<>
              <div className="container-scroller">
                <Headers />
                <div className="container-fluid page-body-wrapper">
                <NavBar /> 
                <Router>
                  <Route exact path='/Dashboard' component={Dashboard} />
                </Router>
                <Router>
                  <Route exact path='/Staff' component={Staff} />
                </Router>
                <Router>
                  <Route exact path='/logout' component={Logout} />
                </Router>
                </div>
                
                
                <div>
                  <Router>
                    <div>
                      <Route exact path='/create' component={Create} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                      <Route exact path='/read' component={Read} />
                    </div>
                    <div style={{ marginTop: 20 }}>
                      <Route exact path='/update' component={Update} />
                    </div>

                  </Router>
                  <div>

                  </div>

                </div>
              </div>
              </>
        )
          }
          </>
  );
}

export default App;
