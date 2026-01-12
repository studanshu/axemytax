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
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { LinkedIn, MailOutlined } from "@mui/icons-material";
import theme from "assets/theme";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

interface HorizontalTeamCardProps {
  image: string;
  name: string;
  color?: string;
  position: {
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
    label: string;
  };
  description: string;
  mail?: string;
  linkedIn?: string;
}

const HorizontalTeamCard: FC<HorizontalTeamCardProps> = ({
  image,
  name,
  position,
  description,
  color,
  mail,
  linkedIn,
}) => {
  const { palette } = theme;
  const paletteAny: any = palette;
  return (
    <Card
      sx={{
        mt: 3,
        backgroundColor: color === undefined ? paletteAny["light"].main : paletteAny[color].main,
      }}
    >
      <Grid container>
        <Grid item xs={12} md={6} lg={4} sx={{ mt: -6 }}>
          <MKBox width="100%" pt={2} pb={1} px={2}>
            <MKBox
              component="img"
              width="100%"
              borderRadius="md"
              shadow="lg"
              {...({ src: image, alt: name } as any)}
            />
          </MKBox>
        </Grid>
        <Grid item xs={12} md={6} lg={8} sx={{ my: "auto" }}>
          <MKBox pt={{ xs: 1, lg: 2.5 }} pb={2.5} pr={4} pl={{ xs: 4, lg: 1 }} lineHeight={1}>
            <MKTypography variant="h5">{name}</MKTypography>
            <MKTypography variant="subtitle2" color={position.color} mb={1}>
              {position.label}
            </MKTypography>
            <MKTypography variant="subtitle1" color="text">
              {description}
            </MKTypography>
            <Grid container justifyContent="flex-end" sx={{ gap: 2, pt: { xs: 1, lg: 2.5 } }}>
              {mail && (
                <Grid item>
                  <MKTypography component="a" color="primary" {...({ href: mail } as any)}>
                    <MailOutlined />
                  </MKTypography>
                </Grid>
              )}
              {linkedIn && (
                <Grid>
                  <MKTypography component="a" color="secondary" {...({ href: linkedIn } as any)}>
                    <LinkedIn />
                  </MKTypography>
                </Grid>
              )}
            </Grid>
          </MKBox>
        </Grid>
      </Grid>
    </Card>
  );
};

export default HorizontalTeamCard;
