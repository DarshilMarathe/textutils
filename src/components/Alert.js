import React from "react";

export default function Alert(props) {

    // FXN to capatilize first letter
    const capitalize = (str) =>{ 
        const loww = str.toLowerCase();
        return loww.charAt(0).toUpperCase()+loww.slice(1);
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">
      <strong>{capitalize(props.alert.msg)}</strong> : {props.alert.descrp}
    </div>
  );
}
