import styled from 'styled-components';

export const StyledButton = styled.button`
    position: relative;
    border: 1px solid #ccc;
    background: transparent;
    text-transform: uppercase;
    color: #ccc;
    padding: 20px 40px;
    outline: 0;
    
    &:hover{
        background-color: rgba(0, 0, 0, .2);
    }
`;