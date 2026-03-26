import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import BusinessOutlinedIcon from "@mui/icons-material/BusinessOutlined";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { SvgIconComponent } from "@mui/icons-material";
import { ComplianceCategory } from "./types";

export const CATEGORY_ICONS: Record<ComplianceCategory, SvgIconComponent> = {
  "Income Tax": AccountBalanceOutlinedIcon,
  "GST": StorefrontOutlinedIcon,
  "PF/ESI/Labour": PeopleOutlineIcon,
  "ROC": BusinessOutlinedIcon,
};
