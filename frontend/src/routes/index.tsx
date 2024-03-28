import { Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Form from '../components/Form';

function RoutesApp() {
  return (
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/cadastro-produto" Component={Form}/>
    </Routes>
  );
}

export default RoutesApp;