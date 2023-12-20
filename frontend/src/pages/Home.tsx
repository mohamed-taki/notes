import React, { useEffect } from 'react'
import { useAppSelector } from '../app/hooks'
import { useNavigate } from 'react-router-dom';

function Home() {
    const authState = useAppSelector(state => state.auth);
    const navigate = useNavigate();
    
    useEffect(()=> {
        if(!authState.user){
            navigate('/login');
        }
    }, [authState, navigate])
  return (
    <div>
      This is notes page
    </div>
  )
}

export default Home
