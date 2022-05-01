package com.controller;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Employee;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

	@GetMapping(value = "say")
	public String sayHello() {
		return "Welcome to Spring rest API";
	}
	@GetMapping(value = "employee",produces = MediaType.APPLICATION_JSON_VALUE)
	public Employee getEmployee() {
		Employee emp = new Employee();
		emp.setId(100);
		emp.setName("Ravi");
		emp.setSalary(120000);
		return emp;
	}
}
