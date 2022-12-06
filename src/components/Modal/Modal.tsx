import React, { FC } from 'react';
import { MyButton } from '../Todo/Todo.styled';
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled';

interface ModalProps {
	setIsModal: (value: boolean) => void;
	value: string;
	setValue: (text: string) => void;
	updateTodo: () => void;
}

const Modal: FC<ModalProps> = ({ setIsModal, setValue, value, updateTodo }) => {
	return (
		<ModalWrapper>
			<ModalContent>
				<CloseButton onClick={() => setIsModal(false)}>Close</CloseButton>
				<input
					type={'text'}
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
				<MyButton
					type='button'
					onClick={updateTodo}
					bgColor={'green'}
					padding={'5px'}
				>
					update
				</MyButton>
			</ModalContent>
		</ModalWrapper>
	);
};

export default Modal;
