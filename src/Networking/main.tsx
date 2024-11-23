import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const AltGuard = () => {
  const [override, setOverride] = useState(false);
  useEffect(() => {
    if (window.alt1) {
      alt1.identifyAppUrl("./appconfig.json");
    }
  }, [window.alt1]);
  console.log("alt1:", window.alt1); // Debug statement
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
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AltGuard />
);
