package stepDefinitions;

import org.junit.runner.RunWith;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		
		plugin = {"html:target/html-cucumber", "json:target/cucumber.json"},
		
		features = "src/test/java/features",
		//tags = {"not @Sanity"} or tags = {"~@Sanity"}
		tags = {"@F_1234"}, //to run entire feature
		//tags = {"@Sanity"},  //To run 1 tag
		//tags = {"@Sanity,@Regression"},   To run multiple tags
		//tags = {"@Regression or @Rapid"},
		//tags = {"@Sanity or (@Regression and @Rapid)"}
		//tags = {"@Regression and @Rapid"},
		glue = {"stepDefinitions"}
		
			)

public class TestRunner {

}
