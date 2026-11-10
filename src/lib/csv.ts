// CSV pour Excel : UTF-8 avec BOM, séparateur virgule, fins de ligne CRLF (RFC 4180).
export type Cell = string | number | boolean | null | undefined;

export function csvCell(value: Cell): string {
  const text = value == null ? '' : String(value);
  return /[",\r\n]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function toCsv(header: string[], rows: Cell[][]): string {
  return '﻿' + [header, ...rows].map((row) => row.map(csvCell).join(',')).join('\r\n') + '\r\n';
}
