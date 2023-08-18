import logo from './logo.svg';
// import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        },
        {
          path: '/quiz/:id',
          element: <Quiz></Quiz>,
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)

        },
        {
          path: '/statistics',
          element: <Statistics></Statistics>,
          loader: () => fetch('https://openapi.programming-hero.com/api/quiz')
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
