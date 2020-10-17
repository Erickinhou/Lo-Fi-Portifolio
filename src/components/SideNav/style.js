import styled from 'styled-components';

const Icon = styled.a`
  padding: 2vh 2vw;
  color: var(--light);
  transition: all 0.4s ease-in-out;
  & .likendin:hover {
    color: var(--red);
    transition: all 0.4s ease-in-out;
  }
`;

const SideNav = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border-right: 2px solid var(--light);
`;
const IconBottom = styled.div`
  margin: auto 0 1vh 0;
`;

const SpaceTop = styled.div`
  margin-bottom: auto;
`;
export { Icon, SideNav, IconBottom, SpaceTop };
