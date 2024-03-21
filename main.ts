import { PrismaClient } from "./generated/client/deno/edge.ts";
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
  .get("/", (context) => {
    context.response.body = "Bem vindo a API do Crachá";
  })
  .get("/visitantes", async (context) => {
    const visitantes = await prisma.visitante.findMany();
    context.response.body = visitantes;
  })
  .get("/visitante/:id", async (context) => {
    const { id } = context.params;
    const visitante = await prisma.visitante.findUnique({
      where: {
        id: Number(id),
      },
    });
    context.response.body = visitante;
  })
  .get("/visitante-nome/:nome", async (context) => {
    const { nome } = context.params;
    const visitantes = await prisma.visitante.findMany({
      where: {
        AND: {
          nome: {
            contains: nome.toUpperCase(),
          },
          printed: false,
        },
      },
    });
    context.response.body = visitantes;
  })
  .patch("/visitante/:id", async (context) => {
    const { nome, empresa, email } = await context.request.body.json();
    const { id } = context.params;
    const visitante = await prisma.visitante.update({
      where: {
        id: Number(id),
      },
      data: {
        nome: nome.toUpperCase(),
        empresa: empresa,
        email: email,
        printed: true,
      },
    });
    context.response.body = ["atualizado", visitante];
  })
  .post("/visitante", async (context) => {
    const { nome, empresa, email } = await context.request.body.json();
    const result = await prisma.visitante.create({
      data: {
        nome: nome,
        empresa: empresa,
        email: email,
        printed: true,
      },
    });
    context.response.body = result;
  })
  .delete("/visitante/:id", async (context) => {
    const { id } = context.params;
    const visitante = await prisma.visitante.delete({
      where: {
        id: Number(id),
      },
    });
    context.response.body = visitante;
  });

app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server listening on: http://localhost:8000`);
await app.listen({ port: 8000 });
