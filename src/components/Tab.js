import { useState } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import noPoster from "../assets/no-poster.png";

const Container = styled.div`
  margin-top: 30px;

  > div {
    display: flex;
  }
`;
const TabStyle = styled.div`
  padding: 15px 20px;
  background-color: ${(props) =>
    props.active ? "rgba(40, 40, 40, 0.9)" : "rgba(40, 40, 40, 0.4)"};
  border-bottom: ${(props) =>
    props.active ? "1px solid red" : "1px solid rgba(40, 40, 40, 0.9)"};

  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  button {
    border: none;
    background-color: transparent;
    font-family: inherit;
    color: #fff;
    font-size: 16px;
  }
  :hover {
    background-color: rgba(40, 40, 40, 0.9);
  }
`;

const Contents = styled.div`
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
  z-index: 99;
  background-color: rgba(40, 40, 40, 0.9);
  padding: 20px;
  height: 400px;
  border-radius: 5px;
  border-top-left-radius: 0;
  overflow-y: auto;
  margin: 0 auto;
  display: flex;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  > div {
    iframe {
      width: 360px;
      margin: 8px;
      height: 200px;
    }
  }
`;
const ProductionLogo = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 160px);
  grid-gap: 25px;
  margin: 0 auto;
  span {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
  }
  img {
    margin-bottom: 20px;
    width: 160px;
    height: 120px;
    object-fit: contain;
  }
`;
const Season = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 150px);
  grid-gap: 20px;
  margin: 0 auto;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-bottom: 10px;
    img {
      margin-bottom: 20px;
      width: 150px;
      object-fit: contain;
      transition: transform 0.1s ease-in-out;
      &:hover {
        transform: scale(1.05);
      }
    }
  }
`;
const Tab = ({ result, location }) => {
  const [currentTab, setCurrentTab] = useState("YouTube");
  const { pathname } = location;
  const handleTarget = (e) => setCurrentTab(e.target.innerText);
  return (
    <Container>
      <div>
        {currentTab === "YouTube" ? (
          <TabStyle active>
            <button onClick={handleTarget}>YouTube</button>
          </TabStyle>
        ) : (
          <TabStyle>
            <button onClick={handleTarget}>YouTube</button>
          </TabStyle>
        )}
        {currentTab === "Production" ? (
          <TabStyle active>
            <button onClick={handleTarget}>Production</button>
          </TabStyle>
        ) : (
          <TabStyle>
            <button onClick={handleTarget}>Production</button>
          </TabStyle>
        )}
        {pathname.includes("/movie/") ? (
          currentTab === "Seasons" && (
            <TabStyle active>
              <button onClick={handleTarget}>Seasons</button>
            </TabStyle>
          )
        ) : (
          <TabStyle>
            <button onClick={handleTarget}>Seasons</button>
          </TabStyle>
        )}
      </div>
      <Contents>
        {currentTab === "YouTube" && (
          <div>
            {result?.videos.results.length <= 0 && <span>No result</span>}
            {result?.videos.results.map((video) => (
              <iframe
                title={video.key}
                src={`https://www.youtube.com/embed/${video.key}`}
              ></iframe>
            ))}
          </div>
        )}
        {currentTab === "Production" && (
          <ProductionLogo>
            {result?.production_companies.length <= 0 && <span>No result</span>}
            {result?.production_companies.map((prod) => (
              <span key={prod.name}>
                <img
                  src={
                    prod.logo_path
                      ? `https://image.tmdb.org/t/p/original${prod.logo_path}`
                      : { noPoster }
                  }
                  alt={prod.name}
                />
                <p>{prod.name}</p>
              </span>
            ))}
          </ProductionLogo>
        )}
        {currentTab === "Seasons" && (
          <Season>
            {result?.seasons.map((season) => (
              <div key={season.id}>
                <img
                  src={
                    season.poster_path
                      ? `https://image.tmdb.org/t/p/original${season.poster_path}`
                      : { noPoster }
                  }
                  alt={season.name}
                />
                <p>{season.name}</p>
              </div>
            ))}
          </Season>
        )}
      </Contents>
    </Container>
  );
};
export default withRouter(Tab);
