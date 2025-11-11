import { Elysia } from "elysia";
import { messageRoutes } from "./presentation/routes/messages";

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .use(messageRoutes)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
