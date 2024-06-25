import { useEffect, useRef, useState } from "react";
import "./SubmitForm.scss";
import GenerateTable from "../GenerateTable/GenerateTable";
import StatusModal from "../StatusModal/StatusModal";

export default function SubmitForm() {
  const inputFormula = useRef();
  const [tableData, setTableData] = useState(null);
  const [errorMessage, setErrorMessage] = useState(false);
  const [serverConnected, setServerConnected] = useState(false);
  const wss = useRef(null);

  useEffect(() => {
    wss.current = new WebSocket(process.env.REACT_APP_API_URL);

    wss.current.onopen = () => {
      setServerConnected(true);
    };

    wss.current.onmessage = (event) => {
      const response = JSON.parse(event.data);
      console.log(response.status);

      if (response.status === 200) {
        setTableData(response.data);
        setErrorMessage(false);
      } else {
        setTableData(response.message);
        setErrorMessage(true);
      }
    };

    wss.current.onclose = () => {
      console.log("WebSocket connection to Calculator closed");
    };

    return () => {
      wss.current.close();
    };
  }, []);

  const submitFormula = () => {
    if (wss.current && wss.current.readyState === WebSocket.OPEN) {
      wss.current.send(JSON.stringify(inputFormula.current.value));
    } else {
      console.error("WebSocket connection error");
    }
  };

  return (
    <>
      {serverConnected ? (
        <div className="submit-form">
          <div className="submit-form__input">
            <div className="submit-form__input-field">
              <input
                id="boolean-input-field"
                placeholder="Write Boolean Formula"
                ref={inputFormula}
              />
              <button id="boolean-input-button" onClick={submitFormula}>
                Solve
              </button>
            </div>
            <p id="text-tag">Finally Here!</p>
          </div>

          <div className="submit-form__output">
            {errorMessage ? (
              <h3>{tableData}</h3>
            ) : (
              <GenerateTable data={tableData} />
            )}
          </div>
        </div>
      ) : (
        <StatusModal />
      )}
    </>
  );
}
