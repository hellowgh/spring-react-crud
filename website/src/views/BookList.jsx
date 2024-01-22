import { Table } from 'antd';

const columns = [
  {
    title: '标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '作者',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'ISBN',
    dataIndex: 'isbn',
    key: 'isbn',
  },
  {
    title: '摘要',
    dataIndex: 'summary',
    key: 'summary',
  },
];

const BookList = (props) => <Table dataSource={props.books} columns={columns}/>;

export default BookList;