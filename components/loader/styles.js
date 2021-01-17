import styled from 'styled-components';

export const LoaderWrapper = styled.div`
  display: ${({ loadingSession }) => loadingSession ? 'grid' : 'none '};
  place-items: center;
  background-color: green;
  z-index: 1000;
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
`;