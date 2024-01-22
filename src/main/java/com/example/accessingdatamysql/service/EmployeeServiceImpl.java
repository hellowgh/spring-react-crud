package com.example.accessingdatamysql.service;

import com.example.accessingdatamysql.dto.EmployeeDto;
import com.example.accessingdatamysql.dto.EmployeeMapper;
import com.example.accessingdatamysql.entity.Employee;
import com.example.accessingdatamysql.exception.ResourceNotFoundException;
import com.example.accessingdatamysql.repo.EmployeeRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream()
                .map(EmployeeMapper::mapToEmployeeDto) // 这里用到的是“方法引用”，是lambda表达式的简写
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {
        Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("employee not exist with id:" + id));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }
}
