package com.cts.casestudy.com.cts.casestudy.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cts.casestudy.com.cts.casestudy.model.Task;
import com.cts.casestudy.com.cts.casestudy.repo.AppRepo;

@RestController
@RequestMapping("api")
public class AppController {
	@Autowired
	AppRepo appRepo;

	@RequestMapping("ping")
	public String ping() {
		return "success";
	}

	@RequestMapping("getTasks")
	public List<Task> getEmployee() {
		return appRepo.findAll();
	}

	@RequestMapping(value = "/updateTask", method = RequestMethod.POST)
	public Task updateTask(@RequestBody Task t) {
		return appRepo.save(t);
	}
}
