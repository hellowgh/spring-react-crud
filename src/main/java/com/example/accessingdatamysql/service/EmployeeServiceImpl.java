package com.example.accessingdatamysql.service;

import com.example.accessingdatamysql.DTO.EmployeeDto;
import com.example.accessingdatamysql.DTO.EmployeeMapper;
import com.example.accessingdatamysql.entity.Employee;
import com.example.accessingdatamysql.repo.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private EmployeeRepository employeeRepository;

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream()
                .map(EmployeeMapper::mapToEmployeeDto) // 这里用到的是“方法引用”，是lambda表达式的简写
                .collect(Collectors.toList());
    }

}
