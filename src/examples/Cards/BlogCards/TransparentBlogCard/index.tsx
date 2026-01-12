/**
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { FC } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

interface TransparentBlogCardProps {
  image: string;
  title: string;
  description: string;
  action: {
    type: "external" | "internal";
    route: string;
    label: string;
    color:
      | "inherit"
      | "primary"
      | "secondary"
      | "info"
      | "success"
      | "warning"
      | "error"
      | "light"
      | "dark"
      | "text"
      | "blackAlt"
      | "black75"
      | "black50"
      | "lightBlue";
  };
  roundedImage?: boolean;
}

const TransparentBlogCard: FC<TransparentBlogCardProps> = ({
  image,
  title,
  description,
  action,
  roundedImage,
}) => {
  const cardActionStyles = {
    display: "flex",
    alignItems: "center",
    width: "max-content",

    "& .material-icons, .material-icons-round,": {
      transform: `translateX(2px)`,
      transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
    },

    "&:hover .material-icons, &:focus .material-icons, &:hover .material-icons-round, &:focus .material-icons-round":
      {
        transform: `translateX(6px)`,
      },
  };

  const imageTemplate = (
    <MKBox position="relative" borderRadius="lg">
      <MKBox
        component="img"
        src={image}
        alt={title}
        borderRadius={roundedImage ? "section" : "lg"}
        shadow="md"
        width="100%"
        position="relative"
        zIndex={1}
        {...({ src: image, alt: title } as any)}
      />
      <MKBox
        borderRadius={roundedImage ? "section" : "lg"}
        shadow="md"
        width="100%"
        height="100%"
        position="absolute"
        left={0}
        top={0}
        sx={{
          backgroundImage: `url(${image})`,
          transform: "scale(0.94)",
          filter: "blur(12px)",
          backgroundSize: "cover",
        }}
      />
    </MKBox>
  );

  return (
    <Card
      sx={{
        background: "transparent",
        boxShadow: "none",
        overflow: "visible",
      }}
    >
      {action.type === "internal" ? (
        <Link to={action.route}>{imageTemplate}</Link>
      ) : (
        <MuiLink href={action.route} target="_blank" rel="noreferrer">
          {imageTemplate}
        </MuiLink>
      )}
      <MKBox pt={2} pb={3}>
        {action.type === "internal" ? (
          <Link to={action.route} style={cardActionStyles}>
            <MKTypography variant="h5" gutterBottom>
              {title}
            </MKTypography>
          </Link>
        ) : (
          <MuiLink
            href={action.route}
            target="_blank"
            rel="noreferrer"
            sx={cardActionStyles}
          >
            <MKTypography variant="h5" gutterBottom>
              {title}
            </MKTypography>
          </MuiLink>
        )}
        <MKTypography variant="subtitle1" component="p" color="text" mb={3}>
          {description}
        </MKTypography>
        {action.type === "internal" ? (
          <MKTypography
            component={Link}
            variant="subtitle1"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
            {...({ to: action.route } as any)}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        ) : (
          <MKTypography
            component={MuiLink}
            variant="subtitle1"
            fontWeight="regular"
            color={action.color}
            textTransform="capitalize"
            sx={cardActionStyles}
            {...({ href: action.route, target: "_blank", rel: "noreferrer" } as any)}
          >
            {action.label}
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </MKTypography>
        )}
      </MKBox>
    </Card>
  );
};

export default TransparentBlogCard;
