import { Button, Card, Container, Form, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/paths";

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location);

  return (
    <Container
      className='d-flex justify-content-center align-content-center'
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600, height: 400, padding: 15 }}>
        <h2 className="m-auto">{ isLogin ? 'Логин' : 'Авторизация' }</h2>
        <Form className='d-flex flex-column'>
          <Form.Control
            className='mt-3'
            placeholder='Введите email'
          />
          <Form.Control
            className='mt-3'
            placeholder='Введите пароль'
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
            <Button variant='outline-success'>
              { isLogin ? 'Войти' : 'Регистрация' }
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
