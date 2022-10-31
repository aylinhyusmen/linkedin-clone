import Feed from './features/Feed';
import React, { useEffect } from 'react';
import './App.css';
import Header from './features/Header';
import Sidebar from './features/Sidebar';
import Login from './features/Login';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, logout, login } from "./features/userSlice";
import { auth } from './features/firebase';
import Widgets from './features/Widgets';


const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => { 
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        //user is logged out
        dispatch(logout())
      }
    })
  }, [])
  

  return (
    <div className='app'>
    <Header/>
    
    {!user ? (
    <Login />
    ) : (
 <div className='app__body'>
    <Sidebar />
    <Feed />
    <Widgets />
  </div>

    )}

</div>
  );
}

export default App
