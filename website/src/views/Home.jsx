import { Tabs } from 'antd';
import BookList from './BookList.jsx';
import {listEmployees} from '../service/employeeService.js';
import { useEffect, useState } from 'react';
import {Button} from 'antd';

function Home () {
  const [books, setBooks] = useState([]);

  async function getBooks () {
    const res = await listEmployees();
    res.forEach(item => item.key = item.id);
    setBooks(res);
  }

  useEffect(() => {
    getBooks();
  }, []);

  const items = [
    {
      key: '1',
      label: '图书',
      children: (
        <>
          <Button type="primary">Add Employee</Button>
          <BookList books={books}/>
        </>
      ),
    },
    {
      key: '2',
      label: '作者',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'Tab 3',
      children: 'Content of Tab Pane 3',
    },
  ];

  return <Tabs items={items} defaultActiveKey="1"></Tabs>;
}

export default Home;