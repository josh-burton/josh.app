import styled from 'styled-components';

const FixedContainer = styled.div`
    padding: ${props => props.theme.padding};
    margin: ${props => props.theme.margin};
    max-width: ${props => props.theme.maxWidth};
`;

export default FixedContainer;
