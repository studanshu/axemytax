import { Chip } from "@mui/material";
import MKBox from "components/MKBox";
import {
  CATEGORY_BG_COLORS,
  CATEGORY_COLORS,
} from "assets/data/ComplianceCalendar/categoryColors";
import { ComplianceCategory } from "assets/data/ComplianceCalendar/types";
import { FC } from "react";

const CATEGORIES = Object.keys(CATEGORY_COLORS) as ComplianceCategory[];

const CategoryLegend: FC = () => (
  <MKBox display="flex" gap={2} flexWrap="wrap" mb={4}>
    {CATEGORIES.map((cat) => (
      <Chip
        key={cat}
        label={cat}
        sx={{
          bgcolor: CATEGORY_BG_COLORS[cat],
          color: CATEGORY_COLORS[cat],
          fontWeight: 700,
          fontSize: "0.8rem",
          px: 1,
        }}
      />
    ))}
  </MKBox>
);

export default CategoryLegend;
