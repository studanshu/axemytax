import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

interface OwnerState {
  color?: string;
  textTransform?: string | false;
  verticalAlign?: string;
  fontWeight?: string | false;
  opacity?: number;
  textGradient?: boolean;
  letterSpacing?: number;
}

export default styled(Typography, {
  shouldForwardProp: (prop) => prop !== "ownerState",
})<{ ownerState: OwnerState }>(({ theme, ownerState }) => {
  const { palette, typography, functions } = theme;
  const {
    color,
    textTransform,
    verticalAlign,
    fontWeight,
    opacity,
    textGradient,
    letterSpacing,
  } = ownerState;

  const { gradients, transparent } = palette;
  const {
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
  } = typography;
  const { linearGradient } = functions;

  // fontWeight styles
  const fontWeights: Record<string, any> = {
    lighter: 300,
    light: fontWeightLight,
    regular: fontWeightRegular,
    medium: fontWeightMedium,
    bold: fontWeightBold,
  };

  // styles for the typography with textGradient={true}
  const gradientStyles = () => ({
    backgroundImage:
      color !== "inherit" &&
      color !== "text" &&
      color !== "white" &&
      (gradients as any)[color!]
        ? linearGradient((gradients as any)[color!].main, (gradients as any)[color!].state)
        : linearGradient(gradients.dark.main, gradients.dark.state),
    display: "inline-block",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
    position: "relative" as const,
    zIndex: 1,
  });

  // color value
  const colorValue =
    color === "inherit" || !(palette as any)[color!] ? "inherit" : (palette as any)[color!].main;

  const letterSpacingValue =
    letterSpacing && typography.fontSize
      ? `${letterSpacing * parseFloat(String(typography.fontSize))}px`
      : undefined;

  return {
    opacity,
    textTransform,
    verticalAlign,
    textDecoration: "none",
    color: colorValue,
    letterSpacing: letterSpacingValue,
    fontWeight: fontWeights[fontWeight as string] && fontWeights[fontWeight as string],
    ...(textGradient && gradientStyles()),
  } as any;
});
