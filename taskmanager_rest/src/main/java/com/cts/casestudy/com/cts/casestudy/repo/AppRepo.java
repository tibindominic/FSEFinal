package com.cts.casestudy.com.cts.casestudy.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cts.casestudy.com.cts.casestudy.model.Task;

public interface AppRepo extends JpaRepository<Task,Integer> {
}
