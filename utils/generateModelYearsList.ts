export const generateModelYearsList = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2015;
  return Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
};
