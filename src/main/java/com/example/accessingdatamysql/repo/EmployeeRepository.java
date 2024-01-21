package com.example.accessingdatamysql.repo;

import com.example.accessingdatamysql.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

// 参数Employee是实体类，Long是实体的主键类型
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
