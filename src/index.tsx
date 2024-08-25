import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import ErrorBoundary from "./components/common/Error/ErrorBoundary";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* Error will be handled by ERROR BOUNDARY */}
    <ErrorBoundary>
        {/* Rendering Components */}
        <h1>Render Components Here</h1>
    </ErrorBoundary>
  </React.StrictMode>
);
