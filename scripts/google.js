export default async (page, pData) => {
  await page.goto("https://www.google.com/?gws_rd=ssl");
  await page.click('[aria-label="Найти"]');
  await page.fill('[aria-label="Найти"]', pData.searchString);
  await Promise.all([
    page.waitForNavigation(),
    page.press('[aria-label="Найти"]', "Enter"),
  ]);
  await Promise.all([
    page.waitForNavigation(),
    page.click("text=Nillkizz - YouTube"),
  ]);
};
