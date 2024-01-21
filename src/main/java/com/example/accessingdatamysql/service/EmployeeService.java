package com.example.accessingdatamysql.service;

import com.example.accessingdatamysql.DTO.EmployeeDto;
import com.example.accessingdatamysql.entity.Employee;

import java.util.List;

public interface EmployeeService {
    List<EmployeeDto> getAllEmployees();

    Employee createEmployee(EmployeeDto employee);

//    // 这里用了long的包装类型Long
//    EmployeeDto getEmployeeById(Long id);
//
//    EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto);
//
//    void deleteEmployee(Long id);
}
