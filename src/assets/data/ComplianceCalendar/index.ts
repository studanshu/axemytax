import HeroImage from "assets/images/SubServicePage/DirectTaxation/hero.png";
import { DefaultContactJson } from "assets/data/SubServicePage/DefaultContactJson";
import { data2025 } from "./2025";
import { ComplianceCalendarJsonData } from "./types";

const heroJson = {
  caption: "Stay ahead of deadlines",
  title: "Compliance Calendar",
  description:
    "A complete month-by-month reference of all statutory compliance deadlines across Income Tax, GST, PF/ESI, and ROC obligations. Never miss a due date again.",
  image: HeroImage,
};

export const ComplianceCalendar2025: ComplianceCalendarJsonData = {
  Hero: heroJson,
  Calendar: data2025,
  Contact: DefaultContactJson,
};

// To add 2026:
// 1. Create src/assets/data/ComplianceCalendar/2026.ts with YearData shape
// 2. import { data2026 } from "./2026";
// 3. export const ComplianceCalendar2026: ComplianceCalendarJsonData = { Hero: heroJson, Calendar: data2026, Contact: DefaultContactJson };
// 4. In routes.tsx: import ComplianceCalendar2026 and add a collapse entry for "2026"
// 5. In routeDict.ts: add { name: "2026", route: "/compliance-calendar/2026" } to the collapse
