import React from "react";
import "./Styles.css";
import styles from "./Styles.module.css";

function CssModule() {
  return (
    <div>
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
    </div>
  );
}

export default CssModule;
