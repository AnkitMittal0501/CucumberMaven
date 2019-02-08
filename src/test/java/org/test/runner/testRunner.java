package org.test.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="Feature"
		,glue= {"org.step.definition"}
		,format= {"pretty", "html:test-output"}
		 
		
		)
	


public class testRunner {

}
