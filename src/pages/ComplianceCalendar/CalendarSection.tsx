import {
  Chip,
  Container,
  Divider,
  Grid,
  Paper,
  Tab,
  Tabs,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CategoryIcon from "@mui/icons-material/Category";
import {
  CATEGORY_BG_COLORS,
  CATEGORY_COLORS,
} from "assets/data/ComplianceCalendar/categoryColors";
import { CATEGORY_ICONS } from "assets/data/ComplianceCalendar/categoryIcons";
import { ComplianceCategory, ComplianceDeadline, YearData } from "assets/data/ComplianceCalendar/types";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import SectionHeader from "components/Custom/SectionHeader";
import { FC, useState } from "react";
import CategoryLegend from "./CategoryLegend";

interface CalendarSectionProps {
  calendarData: YearData;
}

const MONTH_LABELS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const CATEGORIES: ComplianceCategory[] = ["Income Tax", "GST", "PF/ESI/Labour", "ROC"];

function toOrdinal(day: number): string {
  const suffix =
    day >= 11 && day <= 13
      ? "th"
      : day % 10 === 1
      ? "st"
      : day % 10 === 2
      ? "nd"
      : day % 10 === 3
      ? "rd"
      : "th";
  return `${day}${suffix}`;
}

function getDayOfWeek(year: number, month: number, day: number): string {
  return new Date(year, month - 1, day).toLocaleDateString("en-US", { weekday: "long" });
}

interface DeadlineCardProps {
  item: ComplianceDeadline;
  year: number;
  month: number;
}

const DeadlineCard: FC<DeadlineCardProps> = ({ item, year, month }) => {
  const Icon = CATEGORY_ICONS[item.category];
  const color = CATEGORY_COLORS[item.category];
  const bgColor = CATEGORY_BG_COLORS[item.category];
  const dayOfWeek = getDayOfWeek(year, month, item.day);

  return (
    <Paper
      elevation={2}
      sx={{
        p: 3,
        borderRadius: 2,
        borderLeft: `4px solid ${color}`,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 1,
        transition: "box-shadow 0.2s",
        "&:hover": { boxShadow: 4 },
      }}
    >
      <MKBox display="flex" justifyContent="space-between" alignItems="flex-start">
        <MKBox display="flex" alignItems="center" gap={1}>
          <Icon sx={{ color, fontSize: "1.25rem" }} />
          <MKTypography variant="h5" sx={{ color, fontWeight: 700 }}>
            {toOrdinal(item.day)}
          </MKTypography>
        </MKBox>
        <Chip
          size="small"
          label={item.category}
          sx={{
            bgcolor: bgColor,
            color,
            fontWeight: 600,
            fontSize: "0.7rem",
            ml: 1,
            flexShrink: 0,
          }}
        />
      </MKBox>
      <MKTypography variant="caption" color="text" sx={{ fontStyle: "italic" }}>
        {dayOfWeek}
      </MKTypography>
      <MKTypography variant="body2" color="text">
        {item.description}
      </MKTypography>
    </Paper>
  );
};

const CalendarSection: FC<CalendarSectionProps> = ({ calendarData }) => {
  const currentMonth = new Date().getMonth() + 1;
  const [viewMode, setViewMode] = useState<"month" | "category">("month");
  const [selectedMonth, setSelectedMonth] = useState<number>(
    Math.min(Math.max(currentMonth, 1), 12)
  );
  const [selectedCategory, setSelectedCategory] = useState<ComplianceCategory>("Income Tax");

  // Month view data
  const activeMonthData = calendarData.months.find((m) => m.month === selectedMonth);
  const monthDeadlines = activeMonthData
    ? [...activeMonthData.deadlines].sort((a, b) => a.day - b.day)
    : [];

  // Category view data: all months that have deadlines for selected category, sorted by month
  const categoryMonths = calendarData.months
    .map((m) => ({
      month: m.month,
      name: m.name,
      deadlines: [...m.deadlines]
        .filter((d) => d.category === selectedCategory)
        .sort((a, b) => a.day - b.day),
    }))
    .filter((m) => m.deadlines.length > 0);

  return (
    <MKBox component="section" py={8} sx={{ bgcolor: "grey.100" }}>
      <Container>
        <MKBox px={{ xs: 2, md: 4 }}>
          <MKBox
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            gap={2}
            mb={3}
          >
            <SectionHeader
              caption={`${calendarData.year} Deadlines`}
              title="Statutory Compliance Calendar"
              variant="h3"
              color="black"
            />
            <ToggleButtonGroup
              value={viewMode}
              exclusive
              onChange={(_e, val) => val && setViewMode(val)}
              size="small"
              sx={{ flexShrink: 0 }}
            >
              <ToggleButton value="month" sx={{ gap: 0.5, px: 2 }}>
                <CalendarMonthIcon fontSize="small" />
                Month
              </ToggleButton>
              <ToggleButton value="category" sx={{ gap: 0.5, px: 2 }}>
                <CategoryIcon fontSize="small" />
                Category
              </ToggleButton>
            </ToggleButtonGroup>
          </MKBox>

          <CategoryLegend />

          {viewMode === "month" ? (
            <>
              <MKBox sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
                <Tabs
                  value={selectedMonth - 1}
                  onChange={(_e, val) => setSelectedMonth(val + 1)}
                  variant="scrollable"
                  scrollButtons="auto"
                  indicatorColor="primary"
                  textColor="primary"
                  sx={{
                    "& .MuiTab-root": {
                      fontWeight: 600,
                      minWidth: 64,
                      fontSize: "0.875rem",
                    },
                  }}
                >
                  {MONTH_LABELS.map((label) => (
                    <Tab key={label} label={label} />
                  ))}
                </Tabs>
              </MKBox>

              {monthDeadlines.length === 0 ? (
                <MKBox textAlign="center" py={8}>
                  <MKTypography variant="h6" color="text">
                    No deadlines recorded for this month.
                  </MKTypography>
                </MKBox>
              ) : (
                <Grid container spacing={3}>
                  {monthDeadlines.map((item, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={`${item.day}-${item.category}-${idx}`}>
                      <DeadlineCard item={item} year={calendarData.year} month={selectedMonth} />
                    </Grid>
                  ))}
                </Grid>
              )}
            </>
          ) : (
            <>
              <MKBox sx={{ borderBottom: 1, borderColor: "divider", mb: 4 }}>
                <Tabs
                  value={CATEGORIES.indexOf(selectedCategory)}
                  onChange={(_e, val) => setSelectedCategory(CATEGORIES[val])}
                  variant="scrollable"
                  scrollButtons="auto"
                  indicatorColor="primary"
                  textColor="primary"
                  sx={{
                    "& .MuiTab-root": {
                      fontWeight: 600,
                      fontSize: "0.875rem",
                    },
                  }}
                >
                  {CATEGORIES.map((cat) => {
                    const Icon = CATEGORY_ICONS[cat];
                    return (
                      <Tab
                        key={cat}
                        label={cat}
                        icon={<Icon fontSize="small" sx={{ color: CATEGORY_COLORS[cat] }} />}
                        iconPosition="start"
                        sx={{ minHeight: 48 }}
                      />
                    );
                  })}
                </Tabs>
              </MKBox>

              {categoryMonths.length === 0 ? (
                <MKBox textAlign="center" py={8}>
                  <MKTypography variant="h6" color="text">
                    No deadlines found for {selectedCategory}.
                  </MKTypography>
                </MKBox>
              ) : (
                <MKBox display="flex" flexDirection="column" gap={4}>
                  {categoryMonths.map(({ month, deadlines }) => (
                    <MKBox key={month}>
                      <MKBox display="flex" alignItems="center" gap={2} mb={2}>
                        <MKTypography variant="h5" color="black" sx={{ fontWeight: 600, whiteSpace: "nowrap" }}>
                          {MONTH_NAMES[month - 1]}
                        </MKTypography>
                        <Divider sx={{ flex: 1 }} />
                      </MKBox>
                      <Grid container spacing={3}>
                        {deadlines.map((item, idx) => (
                          <Grid item xs={12} sm={6} md={4} key={`${month}-${item.day}-${idx}`}>
                            <DeadlineCard item={item} year={calendarData.year} month={month} />
                          </Grid>
                        ))}
                      </Grid>
                    </MKBox>
                  ))}
                </MKBox>
              )}
            </>
          )}
        </MKBox>
      </Container>
    </MKBox>
  );
};

export default CalendarSection;
