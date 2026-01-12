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
import { Link } from "react-router-dom";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

interface RotatingCardBackAction {
  type: "external" | "internal";
  route: string;
  label: string;
}

interface RotatingCardBackProps {
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
  title: ReactNode;
  description: ReactNode;
  action: RotatingCardBackAction | boolean;
}

const RotatingCardBack: FC<RotatingCardBackProps> = ({
  color = "info",
  image,
  title,
  description,
  action,
}) => {
  return (
    <MKBox
      display="flex"
      justifyContent="center"
      alignItems="center"
      borderRadius="lg"
      coloredShadow={color as any}
      position="absolute"
      width="100%"
      height="100%"
      top={0}
      left={0}
      zIndex={5}
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
        transform: "rotateY(180deg)",
      }}
    >
      <MKBox pt={12} pb={2} px={2} textAlign="center" lineHeight={1}>
        <MKTypography variant="h3" color="white" gutterBottom>
          {title}
        </MKTypography>
        <MKTypography variant="body2" color="white" opacity={0.8}>
          {description}
        </MKTypography>
        {action && typeof action !== "boolean" && (
          <MKBox width="50%" mt={4} mb={2} mx="auto">
            {action.type === "external" ? (
              <MKButton
                component={MuiLink}
                color="white"
                size="small"
                fullWidth
                {...({ href: action.route, target: "_blank", rel: "noreferrer" } as any)}
              >
                {action.label}
              </MKButton>
            ) : (
              <MKButton component={Link} color="white" size="small" fullWidth {...({ to: action.route } as any)}>
                {action.label}
              </MKButton>
            )}
          </MKBox>
        )}
      </MKBox>
    </MKBox>
  );
};

export default RotatingCardBack;
