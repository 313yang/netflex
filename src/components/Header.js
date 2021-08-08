import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: rgba(20, 20, 20, 0.8);
  z-index: 10;
  box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.8);
`;
const UlStyle = styled.ul`
  display: flex;
`;
const LiStyle = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.currentPath ? "red" : "transparent")};
  transition: border-bottom 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
`;
const LinkStyle = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Header = ({ location: { pathname } }) => {
  return (
    <HeaderStyle>
      <UlStyle>
        <LiStyle currentPath={pathname === "/"}>
          <LinkStyle to="/">Home</LinkStyle>
        </LiStyle>
        <LiStyle currentPath={pathname === "/tv"}>
          <LinkStyle to="/tv">TV</LinkStyle>
        </LiStyle>
        <LiStyle currentPath={pathname === "/search"}>
          <LinkStyle to="/search">Search</LinkStyle>
        </LiStyle>
      </UlStyle>
    </HeaderStyle>
  );
};
export default withRouter(Header);
