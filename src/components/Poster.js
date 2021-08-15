import Proptypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Image = styled.div`
  background: center / cover
    url(${(props) => `https://image.tmdb.org/t/p/w300/${props.bgUrl}`});
  height: 200px;
  transition: opacity 0.2s linear;
`;

const Rating = styled.span`
  position: absolute;
  top: 170px;
  left: 5px;
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
  font-size: 18px;
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
        <Image bgUrl={imgUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating}/10
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
