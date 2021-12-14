export default async (page, pData) => {
  await page.goto("https://ya.ru/");
  await page.click('[aria-label="Запрос"]');
  await page.fill('[aria-label="Запрос"]', pData.searchString);
  await Promise.all([
    page.waitForNavigation(),
    page.press('[aria-label="Запрос"]', "Enter"),
  ]);
  const [page1] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("text=Nillkizz · GitHub"),
  ]);
};
