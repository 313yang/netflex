import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "./Loader";
import noPoster from "../assets/no-poster.png";
import imdbLogo from "../assets/IMDB_Logo_2016.svg";
import Helmet from "react-helmet";
import Tab from "./Tab";

const Container = styled.div`
  height: 95vh;
  width: 100%;
  position: relative;
  padding: 50px 10%;
`;
const Backdrop = styled.div`
  position: absolute;
  top: 5vh;
  left: 0;
  width: 100%;
  height: 100%;
  background: center / cover url(${(props) => props.bgimg});
  filter: blur(6px);
  opacity: 0.3;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  position: relative;
  top: 5vh;
  z-index: 1;
`;
const Cover = styled.div`
  width: 40%;
  height: 100%;
  background: center / cover url(${(props) => props.bgimg});
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 5px;
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;
const Data = styled.div`
  width: 60%;
  margin-left: 40px;
  margin-top: 0px;
  padding: 50px;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.5);
`;
const Title = styled.h2`
  font-family: "Bebas Neue", "Noto Sans KR";
  font-size: 50px;
  font-style: oblique;
  letter-spacing: 2px;
  text-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  margin: 0px;
  padding-bottom: 30px;
  border-bottom: 1px solid #ff2727;
`;
const ItemContainer = styled.div`
  display: flex;
  align-self: center;
  margin: 20px 0 40px;
  font-size: 20px;
`;
const Divider = styled.p`
  margin: 0 10px;
  font-family: "Bebas Neue", "Noto Sans KR";
`;
const Item = styled.p`
  font-family: "Bebas Neue", "Noto Sans KR";
  img {
    width: 38px;
  }
`;
const OverView = styled.p`
  width: 90%;
  line-height: 1.2;
`;

const DetailContent = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <Helmet>
        <title>
          {`${
            result && result?.original_title
              ? result?.original_title
              : result?.original_name
          } | NETFLEX`}
        </title>
      </Helmet>
      <Backdrop
        bgimg={`https://image.tmdb.org/t/p/original${result?.backdrop_path}`}
      />
      <Content>
        <Cover
          bgimg={
            result?.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : { noPoster }
          }
        />
        <Data>
          <Title>
            {result?.original_title
              ? result?.original_title
              : result?.original_name}
          </Title>
          <ItemContainer>
            <Item>
              {result?.release_date
                ? result?.release_date.substring(0, 4)
                : result?.first_air_date.substring(0, 4)}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result?.runtime ? result?.runtime : result?.episode_run_time}
              min
            </Item>
            <Divider>•</Divider>
            <Item>
              {result?.genres &&
                result.genres.map((genre, index) =>
                  index === result.genres.length - 1
                    ? `🍿 ${genre.name} `
                    : ` 🍿 ${genre.name} `
                )}
            </Item>
            <Divider>•</Divider>
            <Item>
              {result?.imdb_id ? (
                <a
                  href={`https://www.imdb.com/title/${result.imdb_id}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={imdbLogo} alt="imdb-logo" />
                </a>
              ) : (
                ""
              )}
            </Item>
          </ItemContainer>
          <OverView>{result?.overview}</OverView>
          <Tab />
        </Data>
      </Content>
    </Container>
  );

DetailContent.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailContent;
