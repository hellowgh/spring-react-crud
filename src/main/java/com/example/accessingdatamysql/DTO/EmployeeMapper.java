package com.example.accessingdatamysql.DTO;

import com.example.accessingdatamysql.entity.Employee;

public class EmployeeMapper {
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        EmployeeDto employeeDto = new EmployeeDto();

        employeeDto.setId(employee.getId());
        employeeDto.setFirstName(employee.getFirstName());
        employeeDto.setLastName(employee.getFirstName());
        employeeDto.setEmail(employee.getEmail());

        return employeeDto;
    }
}
