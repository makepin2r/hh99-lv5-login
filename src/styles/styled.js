import styled from "styled-components";

export const Wrapper = styled.div`
    width: 400px;
    min-height: 500px;
    border: 1px solid lightblue;
    border-radius: 25px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    margin: 7vh auto;
    padding: 3rem;
    display: flex;
    justify-content: center;
    align-content: space-between;
    flex-direction: column;
    text-align: center;
`;

export const StHeader = styled.h1`
    font-weight: 700;
    font-size: 2rem;
    margin-bottom: 1.5rem;
`;

export const StInputBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const StInput = styled.input`
    width: calc(100% - 4rem);
    border: 2px solid #aaa;
    border-radius: 4px;
    margin: 8px 0;
    outline: none;
    padding: 8px;
    box-sizing: border-box;
    transition: 0.3s;

    &:focus {
        border-color: dodgerBlue;
        box-shadow: 0 0 8px 0 dodgerBlue;
    }
`;

export const StLabel = styled.span`
    display: inline-block;
    width: 3rem;
    text-align: left;
`;

export const StBtnPrimary = styled.button`
    width: 100%;
    margin-bottom: 0.5rem;
    cursor: pointer;
    outline: 0;
    color: #fff;
    background-color: #0d6efd;
    border-color: #0d6efd;
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid transparent;
    padding: 6px 12px;
    font-size: 16px;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    &:hover {
        color: #fff;
        background-color: #0b5ed7;
        border-color: #0a58ca;
    }
`;

export const StBtnSecondary = styled(StBtnPrimary)`
    background-color: #95a5a6;
    border-color: #bdc3c7;

    &:hover {
        background-color: #576574;
        border-color: #7f8c8d;
    }
`;

export const StPadding = styled.div`
    margin-bottom: 1rem;
`;
