import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter/AppRouter";
import { NavBar } from "./components/NavBar/NavBar";
import { useContext, useEffect, useState } from "react";
import { Context } from "./main";
import { check } from "./http/userApi";
import { Spinner } from "react-bootstrap";


export const App = () => {
  const { user } = useContext(Context);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
      check().then(() => {
        user.setUser(user);
        user.setIsAuth(true)
      }).finally(() => {
        setLoading(false)
      })
  }, [])

  if (isLoading) {
    return <Spinner animation='grow' />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  )
}
