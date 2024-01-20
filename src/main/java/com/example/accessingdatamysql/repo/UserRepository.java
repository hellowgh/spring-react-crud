package com.example.accessingdatamysql.repo;

import com.example.accessingdatamysql.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
}
