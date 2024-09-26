#!/usr/bin/env node
import fs from ("fs");

const relativePath = (a) => join(dirname(fileURLToPath(import.meta.url)), a);

const dbPath = relativePath + "/.nosana/nosana_db.json";
var db = JSON.parse(fs.readFileSync(dbPath, "utf8"));

db.resources.volumes[
  "https://pub-5bc58981af9f42659ff8ada57bfea92c.r2.dev/controlnet"
] = db.resources.volumes["https://safetensor.sogni.ai/controlnets"];
db.resources.volumes[
  "https://pub-5bc58981af9f42659ff8ada57bfea92c.r2.dev/Sogni%20Supported%20SD1.5-https://pub-5bc58981af9f42659ff8ada57bfea92c.r2.dev/Sogni%20Supported%20SDXL-https://safetensor.sogni.ai/Sogni+Supported+SD1.5-https://safetensor.sogni.ai/Sogni+Supported+SDXL"
] =
  db.resources.volumes[
    "https://safetensor.sogni.ai/Sogni+Supported+SD1.5-https://safetensor.sogni.ai/Sogni+Supported+SDXL"
  ];

fs.writeFileSync(dbPath, JSON.stringify(db, null, 2), "utf8");
