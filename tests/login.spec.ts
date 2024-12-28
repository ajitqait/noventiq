import test,
{expect} from "../base/fixtures/baseTest";
import { message } from "../data/messageData";
import { testData } from "../data/testData";

test.describe('E2E test flows', () => {

  test("login into application with valid credentials", async ({ loginPage }) => {
    await loginPage.goTo();
    await loginPage.Login(testData.username, testData.password);
    await loginPage.verifyMessageAfterLogin(message.login.postLoginHeaderText,message.login.successMessage,message.login.currentUrl)
  });
  test("login into application without providing username and password both", async ({ loginPage }) => {
    await loginPage.goTo();
    await loginPage.Login('','');
    await loginPage.verifyErrorMessage(message.login.usernameError);
  });
  test("login into application when providing password is incorrect", async ({ loginPage }) => {
    await loginPage.goTo();
    await loginPage.Login(testData.username,'');
    await loginPage.verifyErrorMessage(message.login.passwordError);
  });
  test("Verify logout functionality", async ({ loginPage }) => {
    await loginPage.goTo();
    await loginPage.Login(testData.username, testData.password);
    await loginPage.verifyMessageAfterLogin(message.login.postLoginHeaderText,message.login.successMessage,message.login.currentUrl)
    await loginPage.logout();
    await loginPage.verifyCurrentUrl(message.login.afterLogoutCurrentUrl)
    });
})


// Test Casses:

// Login Scenarios

// Verify that the logo button is visible in the top-left corner.
// Test login with valid credentials.
// Test login without entering both username and password.
// Test login with an incorrect password.
// Test login with leading spaces in the username.
// Test login with trailing spaces in the password.
// Logout Functionality
// 7. Verify the logout functionality works as expected.
// 8. Verify that accessing the URL "https://practicetestautomation.com/logged-in-successfully/" in another window after logging out redirects the user to the login page.

// UI Verification
// 9. Verify that the header text message “Test login” is visible on the Login Page.
// 10. Verify that tab navigation functions correctly, navigating to the respective sections when clicking on header tabs.