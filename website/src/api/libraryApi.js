import { get } from '../utils/request.js';

export default {
  get () {
    return get('/api/book/all');
  },
};