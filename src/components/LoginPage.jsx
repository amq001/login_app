import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./LoginPage.css"


function LoginPage() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    // try {
    //   const response = await fetch('api',{
    //     method:'POST',
    //     headers:{
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({username, password}),
    //   });

    //   if (response.ok) {
    //     localStorage.setItem(JSON.stringify(response))
    //     navigate("/home");
    //   }
    //   else{
    //     setErrorMessage("Login Failed Wrong Email or Password")
    //   }

    // } catch (error) {
    //   console.log('Error:',error);
    //   setErrorMessage("Error. Try again later")
    // }
    if (username === 'admin' && password === 'password') {
      navigate("/home");
    } else {
      setErrorMessage('Wrong password. Please try again.');
    }
  }



  return (
    <>
    <div className="parent">
      <div className='first'>
        <form onSubmit={handleSubmit}>
        <h1>Login</h1>
          <div>
            <label htmlFor="email">Email: </label>
            <input
            type="text"
            className='form-control'
            id='email'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className='label' htmlFor="password">Password: </label>
            <input
            type="password"
            className='form-control'
            id='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Login</button>
        </form>
        {errorMessage && <p>errorMessage</p> }
      </div>
      </div>
      
    </>
  )
}

export default LoginPage
