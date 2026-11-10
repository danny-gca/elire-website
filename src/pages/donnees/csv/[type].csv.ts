import type { APIRoute, GetStaticPaths } from 'astro';
import { toCsv } from '../../../lib/csv';
import { EXPORTS } from '../../../lib/exports';

export const getStaticPaths = (() => Object.keys(EXPORTS).map((type) => ({ params: { type } }))) satisfies GetStaticPaths;

export const GET: APIRoute = ({ params }) => {
  const table = EXPORTS[params.type ?? ''];
  if (!table) {
    return new Response(null, { status: 404 });
  }
  return new Response(toCsv(table.header, table.rows()), { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
