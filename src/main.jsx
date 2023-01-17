import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { ProviderData } from "./Context/ContextData"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <ProviderData>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProviderData>,
)
