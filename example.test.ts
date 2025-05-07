import { expect, test as it } from "@playwright/test";

it.describe("Failing Use Cases for Form Controls in Playwright", () => {
  it("Correctly toggles re-styled checkboxes", async ({ page }) => {
    await page.goto("/");

    // `checkbox` is _visible_
    const checkbox = page.getByRole("checkbox", { name: "Check Me" });
    await expect(checkbox).toBeVisible();

    // But `checkbox` cannot be toggled...
    await checkbox.click();
  });
});
