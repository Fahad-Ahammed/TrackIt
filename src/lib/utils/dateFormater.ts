// Function to format a given date into a "DD/MM/YYYY" format
export function formatDate(date: Date | string): string {
  const d = new Date(date); // Convert the input into a Date object
  return d.toLocaleDateString("en-GB", {
    day: "2-digit", // Format day as two digits
    month: "2-digit", // Format month as two digits
    year: "numeric", // Format year as four digits
  });
}
