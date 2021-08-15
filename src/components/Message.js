import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Text = styled.span`
  color: ${(props) => props.color};
  font-weight: 600;
`;

const Message = ({ text }) => (
  <Container>
    <Text>{text}</Text>
  </Container>
);

Message.proyTypes = {
  text: PropTypes.string,
};

export default Message;
