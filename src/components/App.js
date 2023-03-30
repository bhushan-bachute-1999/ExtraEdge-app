import { useSelector } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from '.';
import EditProfile from './editProfile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'editProfile/:id',
        element: <EditProfile />
      }
    ]
  },

])



function App() {
  const state = useSelector(state => state);
  console.log(state);

  return (
    <div className="App">

      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </div>
  );
}

export default App;
