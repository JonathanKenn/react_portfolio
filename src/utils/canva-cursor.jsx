"use client";
import useCanvasCursor from "./use-canvas-cursor";
import React from "react";
const CanvasCursor = () => {
  useCanvasCursor();
  return <canvas className="pointer-events-none fixed inset-0" id="canvas" />;
};
export default CanvasCursor;
