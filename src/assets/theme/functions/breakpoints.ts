import { useMediaQuery, useTheme } from "@mui/material";

export const IsUpLgScreen = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("lg"));
};

export const IsUpMdScreen = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("md"));
};

export const IsUpSmScreen = (): boolean => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up("sm"));
};
