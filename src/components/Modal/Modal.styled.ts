import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(112, 110, 110, 0.616);
`;

export const ModalContent = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  position: relative;
`;

export const CloseButton = styled.button`
  top: 0;
  right: 0;
  margin: 10px;
  position: absolute;
`;
