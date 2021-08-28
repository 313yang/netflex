import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "./Loader";
import Message from "./Message";
import Poster from "./Poster";
import { Helmet } from "react-helmet";
import Slider from "react-slick";

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

const TVContent = ({ topRated, popular, airingToday, error, isLoading }) => {
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
            opacity: "0.6",
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
            opacity: "0.6",
            transition: "opacity 0.2s ease",
          }}
        ></i>
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
        <title>TV | NETFLEX</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <Container>
          {topRated?.length > 0 && (
            <>
              <h1>Top Rated</h1>
              <Slider {...settings}>
                {topRated.map((show) => (
                  <Poster
                    key={show.id}
                    title={show.original_name}
                    imgUrl={show.poster_path}
                    rating={show.vote_average}
                    year={show.first_air_date?.substring(0, 4)}
                    id={show.id}
                  />
                ))}
              </Slider>
            </>
          )}
          {popular?.length > 0 && (
            <>
              <h1>Popular TV Shows</h1>
              <Slider {...settings}>
                {popular.map((show) => (
                  <Poster
                    key={show.id}
                    title={show.original_name}
                    imgUrl={show.poster_path}
                    rating={show.vote_average}
                    year={show.first_air_date?.substring(0, 4)}
                    id={show.id}
                  />
                ))}
              </Slider>
            </>
          )}
          {airingToday?.length > 0 && (
            <>
              <h1>Airing Today</h1>
              <Slider {...settings}>
                {airingToday.map((show) => (
                  <Poster
                    key={show.id}
                    title={show.original_name}
                    imgUrl={show.poster_path}
                    rating={show.vote_average}
                    year={show.first_air_date?.substring(0, 4)}
                    id={show.id}
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

TVContent.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  error: PropTypes.bool,
  isLoading: PropTypes.bool.isRequired,
};

export default TVContent;
