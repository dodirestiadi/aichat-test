import React from 'react';

// Bootstrap
import {
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col
} from 'reactstrap';

import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";

import Box from '../styled/StyledBox';

export default function MovieCard({
  banner,
  title,
  year,
  isFavourite,
  titleOnClick,
  handleFavourite
}) {
  const imageSrc = banner !== 'N/A' ? banner : 'https://sisterhoodofstyle.com/wp-content/uploads/2018/02/no-image-1.jpg';
  return (
    <Box isFullHeight isRounded withBorder withBoxShadow>
      <CardImg top width="100%" src={imageSrc} alt={title} />
      <CardBody>
        <CardTitle className="font-weight-bold pointer" onClick={titleOnClick}>{title}</CardTitle>
        <Row>
          <Col>
            <CardSubtitle>{year}</CardSubtitle>
          </Col>
          <Col>
            {isFavourite ? (
              <IoIosHeart size={20} color="red" className="pointer float-right" onClick={handleFavourite} />
            ) : <IoIosHeartEmpty size={20} className="pointer float-right" onClick={handleFavourite} />}
          </Col>
        </Row>
      </CardBody>
    </Box>
  );
}