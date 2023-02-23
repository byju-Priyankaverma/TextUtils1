import React from "react";

export default function Alert(props) {
  const capitalise = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {props.alert &&
      <div
        className="alert alert-warning alert-dismissible fade show"
        role="alert"
      >
        <strong>{capitalise(props.alert.type)}:   </strong>
        {props.alert.msg}
      </div>}
    </div>
  );
}

// There is commulative layout shift in the alert so we give it a particular height
