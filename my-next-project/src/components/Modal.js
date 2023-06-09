import React from "react";
import CircularStatic from "./Circleloading";

const Modal = ({ open, onClose, loading, result }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="overlay">
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalContainer"
      >
        <div className="modalRight">
          <p className="closeBtn" onClick={onClose}>
            X
          </p>
          <div className="content">
            <h1>Here are your recommendations</h1>
            {loading && (
              <div>
                <h3>Looking for your cities 💡 </h3>
                <CircularStatic />
              </div>
            )}
            {result && <div dangerouslySetInnerHTML={{ __html: result }} />}
          </div>
          <div className="btnContainer">
            <button className="btnPrimary" onClick={onClose}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
