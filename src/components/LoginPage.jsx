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
    //     setRedirectToHomePage(true);
    //     localStorage.setItem(JSON.stringify(response))
    //   }
    //   else{
    //     setErrorMessage("Login Failed")
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
      <div className='first'>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email: </label>
            <input
            type="text"
            id='email'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
            type="password"
            id='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <button type='submit'>Login</button>
        </form>
        {errorMessage && <p>errorMessage</p> }
      </div>
      
    </>
  )
}

export default LoginPage
