import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QeuryProvider } from "./lib/react-query/QueryProvider.tsx";
import { RecoilRoot } from "recoil";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecoilRoot>
      <QeuryProvider>
        <App />
      </QeuryProvider>
    </RecoilRoot>
  </React.StrictMode>
);
