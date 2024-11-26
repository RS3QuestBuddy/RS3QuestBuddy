import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { hasAlt1 } from "alt1";
import App from "./app";
import { FontSizeProvider } from "../Pages/Font Wrapper/FontContextProvider";
import "./../Assets/css/index.css";
import "./../Assets/rs3buddyicon.png";
import "./../Assets/fonts/RS3Font.woff2";
const AltGuard = () => {
  const [override, setOverride] = useState(false);
  useEffect(() => {
    if (window.alt1) {
      alt1.identifyAppUrl("./appconfig.json");
    }
  }, [window.alt1]);
  if (window.alt1 || override) {
    return <App />;
  }

  return (
    <>
      <div className="App">
        <h1>ALT1 not found</h1>
        <p>
          <a
            href={`alt1://addapp/${window.location.protocol}//${
              window.location.host
            }/${
              !window.location.host.includes("localhost")
                ? "RS3QuestBuddy/" //Include repo name (this is only for github pages)
                : ""
            }appconfig${
              !window.location.host.includes("localhost")
                ? "" //Target prod (this is only for github pages)
                : ""
            }.json`}
          >
            <button className="Alt1button">
              Click here to add this to alt1
            </button>
          </a>
        </p>

        <button className="Alt1button" onClick={() => setOverride(true)}>
          Continue to RS3 Quest Buddy Web (No Alt1)
        </button>
      </div>
    </>
  );
};
document.querySelector("html")!.style.fontSize = "16px";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <FontSizeProvider>
    <AltGuard />
  </FontSizeProvider>
);
