import styled from 'styled-components';

interface LiProps {
  bgColor: string;
}

export const TodoLi = styled.li<LiProps>`
  list-style: none;
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
  background-color: ${({bgColor}) => bgColor}
`;

interface ButtonProps {
  padding: string;
  bgColor: string;
}

export const MyButton = styled.button<ButtonProps>`
  padding: ${({padding}) => padding};
  background-color: ${({bgColor}) => bgColor};
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: #fff;
  margin-right: 10px;
`;

export const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 15px;
`;