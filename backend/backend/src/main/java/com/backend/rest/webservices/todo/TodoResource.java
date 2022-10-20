package com.backend.rest.webservices.todo;

import java.util.Date;


public class TodoResource {
	private long id;
	private String username;
	private String desc;
	private Date targetDate;
	private boolean isDone;
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getDesc() {
		return desc;
	}
	public void setDesc(String desc) {
		this.desc = desc;
	}
	public Date getTargetDate() {
		return targetDate;
	}
	public void setTargetDate(Date targetDate) {
		this.targetDate = targetDate;
	}
	public boolean isDone() {
		return isDone;
	}
	public void setDone(boolean isDone) {
		this.isDone = isDone;
	}
	public TodoResource(long id, String username, String desc, Date targetDate, boolean isDone) {
		super();
		this.id = id;
		this.username = username;
		this.desc = desc;
		this.targetDate = targetDate;
		this.isDone = isDone;
	}
	
	public TodoResource() {
		
	}
	
	

}
