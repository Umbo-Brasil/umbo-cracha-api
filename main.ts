import { PrismaClient } from "./generated/client/deno/edge.ts";
import { Application, Router } from "https://deno.land/x/oak@14.2.0/mod.ts";
import { oakCors } from "https://deno.land/x/cors@v1.2.2/mod.ts";
import { load } from "https://deno.land/std@0.220.1/dotenv/mod.ts";

import { WebSocketClient, WebSocketServer } from "https://deno.land/x/websocket@v0.1.4/mod.ts";

const env = await load();
let dataForWebSocket: any;
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
    const { nome, empresa, email, printed } = await context.request.body.json();
    const { id } = context.params;
    const visitante = await prisma.visitante.update({
      where: {
        id: Number(id),
      },
      data: {
        nome: nome.toUpperCase(),
        empresa: empresa,
        email: email,
        printed: Boolean(printed),
      },
    });
    dataForWebSocket = { nome: visitante.nome, empresa: visitante.empresa };
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
    dataForWebSocket = { nome: result.nome, empresa: result.empresa };
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
  })

const wss = new WebSocketServer(8080);
wss.on("connection", function (ws: WebSocketClient) {
  console.log("Client connected")
  setInterval(() => {
    if (dataForWebSocket) {  // Check if data is available
      console.log(dataForWebSocket);
      try {
        ws.send(JSON.stringify(dataForWebSocket));
      } catch (error) {
        console.error("Error sending WebSocket message:", error);
      }
    }
    dataForWebSocket = null;
  }, 2000);
});

app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

console.log(`Server listening on: http://localhost:8000`);
await app.listen({ port: 8000 });
