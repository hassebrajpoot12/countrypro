import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layouts } from './components/layout/layout';
import { About } from './pages/About';
import { Home } from './pages/Home';
import { Contact } from './pages/contact';
import { Country } from './pages/country';
import { Error } from './pages/Error';
import { Singel } from './pages/singel';

const router = createBrowserRouter([
  {
    path: '/',  
    element: <Layouts/>,
    errorElement:<Error/>,
    children:[
      {
        path:"about",
        element:<About/>
      },
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"country",
        element:<Country/>
      },
      {
        path:"singel/:id",
        element:<Singel/>
      }
    ]
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}