import axios from 'axios';

const SERVICE_URL = 'http://localhost:8080/api/v1/employee';

export const listEmployees = () => {
  return axios.get(SERVICE_URL);
}

export const createEmployee = (employee) => {
  return axios.post(SERVICE_URL, employee)
}

export const getEmployeeById = (employeeId) => {
  return axios.get(SERVICE_URL + '/' + employeeId);
}

export const updateEmployee = (employeeId, employee) => {
  return axios.put(SERVICE_URL + '/' +employeeId, employee);
}

export const deleteEmployee = (employeeId) => {
  return axios.delete(SERVICE_URL + '/' + employeeId);
}