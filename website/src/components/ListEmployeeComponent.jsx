import { useEffect, useState } from 'react';
import { listEmployees } from '../service/employeeService.js';
import { Button, Table } from 'antd';

const columns = [
  {
    title: 'Employ Id',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'First Name',
    dataIndex: 'firstName',
    key: 'firstName',
  },
  {
    title: 'Last Name',
    dataIndex: 'lastName',
    key: 'lastName',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Actions',
    dataIndex: '',
    key: '',
  },
];

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);

  const getAllEmployees = async () => {
    setEmployees([]);
    const res = await listEmployees();
    res.data.forEach(item => item.key = item.id);
    setEmployees(res.data);
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  return (
    <>
      <div className="btn-row mb-20">
        <Button type="primary">Add Employee</Button>
      </div>
      <Table dataSource={employees} columns={columns}/>
    </>
  );
};

export default ListEmployeeComponent;