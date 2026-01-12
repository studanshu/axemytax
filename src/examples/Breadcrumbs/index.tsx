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
import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

interface BreadcrumbRoute {
  label: string;
  route?: string;
}

interface BreadcrumbsProps {
  routes: BreadcrumbRoute[];
  [key: string]: any;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ routes, ...rest }) => {
  return (
    <MKBox bgColor="light" borderRadius="md" py={1} px={2} width="100%">
      <MuiBreadcrumbs {...rest}>
        {routes.map(({ label, route }) =>
          route ? (
            <MKTypography
              key={label}
              {...({ component: Link as any, to: route })}
              variant="button"
              color="text"
              fontWeight="regular"
              opacity={0.8}
              sx={{
                "&:hover, &:focus": {
                  color: ({ palette: { info } }) => info.main,
                },
              }}
            >
              {label}
            </MKTypography>
          ) : (
            <MKTypography key={label} variant="button" fontWeight="regular">
              {label}
            </MKTypography>
          )
        )}
      </MuiBreadcrumbs>
    </MKBox>
  );
};

export default Breadcrumbs;
