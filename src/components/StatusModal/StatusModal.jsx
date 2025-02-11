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
        <div className="status-modal__content">
          <h4>
            <span className="status-modal__text">Connecting to server</span>
            <span className="dot-anim">.</span>
          </h4>
          <h6>
            <p>If you see this message restart this page after 1 or 2 minutes please.</p>
          </h6>
        </div>
      </div>
    </div>
  );
}
