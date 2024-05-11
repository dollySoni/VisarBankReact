import React, {useState} from 'react';
import { BrowserRouter as Router,Redirect ,withRouter,useHistory    } from 'react-router-dom';

function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [error, setError] = useState(null);
    let history = useHistory();


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [isLoggedin, setIsLoggedin] = useState(false);
    const [loading, setLoading] = useState(false);
   const handleLogin = async(userDetail) => {
    setError(null);
    setLoading(true);
    
  //   {
  //     "email":"admin@admin.com",
  //     "password":12345678
  
  // }
    // API something like http://example.com/user/login
    fetch('ludo.craftersgoa.com/backend/public/api/login', { name: username.value, pass: password.value })
    .then(response => {
      setLoading(false);
      console.log(response.status);
      // set the token and user from the session storage
      sessionStorage.setItem('token', 'sdsddd');
      sessionStorage.setItem('user', 'Dolly');
     console.log(sessionStorage.getItem('user'));
     // sessionStorage.setItem('token', response.data.token);
     // sessionStorage.setItem('user', JSON.stringify(response.data.user));
      //history.push('/Dashboard');
      window.location.reload();
    }).catch(error => {
      setLoading(false);
      //if (error.response.status === 401) 
       //setError(error.response.data.message);
     // else setError("Something went wrong. Please try again later.");
    });

}


return (
    <div>
          <div className="row justify-content-center mt-5">
    <div className="col-md-8">

        <div className="card">
            <div className="card-header">Login</div>
            <div className="card-body">
                <form action="{{ route('authenticate') }}" method="post">
                    <div className="mb-3 row">
                        <label htmlFor="email" className="col-md-4 col-form-label text-md-end text-start">Email Address</label>
                        <div className="col-md-6">
                        <input type="text" {...username} autoComplete="new-password" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                        <label htmlFor="password" className="col-md-4 col-form-label text-md-end text-start">Password</label>
                        <div className="col-md-6">
                        <input type="password" {...password} autoComplete="new-password" />
                        </div>
                    </div>
                    <div className="mb-3 row">
                    {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                          <input type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} /><br />
                    </div>
                  </form>
            </div>
        </div>
    </div>
</div>


      
    </div>
  );
}
 


const useFormInput = initialValue => {
    const [value, setValue] = useState(initialValue);
  
    const handleChange = e => {
      setValue(e.target.value);
    }
    return {
      value,
      onChange: handleChange
    }
  }

  

export default Login;