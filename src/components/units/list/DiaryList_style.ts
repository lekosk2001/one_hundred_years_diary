import styled from "@emotion/styled";
import { Button } from "antd";

export const StyledButton = styled(Button)`
	background-color: var(--background-primary-color);
	color: var(--text-color);
	border: 1px solid var(--border-color);
`;

export const DiaryCardList = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 20px 0px;
`;

export const CardImage = styled.img`
	width: 100%;
`;

export const NoDiaryText = styled.p`
	font-size: 13px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: grey;
`;

export const CardHeader = styled.div`
	width: 100%;
	display: flex;
	padding-bottom: 5px;
	justify-content: space-between;
	border-bottom: 1px solid var(--border-color);
	align-items: center;
	margin-bottom: 20px;
`;

export const CardMood = styled.h4`
	font-size: 15px;
`;

export const CardTime = styled.p`
	color: gray;
	font-size: 13px;
`;

export const CardContents = styled.p`
	margin-top: 10px;
	min-height: 40px;
	overflow: hidden;
`;
