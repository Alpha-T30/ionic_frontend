import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const container = document.getElementById("root");
const root = createRoot(container!);
const url = "https://ionic-auth0-test.netlify.app/tab1"
// const url = "http://localhost:8100/tab1";
root.render(
  <Auth0Provider
    domain="dev-uiv6n5n1fp6ghq3e.us.auth0.com"
    clientId="ySgUSZyGbqUIfcg1QGLFGX9hliPtxpOx"
    authorizationParams={{
      redirect_uri: url,
    }}
  >
    <App />
  </Auth0Provider>
);
