// deno run --allow-net=example.com ./http-requests.ts https://example.com

const url = Deno.args[0];
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);