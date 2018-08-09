import React from 'react';
import {
  Filter,
  List,
  Edit,
  Create,
  Datagrid,
  TextField,
  ReferenceField,
  EditButton,
  DisabledInput,
  LongTextInput,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from 'react-admin';

const TaskFilter = props => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="user" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
    <ReferenceInput label="Collection" source="collection" reference="collections" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export const TaskList = props => (
  <List {...props} filters={<TaskFilter />}>
    <Datagrid>
      <TextField source="title" />
      <ReferenceField label="User" source="user" reference="users">
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);
const TaskTitle = ({ record }) => (

  <span>
    Task
    {record ? `"${record.title}"` : ''}
  </span>
);

export const TaskEdit = props => (
  <Edit title={<TaskTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <ReferenceInput label="User" source="user" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Collection" source="collection" reference="collections">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <LongTextInput source="title" />
    </SimpleForm>
  </Edit>
);

export const TaskCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <ReferenceInput label="User" source="user" reference="users">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Collection" source="collection" reference="collections">
        <SelectInput optionText="name" />
      </ReferenceInput>
      <LongTextInput source="title" />
    </SimpleForm>
  </Create>
);
