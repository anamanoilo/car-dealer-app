import { Year } from "./constants";

export const generateModelYearsList = () => {
  const currentYear = new Date().getFullYear();
  const startYear = Year.START;
  return Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
};
