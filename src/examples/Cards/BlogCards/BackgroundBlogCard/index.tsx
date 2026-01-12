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
import Icon from "@mui/material/Icon";
import MuiLink from "@mui/material/Link";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

interface BackgroundBlogCardProps {
  image: string;
  title: string;
  description: string;
  action: {
    type: "external" | "internal";
    route: string;
    label: string;
  };
}

const BackgroundBlogCard: FC<BackgroundBlogCardProps> = ({
  image,
  title,
  description,
  action,
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

  return (
    <Card
      sx={{
        backgroundImage: ({
          palette: { black },
          functions: { linearGradient, rgba },
        }) =>
          `${linearGradient(rgba(black.main, 0.5), rgba(black.main, 0.5))}, url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <MKBox p={3}>
        <MKBox
          minHeight="20.625rem"
          my="auto"
          py={3}
          display="flex"
          flexDirection="column"
          justifyContent="space-around"
          flexGrow={1}
        >
          <MKTypography
            variant="h5"
            color="white"
            mb={1}
            sx={({ breakpoints }) => ({
              [breakpoints.down("md")]: {
                fontSize: "2rem",
              },
            })}
          >
            {title}
          </MKTypography>
          <MKTypography variant="body1" color="white" my={3}>
            {description}
          </MKTypography>
          {action.type === "internal" ? (
            <MKTypography
              component={Link}
              variant="subtitle1"
              fontWeight="regular"
              color="white"
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
              color="white"
              textTransform="capitalize"
              sx={cardActionStyles}
              {...({ href: action.route, target: "_blank", rel: "noreferrer" } as any)}
            >
              {action.label}
              <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
            </MKTypography>
          )}
        </MKBox>
      </MKBox>
    </Card>
  );
};

export default BackgroundBlogCard;
