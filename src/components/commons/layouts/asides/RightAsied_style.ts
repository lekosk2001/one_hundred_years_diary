import styled from "@emotion/styled";

export const TotalYearsSection = styled.section`
	max-width: 495px;
	width: 100%;
	padding: 10px 0px;
`;

export const Birthday = styled.section`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 5px;
`;

export const AsideText = styled.p``;

export const YearBlockContainer = styled.div`
	flex-wrap: wrap;
	display: flex;
	gap: 5px;
`;

export const FutureBlock = styled.div`
	cursor: pointer;
	text-align: center;
	width: 20px;
	height: 20px;
	font-size: 9px;
	line-height: 20px;
	border: 1px solid var(--border-color);
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	background-color: var(--background-primary-color);
`;

export const PresentBlock = styled.div`
	cursor: pointer;
	text-align: center;
	width: 20px;
	height: 20px;
	font-size: 9px;
	line-height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	background-color: var(--highlight-blue-color);
	border: 1px solid var(--highlight-blue-color);
	color: #fff;
`;

export const PastBlock = styled.div`
	cursor: pointer;
	color: #000;
	text-align: center;
	width: 20px;
	height: 20px;
	font-size: 9px;
	line-height: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 3px;
	background-color: var(--highlight-yellow-color);
	border: 1px solid var(--highlight-yellow-color);
`;
