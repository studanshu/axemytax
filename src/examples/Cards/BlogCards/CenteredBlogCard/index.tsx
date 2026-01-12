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

import { FC } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";

interface CenteredBlogCardProps {
  image: string;
  title: string;
  description: string;
  action: {
    type: "external" | "internal";
    route: string;
    label: string;
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
    variant?: "text" | "contained" | "outlined" | "gradient";
  };
}

const CenteredBlogCard: FC<CenteredBlogCardProps> = ({
  image,
  title,
  description,
  action,
}) => {
  return (
    <Card sx={{ height: "100%" }}>
      <MKBox position="relative" borderRadius="lg" mx={2} mt={-3}>
        <MKBox
          component="img"
          borderRadius="lg"
          width="100%"
          position="relative"
          zIndex={1}
          {...({ src: image, alt: title } as any)}
        />
        <MKBox
          borderRadius="lg"
          shadow="md"
          width="100%"
          height="100%"
          position="absolute"
          left={0}
          top={0}
          sx={{
            backgroundImage: `url(${image})`,
            width: "100%",
            height: "auto",
            transform: "scale(0.94)",
            filter: "blur(12px)",
            backgroundSize: "cover",
          }}
        />
      </MKBox>
      <MKBox
        p={3}
        mt={-1}
        textAlign="center"
        display="flex"
        flexDirection="column"
        justifyContent="space-around"
        flexGrow={1}
      >
        <MKTypography display="inline" variant="h5" color="black75">
          {title}
        </MKTypography>
        <MKBox mt={1} mb={3}>
          <MKTypography variant="subtitle1" component="p" color="black50">
            {description}
          </MKTypography>
        </MKBox>
        {action.type === "external" ? (
          <MKButton
            component={MuiLink}
            variant={action.variant ? action.variant : "gradient"}
            size="small"
            color={(action.color as any) || "dark"}
            {...({ href: action.route, target: "_blank", rel: "noreferrer" } as any)}
          >
            {action.label}
          </MKButton>
        ) : (
          <MKButton
            component={Link}
            variant={action.variant ? action.variant : "gradient"}
            size="small"
            color={(action.color as any) || "dark"}
            {...({ to: action.route } as any)}
          >
            {action.label}
          </MKButton>
        )}
      </MKBox>
    </Card>
  );
};

export default CenteredBlogCard;
