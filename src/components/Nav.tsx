import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { routes } from '../routes';
import '../css/components/nav.css';

export default function Nav() {
  const location = useLocation();
  return (
    <ul className='flex'>
        <li>
            <Link to={routes.bookCreate.match}
            className={`p-3 ${location.pathname.includes(routes.bookCreate.match) ? 'active' : ''}`}>Add Book</Link>
        </li>
        <li>
            <Link to={routes.bookList.match}
            className={`p-3 
              ${location.pathname.includes(routes.bookList.match || routes.initialPage.match)  ? 
              'active' : ''}`}>Books</Link>
        </li>
    </ul>
  )
}
