export function Formatter(percentage) {
  if (typeof percentage !== "number") {
    throw new Error("Percentage must be a number");
  }
  const value = percentage.toFixed(1);
  return `${value}%`;
}
