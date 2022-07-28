import styled, { css } from 'styled-components';

const colors = {
    greenDark : '#025928',
    greenLight : '#758C1F',
    yellowDark : '#F2DA5E',
    yellowLight : '#F2E085', 
    brown: '#8C4F2B',
    linkDark: '#024059',
    linkLight: '#61DAFB',
    white: '#FDFDE8',
    black: '#262626',
    blueLight : '#84C1D9',
    blueDark : '#024059'

}

const fontSize = {
    shortest : '14px',
    short : '16px',
    normal : '18px',
    large : '20px',
    big : '22px',
}

const Form = styled.form`
    padding: 3px;
`;

const Label = styled.label`
    color: ${colors.greenLight};
    font-size: ${fontSize.normal};
    position: absolute;
    bottom: 0;
    left: 5px;
    top: 9px;
    transition: 0.5s ease all;
    pointer-events: none;
`;

const Span = styled.span`
    display: block;
    width: 103%;
    position: relative;

    &::before{
        content: "";
        height: 3px;
        width: 0%;
        bottom: 0;
        position: absolute;
        background: ${colors.greenLight};
        transition: 0.3s ease width;
        left: 0;
    }
`;

const GroupInput = styled.div`
    position: relative;
    margin: 30px 10px;
`;

const Input = styled.input`
    background: none;
    font-size: 18px;
    padding: 10px 0px 5px 5px;
    display: block;
    width: 100%;
    border: none;
    border-bottom: 1px solid ${colors.greenLight};

    &:focus{
        outline: none;
        color: #000;
    }

    &:focus~${Label},
    &:valid~${Label}{
        top: -18px;
        font-size: 14px;
        color: ${colors.greenLight}; 
    }

    &:focus~${Span}::before,
    &:valid~${Span}::before{
        width: 100%
    }
`;

const ErrorText = styled.p`
    font-size: 12px;
    margin-bottom: 0;
    color: ${colors.error};
    display: none;

    ${props => props.valid === 'true' && css`
        display: none;
    `}

    ${props => props.valid === 'false' && css`
        display: block;
    `}
`;

const ButtonContainer = styled.div`
    align-items: right;
`;

const Button = styled.button`
    height: 50px;
    line-height: 45px;
    width: 30%;
    color: ${colors.white};
    font-weight: bold;
    font-size: ${fontSize.normal};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: .1s ease all;
    margin-bottom: 20px;

    &:hover{
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 1);
    }

    ${props => props.tone === 'light' && css`
        background: ${colors.greenLight};
    `}
    ${props => props.tone === 'dark' && css`
        background: ${colors.greenDark};
    `}
`;

const TableContainer = styled.div`
    display: grid;
    grid-column: span 2;

    @media(max-width: 800px){
        grid-column: span 1;
    }

    ${props => props.name === 'outerWrapper' && css`
        border: 1px solid ${colors.primary};
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
        margin: 20px;
        border-radius: 15px;
        max-width: 800px;
    `}

    ${props => props.name === 'tableWrapper' && css`
        max-height: 720px;
        overflow-y: scroll;
        margin: 20px;
    `}

    div::-webkit-scrollbar{  
        width: 10px;
        height: 10px;
        background-color: ${colors.white};
    }

    div::-webkit-scrollbar-thumb {
        background-color: ${colors.brown};
        border-radius: 50px;
    }
    
    div::-webkit-scrollbar-thumb:hover {
        background-color: #3A4455;
    }

`;

const Table = styled.table`

    border: 1px solid ${colors.secondary};
    border-collapse: separate;
    border-spacing: 0;
    min-width: max-content;
    
    th{
        position: sticky;
        top: 0;
        background-color: ${colors.primary};
        color: #fff;
    }
        
    th,td{
        border: 1px solid #000; 
        padding: 10px;
        text-align: center;
    }

`;

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background: rgba(0, 0, 0, 0.75);
    z-index: 999;
    justify-content: center;
    align-items: center;
    
    ${props => props.isOpen === 'true' && css`
        display: flex;
    `}
    ${props => props.isOpen === 'false' && css`
        display: none;
    `}
`;

const ModalContainer = styled.div`
    position: relative;
    background: #fff;
    min-width: 320px;
    max-width: 480px;
    min-height: 200px;
    max-height: 400px;
    padding: 1rem;
    overflow-y: auto;
    border-radius: 15px;
    border: 3px solid ${colors.border};
`;

const Title = styled.h1`
    grid-column: span 2;
    font-weight: 800;
    color: ${props => props.color};

    @media(max-width: 800px){
        grid-column: span 1;
    }
`;

const Subtitle = styled.h3`
    grid-column: span 2;
    color: ${props => props.color};

    @media(max-width: 800px){
        grid-column: span 1;
    }
`;


export {
    Form,
    Label,
    GroupInput,
    Input,
    Span,
    ErrorText,
    ButtonContainer,
    Button,
    TableContainer,
    Table,
    Modal,
    ModalContainer,
    Title,
    Subtitle,
    colors
};