import { useMediaQuery } from "@mui/material";
import theme from "..";
import breakpoints from "../base/breakpoints";

export function IsUpXsScreen() {
  return useMediaQuery(theme.breakpoints.up(breakpoints.values.xs));
}

export function IsUpSmScreen() {
  return useMediaQuery(theme.breakpoints.up(breakpoints.values.sm));
}

export function IsUpMdScreen() {
  return useMediaQuery(theme.breakpoints.up(breakpoints.values.md));
}

export function IsUpLgScreen() {
  return useMediaQuery(theme.breakpoints.up(breakpoints.values.lg));
}

export function IsUpXlScreen() {
  return useMediaQuery(theme.breakpoints.up(breakpoints.values.xl));
}

export function IsUpXxlScreen() {
  return useMediaQuery(theme.breakpoints.up(breakpoints.values.xxl));
}

export function IsDownXsScreen() {
  return useMediaQuery(theme.breakpoints.down(breakpoints.values.xs));
}

export function IsDownSmScreen() {
  return useMediaQuery(theme.breakpoints.down(breakpoints.values.sm));
}

export function IsDownMdScreen() {
  return useMediaQuery(theme.breakpoints.down(breakpoints.values.md));
}

export function IsDownLgScreen() {
  return useMediaQuery(theme.breakpoints.down(breakpoints.values.lg));
}

export function IsDownXlScreen() {
  return useMediaQuery(theme.breakpoints.down(breakpoints.values.xl));
}

export function IsDownXxlScreen() {
  return useMediaQuery(theme.breakpoints.down(breakpoints.values.xxl));
}
