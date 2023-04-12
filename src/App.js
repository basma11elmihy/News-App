import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Componentes/Layout/Layout';
import Home from './Componentes/Home/Home';
import About from './Componentes/About/About';
import NotFound from './Componentes/NotFound/NotFound';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';


function App() {
  let routes = createBrowserRouter([
    {path:"", element:<Layout/>, children: [
      {path: "", element: <Home/>},
      {path: "about", element: <About/>},
      {path: "*", element:<NotFound/>}
  ]
    }
  ]);
  return (
    <RouterProvider router={routes}/>
  );
}

export default App;
