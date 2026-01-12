/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, ReactNode, ReactElement } from "react";

// @mui material components
import Fade from "@mui/material/Fade";

// Material Kit 2 React components
import MKBox from "components/MKBox";

// Custom styles for the MKAlert
import MKAlertRoot from "components/MKAlert/MKAlertRoot";
import MKAlertCloseIcon from "components/MKAlert/MKAlertCloseIcon";

interface MKAlertProps {
  color?: 
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "light"
    | "dark"
    | "blackAlt"
    | "black75"
    | "black50"
    | "lightBlue";
  dismissible?: boolean;
  children: ReactNode;
}

function MKAlert({ color = "info", dismissible = false, children, ...rest }: MKAlertProps): ReactElement | null {
  const [alertStatus, setAlertStatus] = useState<"mount" | "fadeOut" | "unmount">("mount");

  const handleAlertStatus = () => setAlertStatus("fadeOut");

  // The base template for the alert
  const alertTemplate = (mount = true) => (
    <Fade in={mount} timeout={300}>
      <MKAlertRoot ownerState={{ color }} {...rest}>
        <MKBox
          display="flex"
          alignItems="center"
          fontSize="1rem"
          fontWeight="regular"
          color={color === "light" ? "dark" : "white"}
        >
          {children}
        </MKBox>
        {dismissible ? (
          <MKAlertCloseIcon onClick={mount ? handleAlertStatus : undefined}>&times;</MKAlertCloseIcon>
        ) : null}
      </MKAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === "mount":
      return alertTemplate();
    case alertStatus === "fadeOut":
      setTimeout(() => setAlertStatus("unmount"), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

export default MKAlert;
