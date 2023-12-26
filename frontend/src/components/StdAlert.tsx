import { Alert } from "react-bootstrap";
import { StdAlertProps } from "../helpers/types";
import { useState } from "react";
const StdAlert = ({ show=true, title="Error!", message = "Something went Wrong!", type }: StdAlertProps) => {
  const [isShow, setShow] = useState(true);
  if (show) {
    return (
      <Alert variant={type} className="position-absolute col-3" style={{top: "10px", right: "10px"}} dismissible>
        <Alert.Heading className="h6">{title}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }

  return <></>;
};

export default StdAlert;
