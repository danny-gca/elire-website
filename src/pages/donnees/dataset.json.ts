import type { APIRoute } from 'astro';
import { dataset } from '../../lib/donnees';

// Le fichier de l'app tel quel, pour qui veut tout relire ou recalculer.
export const GET: APIRoute = () => new Response(JSON.stringify(dataset), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
