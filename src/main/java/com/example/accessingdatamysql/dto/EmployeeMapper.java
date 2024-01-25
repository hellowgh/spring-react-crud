package com.example.accessingdatamysql.dto;

import com.example.accessingdatamysql.entity.Employee;

public class EmployeeMapper {

    /**
     * convert Employee JPA Entity into EmployeeDto
     * @param employee Employee
     * @return employeeDto
     */
    public static EmployeeDto mapToEmployeeDto(Employee employee) {
        EmployeeDto employeeDto = new EmployeeDto();

        employeeDto.setId(employee.getId());
        employeeDto.setFirstName(employee.getFirstName());
        employeeDto.setLastName(employee.getFirstName());
        employeeDto.setEmail(employee.getEmail());

        return employeeDto;
    }

    /**
     * convert EmployeeDto into JPA Entity Employee
     * @param employeeDto EmployeeDto
     * @return employee
     */
    public static Employee mapToEmployee(EmployeeDto employeeDto) {
        Employee employee = new Employee();

        employee.setFirstName(employeeDto.getFirstName());
        employee.setLastName(employeeDto.getLastName());
        employee.setEmail(employeeDto.getEmail());

        return employee;
    }
}
