import { Tabs } from 'antd';
import BookList from './BookList.jsx';
import { get } from '../utils/request.js';
import { useEffect, useState } from 'react';

function Home () {
  const [books, setBooks] = useState([]);

  async function getBooks () {
    const res = await get('/api/book/all');
    res.forEach(i => i.key = i.isbn);
    setBooks(res);
  }

  useEffect(() => {
    getBooks();
  }, []);

  const items = [
    {
      key: '1',
      label: '图书',
      children: <BookList books={books}/>,
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