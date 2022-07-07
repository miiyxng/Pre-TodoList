import styled from 'styled-components';

export const Template = styled.div`
    margin: 80px auto;
    min-height: 80vh;
    width: 768px;
    height: 180px;
    color: black;
    background-color: white;

    box-shadow: 2px 2px 10px gray;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const JudgeTem = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const TitleLogoDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 30px;
    line-height: 1;
`;

export const TitleBig = styled.span`
    font-size: 40px;
    font-family: 'Black Han Sans', sans-serif;
`;

export const TitleSmall = styled.span`
    margin: 3px;
    color: #f39926;
`;