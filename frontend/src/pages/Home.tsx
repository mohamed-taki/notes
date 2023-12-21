import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { logoutUser } from '../features/auth/authSlice';


function Home() {
    const authState = useAppSelector(state => state.auth);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const logout = async () => {
      await dispatch(logoutUser);
      navigate("/login");
    }
    
    useEffect(()=> {
        if(!authState.user){
            navigate('/login');
        }
    }, [authState, navigate, dispatch])
  return (
    <div>
      This is notes page

      <Button variant='danger' onClick={logout}>
        Logout
      </Button>
    </div>
  )
}

export default Home
