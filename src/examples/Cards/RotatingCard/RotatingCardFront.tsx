/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { FC, ReactNode } from "react";
import Icon from "@mui/material/Icon";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

interface RotatingCardFrontProps {
  color?:
    | "primary"
    | "secondary"
    | "info"
    | "success"
    | "warning"
    | "error"
    | "dark"
    | "light"
    | "blackAlt"
    | "black75"
    | "black50"
    | "lightBlue";
  image: string;
  icon?: ReactNode;
  title: ReactNode;
  description: ReactNode;
}

const RotatingCardFront: FC<RotatingCardFrontProps> = ({
  color = "info",
  image,
  icon = "",
  title,
  description,
}) => {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignContent="center"
      borderRadius="lg"
      coloredShadow={color as any}
      width="100%"
      position="relative"
      zIndex={2}
      sx={{
        backgroundImage: ({
          palette: { gradients },
          functions: { linearGradient, rgba },
        }) => {
          const grad: any = gradients;
          return `${linearGradient(
            rgba(
              grad[color] ? grad[color].main : gradients.info.main,
              0.85
            ),
            rgba(
              grad[color] ? grad[color].main : gradients.info.main,
              0.85
            )
          )}, url(${image})`;
        },
        backgroundSize: "cover",
        backfaceVisibility: "hidden",
      }}
    >
      <MKBox py={12} px={3} textAlign="center" lineHeight={1}>
        {icon && (
          <MKTypography variant="h2" color="white" my={2}>
            {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
          </MKTypography>
        )}
        <MKTypography variant="h3" color="white" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </MKTypography>
      </MKBox>
    </MKBox>
  );
};

export default RotatingCardFront;
