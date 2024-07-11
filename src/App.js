import logo from './logo.svg';
import './App.css';
import Managetasks from './components/to-do/Managetaks'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'

function App() {
  let router=createBrowserRouter([
    {
        path:'/sreecharanVemula/to-do-application.git',
        element: <Managetasks/>,
         
    }])
  return (
    <div className="App">
          <RouterProvider router={router}/>
    </div>
  );
}

export default App;
