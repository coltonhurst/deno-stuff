import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const router = new Router();

router.get("/test", async (ctx) => {
    const target = ctx.sendEvents();
    console.log(ctx);
    target.dispatchMessage({ hello: "world" });
    await target.close();
  });

app.use(router.routes());
await app.listen({ port: 80 });

/*
import { Application } from "https://deno.land/x/oak/mod.ts"

const app = new Application();

app.use((ctx) => {
    ctx.response.body = "Hello world!";
    console.log(ctx);
});

await app.listen("127.0.0.1:8000");
*/