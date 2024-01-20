package com.example.accessingdatamysql.controller;

import com.example.accessingdatamysql.entity.User;
import com.example.accessingdatamysql.repo.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/user")
public class MainController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/test")
    public @ResponseBody String test() {
        return "hello";
    }

    @PostMapping("/add")
    public @ResponseBody String addNewUser(@RequestBody User user) {

        userRepository.save(user);

        return "saved";
    }
}
