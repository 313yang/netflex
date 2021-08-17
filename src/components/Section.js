import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 30px;
`;

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0;
`;

const Grid = styled.div`
  margin-top: 30px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 145px);
  grid-gap: 25px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Section;
