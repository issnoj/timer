import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./views/Home/Home";
import reportWebVitals from "./reportWebVitals";
import "./fontawesome";

createRoot(document.getElementById("root")).render(<Home />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
