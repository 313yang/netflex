import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const HeaderStyle = styled.header`
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;

  > div {
    font-family: "Bebas Neue", cursive;
    color: white;
    display: flex;
    align-items: center;
    background-color: rgba(20, 20, 20, 0.85);
  }
`;
const UlStyle = styled.ul`
  display: flex;
  margin: 0 auto;
  width: 90%;
`;
const LiStyle = styled.li`
  width: 80px;
  height: 70px;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-bottom: 3px solid
    ${(props) => (props.currentPath ? "red" : "transparent")};
  transition: border-bottom 0.3s cubic-bezier(0.075, 0.82, 0.165, 1);
  :first-child {
    margin-right: 80px;
  }
`;
const LinkStyle = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Navigator = styled.nav`
  font-family: "Bebas Neue", cursive;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  padding: 10px 50px;
  width: 100%;
  background-color: #101010ed;
  color: white;
  a {
    display: flex;
    align-items: center;
    font-size: 22px;
  }
  z-index: 99;
`;
export const NavTitle = styled(Link)`
  display: flex;
  align-items: center;
  color: red;
  font-weight: 600;
  font-size: 36px;
  letter-spacing: 2px;
`;
const Header = ({ location: { pathname } }) => {
  return (
    <HeaderStyle>
      <div>
        <UlStyle>
          <LiStyle>
            <NavTitle to="/">NETFLEX</NavTitle>
          </LiStyle>

          <LiStyle currentPath={pathname === "/"}>
            <LinkStyle to="/">MOVIE</LinkStyle>
          </LiStyle>
          <LiStyle currentPath={pathname === "/tv"}>
            <LinkStyle to="/tv">TV</LinkStyle>
          </LiStyle>
          <LiStyle currentPath={pathname === "/search"}>
            <LinkStyle to="/search">Search</LinkStyle>
          </LiStyle>
        </UlStyle>
      </div>
    </HeaderStyle>
  );
};
export default withRouter(Header);
