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

interface VerticalTeamCardProps {
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

const VerticalTeamCard: FC<VerticalTeamCardProps> = ({
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
    <Card sx={{ mt: 3, backgroundColor: paletteAny[color || "light"].main }}>
      <Grid container flexDirection="column" alignContent="center">
        <Grid item sx={{ mt: -6 }}>
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
        <Grid item xs={12}>
          <MKBox py={8} px={2} lineHeight={1} my="auto">
            <MKTypography variant="h5" color="secondary" align="center" fontWeight="light">
              {name}
            </MKTypography>
            <MKTypography variant="subtitle2" color={position.color} mb={1} align="center">
              {position.label}
            </MKTypography>
            <MKTypography variant="subtitle1" color="black50" mb={2}>
              {description}
            </MKTypography>
            <Grid container justifyContent="center" sx={{ gap: 2 }}>
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

export default VerticalTeamCard;
