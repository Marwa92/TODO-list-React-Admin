import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { TaskList, TaskEdit, TaskCreate } from './tasks';
import { UserList, UserEdit, UserCreate } from './users';
import { CollectionList, CollectionEdit, CollectionCreate } from './collections';

const dataProvider = jsonServerProvider('http://localhost:3002');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="tasks" list={TaskList} edit={TaskEdit} create={TaskCreate} />
    <Resource name="users" list={UserList} edit={UserEdit} create={UserCreate} />
    <Resource name="collections" list={CollectionList} edit={CollectionEdit} create={CollectionCreate} />
  </Admin>
);

export default App;
