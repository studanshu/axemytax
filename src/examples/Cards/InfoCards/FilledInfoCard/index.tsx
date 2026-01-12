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
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

interface FilledInfoCardAction {
  type: "external" | "internal";
  route: string;
  label: string;
}

interface FilledInfoCardProps {
  variant?: "contained" | "gradient";
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
  icon: ReactNode;
  title: string;
  description: string;
  action?: FilledInfoCardAction | false;
}

const FilledInfoCard: FC<FilledInfoCardProps> = ({
  variant = "contained",
  color = "info",
  icon,
  title,
  description,
  action = false,
}) => {
  const buttonStyles = {
    width: "max-content",
    display: "flex",
    alignItems: "center",

    "& .material-icons-round": {
      fontSize: "1.125rem",
      transform: `translateX(3px)`,
      transition: "transform 0.2s cubic-bezier(0.34, 1.61, 0.7, 1.3)",
    },

    "&:hover .material-icons-round, &:focus .material-icons-round": {
      transform: `translateX(6px)`,
    },
  };

  let iconColor: any = color;

  if (variant === "gradient" && color !== "light") {
    iconColor = "white";
  } else if (variant === "gradient" && color === "light") {
    iconColor = "dark";
  }

  return (
    <MKBox
      display={{ xs: "block", md: "flex" }}
      variant={variant}
      bgColor={variant === "contained" ? "grey-100" : color}
      borderRadius="xl"
      pt={3.5}
      pb={3}
      px={3}
      height="100%"
    >
      <MKTypography
        display="block"
        variant="h4"
        color={iconColor}
        textGradient={variant === "contained"}
        mt={-0.625}
      >
        {typeof icon === "string" ? <Icon>{icon}</Icon> : icon}
      </MKTypography>
      <MKBox
        pt={{ xs: 3, md: 0 }}
        pl={{ xs: 0, md: 2 }}
        lineHeight={1}
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        flexGrow={1}
      >
        <MKTypography
          display="block"
          variant="h5"
          color={
            variant === "contained" || color === "light" ? "black75" : "white"
          }
          fontWeight="bold"
          mb={1}
        >
          {title}
        </MKTypography>
        <MKTypography
          display="block"
          variant="subtitle1"
          color={
            variant === "contained" || color === "light" ? "text" : "white"
          }
          mb={2}
        >
          {description}
        </MKTypography>
        {action && action.type === "external" ? (
          <MKTypography
            component={MuiLink}
            variant="subtitle1"
            fontWeight="regular"
            color={variant === "contained" ? color : "white"}
            sx={buttonStyles}
            {...({ href: action.route, target: "_blank", rel: "noreferrer" } as any)}
          >
            {action.label} <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        ) : null}
        {action && action.type === "internal" ? (
          <MKTypography
            component={Link}
            variant="subtitle1"
            fontWeight="regular"
            color={"info"}
            sx={buttonStyles}
            {...({ to: action.route } as any)}
          >
            {action.label} <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        ) : null}
      </MKBox>
    </MKBox>
  );
};

export default FilledInfoCard;
