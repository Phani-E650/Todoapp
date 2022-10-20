package com.backend.rest.webservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.CrossOrigin;

@Service
@CrossOrigin("http://localhost:4200")
public class TodoHardCodeService {
	
	private static List<TodoResource> todos =  new ArrayList<TodoResource>();
	private static int idCounter=0;
	
	static {
		todos.add(new TodoResource(++idCounter,"Phani","Learn to dance", new Date(),false));
		todos.add(new TodoResource(++idCounter,"Phani","Learn to sing", new Date(),false));
		todos.add(new TodoResource(++idCounter,"Phani","Learn to learn react", new Date(),false));
	}
	
	
	public List<TodoResource> findAll() {
		return todos;
	}
	
	public TodoResource submit(TodoResource todo) {
		if(todo.getId()==-1 || todo.getId()==0) {
			todo.setId(++idCounter);
			todos.add(todo);
			
		}
		else {
			deleteTodo(todo.getId());
			todos.add(todo);
		}
		return todo;
	}

	private void deleteById(long id) {
		// TODO Auto-generated method stub
		
	}

	public TodoResource deleteTodo(long id) {
		TodoResource todo=findById(id);
		if(todo==null) {
			return null;
		}
		if(todos.remove(todo)) {
			return todo;
		}
		return null;
		
	}
	
	public static TodoResource findById(long id) {
		for(TodoResource todo:todos) {
			if(todo.getId()==id) {
				return todo;
			}
			
		}
		return null;
	}
	
	
	
	

}
