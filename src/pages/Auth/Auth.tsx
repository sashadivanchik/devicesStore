import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/paths";
import { registration, login } from "../../http/userApi";
import { useContext, useState } from "react";
import { observer } from "mobx-react-lite";
import { Context } from "../../main";


export const Auth = observer(() => {
  const { user } = useContext(Context);
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEnter = async () => {
    try {
      let data;

      if (isLogin) {
        data = await login(email, password);
      } else {
        data = await registration(email, password);
        console.log({ user })
      }

      user.setUser(data)
      user.setIsAuth(true);
      navigate(SHOP_ROUTE)
    } catch (e) {
      // @ts-ignore
      alert(e.response.data.message)
    }

  };

  return (
    <Container
      className='d-flex justify-content-center align-content-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600, height: 400, padding: 15 }}>
        <h2 className="m-auto">{ isLogin ? 'Авторизация' : "Регистрация" }</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Введите email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите пароль'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Row className='d-flex justify-content-between mt-3'>
            { isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?
                <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}
            <Button
              variant='outline-success'
              onClick={handleEnter}
            >
              { isLogin ? 'Войти' : 'Регистрация' }
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
});
