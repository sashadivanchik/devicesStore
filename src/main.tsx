import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from "./App";
import UserStore from './store/UserStore';
import DeviceStore from "./store/DeviceStore";

export type TodoContextType = {
  user: any
  device: any
};

export const Context = createContext<TodoContextType | null>(null);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      device: new DeviceStore()
    }}>
      <App />
    </Context.Provider>
  </StrictMode>,
)
