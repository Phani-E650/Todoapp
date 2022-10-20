package com.backend.rest.webservices.todo;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


@CrossOrigin("http://localhost:4200")
@RestController
public class Todo {
	@Autowired
	private TodoHardCodeService service;
	
	@GetMapping("/users/{username}/todos")
	public List<TodoResource> getAlltodos(@PathVariable String username) {
		return service.findAll();
	}
	
	
	@GetMapping("/users/{username}/todos/{id}")
	public TodoResource getTodo(@PathVariable String username,@PathVariable long id) {
		return TodoHardCodeService.findById(id);
	}
	
	@PutMapping("/users/{username}/todos/{id}")
	public ResponseEntity<TodoResource> updateTodo(@PathVariable String username, @PathVariable long id,@RequestBody TodoResource todo){
		TodoResource todoUpdated=service.submit(todo);
		return new ResponseEntity<TodoResource>(todo,HttpStatus.OK);
		
	}
	@PostMapping("/users/{username}/todos/")
	public ResponseEntity<TodoResource> createTodo(@PathVariable String username,@RequestBody TodoResource todo){
		TodoResource createdTodo=service.submit(todo);
		
		
		URI uri=ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(createdTodo.getId()).toUri();
		return ResponseEntity.created(uri).build();
		
	}
	
	
	
	
	
	@DeleteMapping("/users/{username}/todos/{id}")
	public ResponseEntity<Void> deleteTodo(@PathVariable String username, @PathVariable long id){
		TodoResource todo=service.deleteTodo(id);
		if(todo!=null) {
			return ResponseEntity.noContent().build();
		}
		return ResponseEntity.notFound().build();
		
	}

}
