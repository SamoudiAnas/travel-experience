import React, { useEffect, useRef, useState } from 'react'
import {useSession, signIn, signOut} from 'next-auth/react'
import Notification from '../../components/UI/notification'

async function createUser(name, email, password){
  const response = await fetch('../api/auth/signup',
  {
    method: 'POST',
    body: JSON.stringify({name, email, password}),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await response.json();

  if(!response.ok){
    throw new Error(data.message || 'Something went wrong' );
  }

  return data;
}

const Login = () => {
    useEffect(() => {
        switchFunction();
    }, []);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [requestStatus, setRequestStatus] = useState();
    const [requestError, setRequestError] = useState();
    const {session, loading} = useSession();

    useEffect(() => {
      if(requestStatus === 'success' || requestStatus === 'error'){
        const timer = setTimeout(() => {
          setRequestStatus(null);
          setRequestError(null);
        }, 3000);

        return () => clearTimeout(timer);
      }
    }, [requestStatus]);

 

    const enteredEmail = useRef();
    const enteredPassword = useRef();

    const switchFunction = () => {
      const sign_in_btn = document.querySelector('#sign-in-btn');
      const sign_up_btn = document.querySelector('#sign-up-btn');
      const container = document.querySelector('.container');

      sign_up_btn.addEventListener('click', () => {
          container.classList.add('sign-up-mode');
      });

      sign_in_btn.addEventListener("click", () => {
          container.classList.remove("sign-up-mode");
        });
  };

    const nameChangeHandler = (event) => {
      setName(event.target.value);
    };
    const emailChangeHandler = (event) => {
      setEmail(event.target.value);
    };
    const passwordChangeHandler = (event) => {
      setPassword(event.target.value);
    };

    const signUpFormHandler = async (event) => {
      event.preventDefault();
       // Add Validation for later.
      setRequestStatus('pending');
      try{
        const result = await createUser(name, email, password);
        setRequestStatus('success');
        console.log(result);
        setName('');
        setEmail('');
        setPassword('');
      }
      catch(error){
        console.log(error);
        setRequestError(error.message);
        setRequestStatus('error');
      }
    }


    const signInFormHandler = async (event) => {
      event.preventDefault();

      const result = await signIn('credentials', {redirect: false, email: enteredEmail.current.value, password: enteredPassword.current.value});
      console.log(result);
      console.log(session);
    } 

    if(loading){
      return <p>Loading...</p>;
    }

    if(session){
      return (

        <div className="container">
  
          Welcome user<br />
  
          <button onClick={() => signOut()}>Sign out</button>
  
        </div>
  
      );
    }

    let notification;
    if(requestStatus === 'pending'){
      notification = {
        status: 'pending',
        title: 'Sending data...',
        message: 'Your data is being registered in our database.'
      }
    }

    if(requestStatus === 'success'){
      notification = {
        status: 'success',
        title: 'Success',
        message: 'Your data has been registered successfully!'
      }
    }

    if(requestStatus === 'error'){
      notification = {
        status: 'error',
        title: 'Error',
        message: requestError
      }
    }

    return ( 
    <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
          <form onSubmit={signInFormHandler} action="#" className="sign-in-form">
            <h2 className="title">Sign in</h2>

            <div className="input-field">
              <i className="ri-user-line"></i>
              <input type="text" placeholder="Username" ref={enteredEmail}/>
            </div>

            <div className="input-field">
              <i className="ri-lock-line"></i>
              <input type="password" placeholder="Password" ref={enteredPassword} />
            </div>

            <input type="submit" value="Login" className="btn solid" />

            <p className="social-text">Or Sign in with social platforms</p>

            <div className="social-media">
              <a onClick={() => signIn()} className="social-icon">
                <i className="ri-google-line"></i>
              </a>
              <a onClick={() => signIn()} className="social-icon">
                <i className="ri-facebook-line"></i>
              </a>
              <a  className="social-icon">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </form>

          <form onSubmit={signUpFormHandler} action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>

            <div className="input-field">
              <i className="ri-user-line"></i>
              <input type="text" placeholder="Username" onChange={nameChangeHandler} value={name} />
            </div>
            
            <div className="input-field">
              <i class="ri-mail-line"></i>
              <input type="email" placeholder="Email" onChange={emailChangeHandler} value={email} />
            </div>

            <div className="input-field">
              <i className="ri-lock-line"></i>
              <input type="password" placeholder="Password" onChange={passwordChangeHandler} value={password}/>
            </div>

            <button type="submit" className="btn">Sign Up</button>

            <p className="social-text">Or Sign up with social platforms</p>
            
            <div className="social-media">
              <a href="#" className="social-icon">
                <i className="ri-google-line"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="ri-facebook-line"></i>
              </a>
              <a href="#" className="social-icon">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </form>
          {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
        </div>
      </div>

      <div className="panels-container">

        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>

          <img src="/assets/images/log.svg" className="image" alt="" />
        </div>


        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>

          <img src="/assets/images/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>
    )
}

export default Login
