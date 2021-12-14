import dotenv from "dotenv";
import config from "config";
import { chromium } from "playwright";

import Dolphin from "./modules/dolphin_anty/dolphin_anty.js";

dotenv.config();

const dolphin = new Dolphin({ profile_name: "ydirect1" });
dolphin.once("profile_started", main);

async function main({ port, wsEndpoint }) {
  const browser = await chromium.connectOverCDP(
    `ws://127.0.0.1:${port}${wsEndpoint}`
  );

  const pagesScriptConfig = config.get("Example");

  pagesScriptConfig.pages.forEach(async (p) => {
    const { default: script } = await import(`./scripts/${p.script}.js`);
    const page = await browser.newPage();
    script(page, p);
  });
}
