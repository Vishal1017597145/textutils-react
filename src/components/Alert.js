import React from "react";

export default function Alert(props) {
  let capitailze = (str) => {
    str = str.toLowerCase();
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
  };
  return (
    <div style={{height: 30}}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
          <strong>{capitailze(props.alert.type)}</strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}
