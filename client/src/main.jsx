import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TreasuryProvider } from "./context/TreasuryContext";
ReactDOM.createRoot(document.getElementById("root")).render(<TreasuryProvider><App /></TreasuryProvider>);