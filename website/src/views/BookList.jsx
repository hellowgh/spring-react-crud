import { Table } from 'antd';

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
];

const BookList = (props) => <Table dataSource={props.books} columns={columns}/>;

export default BookList;