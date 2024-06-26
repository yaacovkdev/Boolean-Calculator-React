import "./StatusModal.scss";
import React from "react";

export default function StatusModal() {
  function animateDots() {
    const dotAnim = document.querySelector(".dot-anim");

    //clears interval and does not look for undefined html classes.
    if(dotAnim === null) {
      clearInterval(modalDotsInterval);
      return;
    }
    const n = String(dotAnim.textContent).length;
    if (n === 3) dotAnim.textContent = ".";
    else dotAnim.textContent += ".";
  }

  const modalDotsInterval = setInterval(animateDots, 300);

  return (
    <div className="status-modal">
      <div className="status-modal__body">
        <h4>
          <span className="text">Connecting to server</span>
          <span className="dot-anim">.</span>
        </h4>
      </div>
    </div>
  );
}
