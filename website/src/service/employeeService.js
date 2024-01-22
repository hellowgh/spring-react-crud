import { get } from '../utils/request.js';

const BASE_URL = 'http://localhost:8080/api/v1/employee';

export const listEmployees = () => {
  return get(BASE_URL);
}