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
`;