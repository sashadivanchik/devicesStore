import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../../routes/routes";
import { SHOP_ROUTE } from "../../pages/utils/paths";
import { useContext } from "react";
import { Context, TodoContextType } from "../../main";

export const AppRouter = () => {
  const user = useContext<TodoContextType | null>(Context);

  return (
    <Routes>
      {user?.user.isAuth && authRoutes.map(({ path, Component }) =>
        <Route
          key={path}
          path={path}
          element={
            <Component/>
          }
        />
      )}
      {publicRoutes.map(({ path, Component }) =>
        <Route
          key={path}
          path={path}
          element={
            <Component/>
          }
        />
      )}
      <Route
        path="*"
        element={
          <Navigate to={SHOP_ROUTE} />
        }
      />
    </Routes>
  );
};
