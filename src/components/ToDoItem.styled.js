import styled from 'styled-components';

export const ToDoItemStyled = styled.div`
   width: 500px;
   height: 30px;
   position: relative;
`;

export const ButtonStyled = styled.button`
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right: 0;
`;

export const EditButtonStyled = styled.button`
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    right: 60px;
`;


export const InputStyled = styled.input`
    position: absolute;
    left: 0;
    top:50%;
    transform: translateY(-50%);
`;

export const TextStyled = styled.span`
    position: absolute;
    top:50%;
    transform: translateY(-50%);
    
    &[data-checked="true"]{
        text-decoration: line-through;
    }
`;
