import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState } from "react";
import './App.css';
import app from "./firebase/firebase.init";
const auth=getAuth(app);

function App() {
  const provider=new GoogleAuthProvider();
  const githubProvide=new GithubAuthProvider();
  const [user,setUser]=useState({});
  const handleGoogleSignIn=()=>{
    signInWithPopup(auth,provider)
      .then(result=>{
        const user=result.user;
        setUser(user)
        console.log(user);
      })
      .catch(error=>{
        console.log("error is: ",error);
      })
  }

  const handleGithubSignIn=()=>{
      signInWithPopup(auth,githubProvide)
      .then(result=>{
        const user=result.user;
        setUser(user);
        console.log(user);
      })
      .catch(error=>{
        console.error("Error is : ",error);
      })
  }
const handleSignOut=()=>{
    signOut(auth)
    .then(()=>{
       setUser({})
    })
    .catch(error=>{
      setUser({})
    })
}

  return (
    <div className="App">
      { user.uid ?  <button onClick={handleSignOut}>Sign Out</button>
      :
      <>
      <button onClick={handleGoogleSignIn}> Google Sign In</button>
     <button onClick={handleGithubSignIn}>GitHub Sign In</button>
      </>
     
    
     }
     {
      user.uid &&   <div>
      <h3>Name : {user.displayName}</h3>
      <p>Email id: {user.email}</p>
      <img src={user.photoURL} alt="" />
     </div>
     }
    </div>
  );
}

export default App;
