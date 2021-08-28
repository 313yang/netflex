import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Slider from "react-slick";
import Message from "./Message";
import Loader from "./Loader";
import Poster from "./Poster";

const Container = styled.div`
  width: 90%;
  margin: 80px auto;
  padding: 0px 20px;
  h1 {
    font-size: 20px;
    font-weight: bold;
    margin: 30px 0;
    &:not(:first-child) {
      border-top: 1px solid red;
      padding-top: 30px;
    }
  }
`;

const MovieContent = ({ nowPlaying, upcoming, popular, error, loading }) => {
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i
          class="fas fa-angle-left"
          style={{
            color: "#fff",
            fontSize: "30px",
            opacity: "0.25",
            transition: "opacity 0.2s ease",
          }}
        />
      </div>
    );
  }
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        <i
          class="fas fa-angle-right"
          style={{
            color: "#fff",
            fontSize: "30px",
            opacity: "0.25",
            transition: "opacity 0.2s ease",
          }}
        />
      </div>
    );
  }
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <Helmet>
        <title>MOVIES | NETFLEX</title>
      </Helmet>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {nowPlaying?.length > 0 && (
            <>
              <h1>Now Playing</h1>
              <Slider {...settings}>
                {nowPlaying.map((movie) => (
                  <Poster
                    key={movie.id}
                    title={movie.original_title}
                    imgUrl={movie.poster_path}
                    isMovie={true}
                    rating={movie.vote_average}
                    year={movie.release_date?.substring(0, 4)}
                    id={movie.id}
                  />
                ))}
              </Slider>
            </>
          )}
          {upcoming?.length > 0 && (
            <>
              <h1>Upcoming</h1>
              <Slider {...settings}>
                {upcoming.map((movie) => (
                  <Poster
                    key={movie.id}
                    title={movie.original_title}
                    imgUrl={movie.poster_path}
                    isMovie={true}
                    rating={movie.vote_average}
                    year={movie.release_date?.substring(0, 4)}
                    id={movie.id}
                  />
                ))}
              </Slider>
            </>
          )}
          {popular?.length > 0 && (
            <>
              <h1>Popular Movies</h1>
              <Slider {...settings}>
                {popular.map((movie) => (
                  <Poster
                    key={movie.id}
                    title={movie.original_title}
                    imgUrl={movie.poster_path}
                    isMovie={true}
                    rating={movie.vote_average}
                    year={movie.release_date?.substring(0, 4)}
                    id={movie.id}
                  />
                ))}
              </Slider>
            </>
          )}
          {error && <Message color="#e74c3c" text={error} />}
        </Container>
      )}
    </>
  );
};
MovieContent.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default MovieContent;
