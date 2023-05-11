import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React from 'react';
import { PersonTemp } from './personTemp';

export const TableTemplate = ({ data }) => {
  return (
    <TableContainer>
      <br />
      <Table variant='simple'>
        <Thead>
          <Tr bg='#A0AEC0'>
            <Th>Id</Th>
            <Th>Image</Th>
            <Th>Name</Th>
            <Th>gender</Th>
            <Th>D.O.B</Th>
            <Th>email</Th>
            <Th>address</Th>
            <Th>Phone</Th>
            <Th>Who</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((e) => (
            <PersonTemp person={e} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
