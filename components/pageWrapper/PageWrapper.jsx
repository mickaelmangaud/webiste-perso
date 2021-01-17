import styled from 'styled-components';

export const PageWrapper = ({ children }) => {
  return (
    <StyledPageWrapper>
      {children}
    </StyledPageWrapper>
  )
}

const StyledPageWrapper = styled.div`
  background-color: papayawhip;
  margin-top: 60px;
  padding: 32px;
  height: calc(100vh - 60px);
  overflow-y: scroll;
`;