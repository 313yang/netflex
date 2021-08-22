import styled from "styled-components";

const Container = styled.div`
  margin-top: 30px;
  > div {
    display: flex;
  }
`;
const TabStyle = styled.div`
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  :hover {
    background-color: rgba(0, 0, 0, 1);
  }
`;

const Contents = styled.div`
  background-color: #000;
  padding: 20px;
  height: 400px;
  border-radius: 5px;
  border-top-left-radius: 0;
`;

const Tab = () => {
  return (
    <Container>
      <div>
        <TabStyle>
          <p>YouTube</p>
        </TabStyle>
        <TabStyle>
          <p>Production</p>
        </TabStyle>
        <TabStyle>
          <p>Seasons</p>
        </TabStyle>
      </div>
      <Contents>
        <p>efef</p>
      </Contents>
    </Container>
  );
};
export default Tab;
