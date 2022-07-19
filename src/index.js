import ReactDOM from "react-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap"
import './style.css';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(<BrowserRouter  basename={process.env.PUBLIC_URL}><App /></BrowserRouter>, document.getElementById("root"));