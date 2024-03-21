import { PrismaClient } from './generated/client/deno/edge.ts'
import { Application, Router } from "jsr:@oak/oak@14";

import { load } from "https://deno.land/std@0.220.1/dotenv/mod.ts";

const env = await load();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: env.DATABASE_URL,
    },
  },
});

const app = new Application();
const router = new Router();

router
  .get('/', (context) => {
    context.response.body = "Bem vindo a API do Crachá"
  })
  .get('/visitante', (context) => {})