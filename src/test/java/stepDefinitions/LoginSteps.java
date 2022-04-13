package stepDefinitions;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class LoginSteps {
	
	WebDriver driver = LoginBaseClass.driver;

	@Given("I have opened the application in browser")
	public void i_have_opened_the_application_in_browser() throws InterruptedException {
	
		driver.get("https://www.simplilearn.com");
		Thread.sleep(5000);
	}

	@When("I click on the login link")
	public void i_click_on_the_login_link() {
		
		WebElement LoginLink = driver.findElement(By.className("login")); //info between opening and closing anchor tags: <a> linkText </a>                   
		LoginLink.click();
	}

	@When("I enter a username")
	public void i_enter_a_username() {
		
		WebElement UserName = driver.findElement(By.name("user_login"));
		UserName.sendKeys("cassidyamason@gmail.com");
	}

	@When("I enter a password")
	public void i_enter_a_password() {
		
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys("Watermelon#1");
	}

	@When("I click on the login button")
	public void i_click_on_the_login_button() {
	    
		WebElement loginButton = driver.findElement(By.name("btn_login"));
		loginButton.click();
	}

	@Then("I should have landed on the home page")
	public void i_should_have_landed_on_the_home_page() {
	    
		System.out.println("I am on the home page.");
	}

	@When("I enter a username {string}")
	public void i_enter_a_username(String UserNameVal) {
	    
		WebElement UserName = driver.findElement(By.name("user_login"));
		UserName.sendKeys(UserNameVal);
	}

	@When("I enter a password {string}")
	public void i_enter_a_password(String PasswordVal) {
	   
		WebElement Password = driver.findElement(By.id("password"));
		Password.sendKeys(PasswordVal);
	}
	
	@Then("I should get the error message as {string}")
	public void i_should_get_the_error_message_as(String ExpectedMessage) {
		
		WebElement ErrorMessage = driver.findElement(By.id("msg_box"));
		String ActualMessage = ErrorMessage.getText();
		Assert.assertEquals(ExpectedMessage, ActualMessage);
	    		
	}

	
	
}
