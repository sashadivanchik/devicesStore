import { useContext } from "react";
import { Context } from "../../main";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../pages/utils/paths";
import { observer } from "mobx-react-lite";

export const NavBar = observer(() => {
  // @ts-ignore
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const handleAuth = () => {
    user.setIsAuth(true)
  };

  const toAdmin = () => {
    navigate(ADMIN_ROUTE)
  };

  const toLogin = () => {
    navigate(LOGIN_ROUTE)
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <NavLink
          to={SHOP_ROUTE}
          style={{ color: 'white' }}
        >
          TOP MAGAZ
        </NavLink>
        <Nav className="ml-auto" style={{ color: 'white' }}>
          {
            user.isAuth ? (
              <>
                <Button variant={'outline-light'} onClick={toAdmin}>Админ панель</Button>
                <Button variant={'outline-light'} onClick={toLogin} className="ml-4">Выйти</Button>
               </>
            ) : (
              <Button
                variant={'outline-light'}
                onClick={handleAuth}
              >
                Авторизация
              </Button>
            )
          }
        </Nav>
      </Container>
    </Navbar>
  );
});
