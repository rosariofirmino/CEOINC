import styled from 'styled-components'

export const Button = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ?  '#fff' : '#3EC2F3')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color : ${({dark}) => (dark ? '#3EC2F3' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#3EC2F3' : '#fff')};
        color : ${({dark}) => (dark ? '#fff' : '#3EC2F3')};
    }

`
export const Button2 = styled.a`
    border-radius: 50px;
    background: ${({primary}) => (primary ?  '#fff' : '#3EC2F3')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color : ${({dark}) => (dark ? '#3EC2F3' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#3EC2F3' : '#fff')};
        color : ${({dark}) => (dark ? '#fff' : '#3EC2F3')};
    }

`
export const ButtonFooter = styled.a`
    border-radius: 50px;
    background: #3EC2F3;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color : #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 3px solid black;
    border-color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#3EC2F3' : '#fff')};
        color : ${({dark}) => (dark ? '#fff' : '#3EC2F3')};
    }

`
export const ButtonFooter2 = styled.a`
    border-radius: 50px;
    background: #3EC2F3;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color : #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: 3px solid black;
    border-color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#3EC2F3' : '#fff')};
        color : ${({dark}) => (dark ? '#fff' : '#3EC2F3')};
    }

`
