package com.backend.rest.webservices.controller.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin("http://localhost:4200")
public class HelloWorldBeanController {

	private String message;

	public HelloWorldBeanController(String message) {
		// TODO Auto-generated constructor stub
		this.message=message;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	@Override
	public String toString() {
		return String.format("HelloWorldBeanController [message=%s]",message);
	}
	
	

	

}
