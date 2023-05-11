import { EditIcon, ViewIcon } from '@chakra-ui/icons';
import React from 'react';
import { Avatar, Badge, Button, Stack, Td, Tr } from '@chakra-ui/react';
import { DelButton } from './delButtonConfirmatin';
import { useNavigate } from 'react-router-dom';

export const PersonTemp = ({ person }) => {
  const navigate = useNavigate();

  return (
    <Tr key={person.id}>
      <Td>{person.id}</Td>
      <Td>
        <Avatar name='Dan Abrahmov' src={person.image} />
      </Td>
      <Td>{person.name}</Td>
      <Td>{person.gender}</Td>
      <Td>{person.dob.slice(0, 10)}</Td>
      <Td>{person.email}</Td>
      <Td>{person.address}</Td>
      <Td>{person.phone}</Td>
      <Td>
        {person.who < 80 ? (
          <Badge colorScheme='green'>Student</Badge>
        ) : (
          <Badge colorScheme='red'>Teacher</Badge>
        )}
      </Td>
      <Td>
        <Stack direction='row' spacing={3}>
          <Button
            colorScheme='blue'
            onClick={() =>
              navigate(`/form/${person.id}`, { state: { isView: true } })
            }
          >
            <ViewIcon bg='transparent' />
          </Button>
          <Button
            colorScheme='green'
            onClick={() =>
              navigate(`/form/${person.id}`, { state: { isView: false } })
            }
          >
            <EditIcon bg='transparent' />
          </Button>
          <DelButton data={person.id} />
        </Stack>
      </Td>
    </Tr>
  );
};
