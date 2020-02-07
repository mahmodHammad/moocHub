import API_KEY from "../config/gapi";

export default () => {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";
    return new Promise((resolve, reject) => {
      script.addEventListener("load", () => {
        window.gapi.load("client", () => {
          window.gapi.client.setApiKey(API_KEY);
          window.gapi.client.load("drive", "v3", () => {
            resolve();
          });
        });
      });
      document.body.appendChild(script);
    });
  };
