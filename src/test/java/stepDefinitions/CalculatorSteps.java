package stepDefinitions;

import java.util.List;
import java.util.Map;

import org.junit.Assert;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;


public class CalculatorSteps {
	
	int result = 0;
	
	@Given("I have a calculator")
	public void i_have_a_calculator() {
		System.out.println("Inside Calculator");
	}
	
	@When("I add {int} and {int}")
	public void i_add_and(int num1, int num2) {
		
		result = num1+num2;
	}
	
	@Then("I should get the result as {int}")
	public void i_should_get_the_result_as(int res) {
		
		Assert.assertEquals(res, result);
	}
	
	@When("I sub {int} and {int}")
	public void i_sub_and(int num1, int num2) {

		result = num1-num2;
	}
	
	@When("I add below numbers")
	public void i_add_below_numbers(io.cucumber.datatable.DataTable dataTable) {
		int rows = dataTable.height();
		
		for (int i=0; i<rows; i++) {
			result = Integer.parseInt(dataTable.cell(i, 0)) + result;
			
		}
	}
	
	@When("I add below numbers using List")
	public void i_add_below_numbers_using_list(List<Integer> numbers) {
	    //i like this better than the above method
		for(Integer num : numbers) {
			result = result + num;
		}
	}
	
	@When("I order the below items")
	public void i_order_the_below_items(Map<String,Integer> priceList) {
	   //iterate through map
		for(String key : priceList.keySet()) {
			result = result + priceList.get(key);
		}
	}
	
	@When("I order the below items using quantity")
	public void i_order_the_below_items_using_quantity(io.cucumber.datatable.DataTable dataTable) {
		int rows = dataTable.height();
		
		for (int i=0; i<rows; i++) {
		int num1 = Integer.parseInt(dataTable.cell(i,1));
		int num2 = Integer.parseInt(dataTable.cell(i,2));
		
		result = result + (num1 * num2);
		}
		
	}


}
