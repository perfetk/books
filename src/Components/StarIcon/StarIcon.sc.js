import styled from 'styled-components';

export const StyledStarIcon = styled.div`
    width: 20px;
    height: 20px;
  
    clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
    background-color: ${(props) => props.isSelected ? '#ffc107' :'#ccc'};
    
    &:hover {
        cursor: pointer;
    }
    
    &:not(:first-child) {
        margin-left: 5px;
    }
`;

export default StyledStarIcon;