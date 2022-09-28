import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Expenses from "./Components/expenses.jsx";
import Invoices from "./Components/invoices.jsx";
import UserScreen from './Components/UserScreen.jsx';
import 'bootstrap/dist/css/bootstrap.css';  // React bootstrap was not working
import "react-datepicker/dist/react-datepicker.css"; // For react datepicker

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
      	<Route path="expenses" element={<Expenses />} />
      	<Route path="home" element={<UserScreen />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
