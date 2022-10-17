export function formatDate(date: Date): string {
  return date.toLocaleString('default', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
