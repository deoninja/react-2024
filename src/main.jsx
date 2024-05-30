import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './globals.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UsersPage } from './pages/UsersPage';
import { BlogPostPage } from './pages/BlogPostPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/blog-posts',
        element: <BlogPostPage />,
      },
    ],
  },

  {
    path: '/users',
    element: <UsersPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
