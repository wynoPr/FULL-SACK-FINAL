import React, { useContext, useEffect } from 'react'
import LoginForm from '../../components/forms/LoginForm'
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../App';

export default function Login() {
    const { lastP, setLastP } = useContext(GlobalContext);


  const path = useLocation().pathname;

  //stablish last page viewed
  useEffect(() => {
    if (path === "/") {
      return () => {
        setLastP(path);
      };
    }
  }, []);
  //
    return (
        <LoginForm />
    )
}
