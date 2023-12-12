import { RouteObject } from 'react-router-dom';
// import Home from './components/home';
import { Root } from './App';

function Home() {
  return <div>Home</div>;
}

export function getRoutes(): RouteObject[] {
  return [
    {
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
      ]
    }
  ];
}
