// deno run --allow-read ./reading-files.ts hello-world.ts

const filenames = Deno.args;
for (const filename of filenames) {
    const file = await Deno.open(filename);
    await Deno.copy(file, Deno.stdout);
    file.close();
}