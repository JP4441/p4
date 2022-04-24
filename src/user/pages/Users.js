import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    {
    id: 'u1',
    name: 'Jose Pepe',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Georgia_Aquarium_-_Giant_Grouper_edit.jpg/220px-Georgia_Aquarium_-_Giant_Grouper_edit.jpg',
    places: 3
  }
  ];
  return <UsersList items={USERS}/>;
}

export default Users;