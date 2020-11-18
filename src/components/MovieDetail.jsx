import React from 'react';

import { Table } from 'reactstrap';

import Box from '../styled/StyledBox';
import Image from '../styled/StyledImage';
import Text from '../styled/StyledText';

export default function MovieDetail({
  Actors,
  Awards,
  Director,
  Genre,
  Poster,
  Plot,
  Released,
  Runtime,
  Title,
}) {
  return (
    <Box scrollable>
      <Image className="img-fluid" isCentered width="50%" src={Poster} alt={Title} />
      <Text isBlock fontWeight={500} fontSize={22} marginTop={8} marginBottom={3} className="text-center">{Title}</Text>
      <Text isBlock className="text-center">{Plot}</Text>
      <Table borderless className="mt-2">
        <tbody>
          <tr>
            <td>Genre</td>
            <td>{Genre}</td>
          </tr>
          <tr>
            <td>Released Date</td>
            <td>{Released}</td>
          </tr>
          <tr>
            <td>Director</td>
            <td>{Director}</td>
          </tr>
          <tr>
            <td>Awards</td>
            <td>{Awards}</td>
          </tr>
          <tr>
            <td>Actors</td>
            <td>{Actors}</td>
          </tr>
          <tr>
            <td>Runtime</td>
            <td>{Runtime}</td>
          </tr>
        </tbody>
      </Table>
    </Box>
  );
}