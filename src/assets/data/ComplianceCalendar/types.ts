export type ComplianceCategory = "Income Tax" | "GST" | "PF/ESI/Labour" | "ROC";

export interface ComplianceDeadline {
  day: number;
  category: ComplianceCategory;
  description: string;
}

export interface MonthData {
  month: number; // 1–12
  name: string;
  deadlines: ComplianceDeadline[];
}

export interface YearData {
  year: number;
  months: MonthData[];
}

export interface ComplianceCalendarHeroJson {
  caption: string;
  title: string;
  description: string;
  image: string;
}

export interface ComplianceCalendarJsonData {
  Hero: ComplianceCalendarHeroJson;
  Calendar: YearData;
  Contact: any;
}
