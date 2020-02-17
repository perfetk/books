import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 20px;
    border: 1px solid #000;
    background-color: #fff;
    min-height: 200px;
    width: 100%;
    padding: 40px;
    box-shadow: 2px 2px 5px rgba(0,0,0,.5);
    text-align: left;
    
    &:not(:first-child) {
        margin-top: 30px;
    } 
`;

export const CardContent = styled.div`
    width: 80%;
`;

export const CardTitle = styled.h2`
    width: 100%;
    font-size: 28px;
    color: #000;
    margin: 0 0 20px 0;
`;

export const CardDescription = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: #6f6f6f;
    padding: 0 20px 20px 0;
`;

export const CardImage = styled.div`
    max-width: 20%;
    margin-top: 10px;
    img { 
        width: 100%;
        height: auto;
    }
`;