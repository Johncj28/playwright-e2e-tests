import { test, expect } from "@playwright/test";

test.describe("Login functionality", () => {
  test.beforeEach("Go to login page", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await expect(page.locator("h2")).toHaveText("Make Appointment");

    await page.getByRole("link", { name: "Make Appointment" }).click();
    await expect(page.getByText("Please login to make")).toBeVisible();
  });

  test("should login with valid credentials successfully", async ({ page }) => {
    //successful login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("ThisIsNotAPassword");
    await page.getByRole("button", { name: "Login" }).click();
    //assertion a text
    await expect(page.locator("h2")).toHaveText("Make Appointment");
  });

  test("should not login with invalid credentials", async ({ page }) => {
    //failed login
    await page.getByLabel("Username").fill("John Doe");
    await page.getByLabel("Password").fill("InvalidPassword");
    await page.getByRole("button", { name: "Login" }).click();
    //assertion a text
    await expect(page.locator("#login")).toContainText( "Login failed! Please ensure the username and password are valid." );
  });
});


