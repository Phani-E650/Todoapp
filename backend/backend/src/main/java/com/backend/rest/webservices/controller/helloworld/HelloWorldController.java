package com.backend.rest.webservices.controller.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("http://localhost:4200")
@RestController
public class HelloWorldController {
	@RequestMapping(method= RequestMethod.POST,path="/hello")
	public String helloWorld() {
		return "HelloWorld";
	}
	
	@GetMapping(path="/hellobean")
	public HelloWorldBeanController helloWorldBean() {
		return new HelloWorldBeanController("Hello world bean I am");
	}
	
	
	@GetMapping(path="/hellobean/pathvar/{name}")
	public HelloWorldBeanController helloWorldPath(@PathVariable String name) {
		return new HelloWorldBeanController(name+"helloI am path");
	}



}
