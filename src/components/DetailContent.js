import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "./Loader";
import noPoster from "../assets/no-poster.png";

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
  filter: blur(3px);
  opacity: 0.8;
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

const DetailContent = ({ result, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
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
      </Content>
    </Container>
  );

DetailContent.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailContent;
