import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("portfolio source contains project routes and no placeholder hrefs", async () => {
  const [home, sidebar, projects, config] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("app/SiteSidebar.tsx", root), "utf8"),
    readFile(new URL("app/projects-data.ts", root), "utf8"),
    readFile(new URL("app/site-config.ts", root), "utf8"),
  ]);
  assert.match(home, /View selected work/);
  assert.doesNotMatch(`${home}\n${sidebar}`, /href=["']#["']/);
  assert.match(projects, /Ozon Price Tracker/);
  assert.match(projects, /UniAssist/);
  assert.match(projects, /Ru2En Interpreter/);
  assert.match(config, /links: \{ github: undefined/);
});
