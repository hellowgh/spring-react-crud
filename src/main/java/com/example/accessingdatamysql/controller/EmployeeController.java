package com.example.accessingdatamysql.controller;

import com.example.accessingdatamysql.DTO.EmployeeDto;
import com.example.accessingdatamysql.entity.Employee;
import com.example.accessingdatamysql.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/v1/employee")
public class EmployeeController {

    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployee() {
        List<EmployeeDto> employees = employeeService.getAllEmployees();

        return ResponseEntity.ok(employees);
    }

    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody EmployeeDto employeeDto) {
        Employee employee = employeeService.createEmployee(employeeDto);
        return ResponseEntity.ok(employee);
    }
}
