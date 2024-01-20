package com.example.accessingdatamysql.mapper;

import com.example.accessingdatamysql.entity.User;

import java.util.List;

public interface UserMapper {
    public void insertUser(User user);

    public User getUserById(Integer id);

    public List<User> getAllUsers();

    public void updateUser(User user);

    public void deleteUser(Integer id);
}
