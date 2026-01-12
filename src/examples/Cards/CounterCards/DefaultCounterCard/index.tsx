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

import { FC } from "react";
import CountUp, { CountUpProps } from "react-countup";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

interface DefaultCounterCardProps extends Omit<CountUpProps, "end"> {
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
  count: number;
  title?: string;
  description?: string;
}

const DefaultCounterCard: FC<DefaultCounterCardProps> = ({
  color = "info",
  count,
  title = "",
  description = "",
  ...rest
}) => {
  return (
    <MKBox p={2} textAlign="center" lineHeight={1}>
      <MKTypography variant="h4" color={color} textGradient fontWeight="bold">
        <CountUp end={count} duration={1} {...rest} />
      </MKTypography>
      {title && (
        <MKTypography variant="body1" mt={2} mb={1}>
          {title}
        </MKTypography>
      )}
      {description && (
        <MKTypography variant="subtitle2" color="text">
          {description}
        </MKTypography>
      )}
    </MKBox>
  );
};

export default DefaultCounterCard;
