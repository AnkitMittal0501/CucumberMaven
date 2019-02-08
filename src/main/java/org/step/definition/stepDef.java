package org.step.definition;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
 

public class stepDef 

{
	public WebDriver driver;
	String username, password;
	List<List<String>> list;
	@Given("^Test data available for test\\.$")
	public void test_data(DataTable userdetails) throws Throwable {
	      
		 list=userdetails.raw();
		 for(int i=0 ;i<list.size();i++)
		 {
			 System.out.println(list.get(i).toString());
		 }
	}

	@When("^SigUp page display$")
	public void sigup_page_display() throws Throwable {
	     driver= new ChromeDriver();
	    driver.get("http://ops.lkqa03.com");
	   
	}

	@Then("^Enter Valid Test Data$")
	public void enter_Valid_Test_Data() throws Throwable {
		
		
	  driver.findElement(By.id("email")).sendKeys(list.get(0).get(1).toString());
	  driver.findElement(By.id("password")).sendKeys(list.get(1).get(1).toString());
	}

	@Then("^Click on SignUp$")
	public void click_on_SignUp() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	  
	}

	@Then("^Click on SignOut$")
	public void click_on_SignOut() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^Close Browser$")
	public void close_Browser() throws Throwable {
	     System.out.println("Test Environment Terminated");
	     if (driver!=null)
	     {
	    	 System.out.println("Test Environment Terminated : SignUp");
	    	 driver.quit();
	     }
	     else
	     {
	    	 System.out.println("Exception occurred ");
	     }
	   
	}


}
