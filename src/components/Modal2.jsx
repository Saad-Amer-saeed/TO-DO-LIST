import React from "react";
import { createPortal } from "react-dom";
import { ReactDOM } from "react";
import { useDispatch } from "react-redux";
import { handleCancelAddProject } from "./handelSlice.jsx";

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export default function Modal2({ open, handelclose }) {
  const dispatch = useDispatch();
  if (!open) return null;

  return createPortal(
    <div onClick={() => handelclose(false)} style={OVERLAY_STYLES}>
      <div style={MODAL_STYLES}>
        Are You Sure ?
        <div>
          <button
            onClick={() => dispatch(handleCancelAddProject())}
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal2-root")
  );
}
