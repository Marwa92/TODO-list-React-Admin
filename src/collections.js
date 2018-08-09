import React from 'react';
import {
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  EditButton,
  DisabledInput,
  LongTextInput,
  SimpleForm,
} from 'react-admin';

export const CollectionList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="name" />
      <EditButton />
    </Datagrid>
  </List>
);
const CollectionName = ({ record }) => (

  <span>
    Collection
    {record ? `"${record.name}"` : ''}
  </span>
);

export const CollectionEdit = props => (
  <Edit title={<CollectionName />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <LongTextInput source="name" />
    </SimpleForm>
  </Edit>
);

export const CollectionCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <LongTextInput source="name" />
    </SimpleForm>
  </Create>
);
