package com.example.accessingdatamysql.service;

import com.example.accessingdatamysql.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    List<EmployeeDto> getAllEmployees();

    EmployeeDto createEmployee(EmployeeDto employee);

    // 这里用了long的包装类型Long
    EmployeeDto getEmployeeById(Long id);

   EmployeeDto updateEmployee(Long id, EmployeeDto employeeDto);

   Long deleteEmployee(Long id);
}
