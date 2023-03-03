import styled from "@emotion/styled";
import { Button, Input } from "antd";
const { TextArea } = Input;

export const FormStyle = styled.form`
	padding: 20px 0px;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const ImageUploadSection = styled.section`
	display: flex;
	gap: 15px;
	width: 100%;
	flex-direction: column;
`;

export const MoodSection = styled.section`
	justify-content: center;
	display: flex;
	flex-direction: column;
	gap: 10px;
	label {
		text-align: center;
		font-size: 13px;
		color: gray;
	}
`;

export const MoodContainer = styled.div`
	justify-content: center;
	display: flex;
	gap: 5px;
	flex-wrap: wrap;
`;

export const StyledButton = styled(Button)`
	background-color: var(--background-primary-color);
	color: var(--text-color);
	border: 1px solid var(--border-color);
`;

export const Mood = styled.button<{ mood: string }>`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 50px;
	background-color: ${(props) =>
		props.mood === props.id
			? "var(--highlight-blue-color)"
			: "var(--background-primary-color)"};
	color: ${(props) =>
		props.mood === props.id ? "#fff" : "var(--text-color)"};
	border: 1px solid
		${(props) =>
			props.mood === props.id
				? "var(--highlight-blue-color)"
				: "var(--border-color)"};
	font-size: 11px;
	cursor: pointer;
	border-radius: 3px;
`;

export const Imoge = styled.h2``;
