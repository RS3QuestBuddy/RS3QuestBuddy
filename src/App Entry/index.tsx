import * as a1lib from "alt1";
import App from "../Networking/app";
import { useEffect, useState } from "react";

export const AltGuard = () => {
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
        <h1>Alt-1 was not found</h1>
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
                ? "appconfig" //Target prod (this is only for github pages)
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
