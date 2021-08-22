import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noPoster from "../assets/no-poster.png";
import Proptypes from "prop-types";

const Container = styled.div`
  margin: 0 10px;
`;

const Image = styled.div`
  background: center / cover url(${(props) => props.bgUrl});
  height: 400px;
  transition: opacity 0.2s linear;
`;

const Rating = styled.span`
  position: absolute;
  top: 200px;
  left: 90px;
  opacity: 0;
  transition: opacity 0.2s linear;
`;
const ImgContainer = styled.div`
  margin-bottom: 20px;

  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.h2`
  margin: 8px 0;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Year = styled.h4`
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 3px;
`;

const Poster = ({ imgUrl, title, rating, year, id, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImgContainer>
        <Image
          bgUrl={
            imgUrl ? `https://image.tmdb.org/t/p/w300/${imgUrl}` : noPoster
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating} / 10
        </Rating>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </ImgContainer>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: Proptypes.number.isRequired,
  imgUrl: Proptypes.string,
  title: Proptypes.string.isRequired,
  rating: Proptypes.number,
  year: Proptypes.string,
  isMovie: Proptypes.bool,
};
export default Poster;
