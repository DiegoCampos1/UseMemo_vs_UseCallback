import React, { useEffect, useState, useCallback, useMemo } from 'react';
import axios from 'axios';

const filter = (users, query) => {
  console.log('Função filter foi chamada');
  return users.filter((user) => user.name.toLowerCase().includes(query));
};

function UserList({ users, query }) {
  const filtered = filter(users, query);
  // const filtered = useMemo(() => filter(users, query),[users, query]);

  return filtered.map((user) => <div key={user.id}>{user.name}</div>);
}

function UseMemo() {
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    setUsers(data);
  }, []);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div>
      <h3>UseMemo: </h3>
      <input type="text" onChange={(e) => setQuery(e.target.value)}></input>
      {/* Esse botão faz o filter ser chamado novamente sem necessidade, dependendo do tamanho da lista esse pode gerar
      um problema de performace, e aqui é onde entra nosso useMemo */}
      <button onClick={() => setCount((prev) => prev + 1)}>Incremet</button>
      <div>{count}</div>
      <UserList users={users} query={query}></UserList>
    </div>
  );
}

export default UseMemo;

// useCallback(func, deps)
// useMemo(() => func, deps)
