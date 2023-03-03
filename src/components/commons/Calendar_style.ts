import styled from "@emotion/styled";

export const MonthContainer = styled.div`
	display: flex;
	gap: 20px;
	min-height: 130px;
	flex-wrap: wrap;
`;

export const DayBlockBlank = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 3px;
`;

export const DayBlock = styled.div`
	overflow: hidden;
	width: 40px;
	height: 40px;
	border-radius: 3px;
	border: 1px solid var(--border-color);
	flex-direction: column;
	display: flex;
	padding: 5px;
	cursor: pointer;
	transition: 0.1s all ease;
	&:hover {
		background-color: var(--border-color);
		p {
			text-decoration: underline;
		}
	}
`;

export const DayBlockNumber = styled.p`
	font-size: 11px;
	line-height: 11px;
`;

export const Imoge = styled.h1`
	font-size: 40px;
	line-height: 25px;
`;

export const MonthTitle = styled.h4`
	flex-direction: column;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 40px;
	height: 40px;
	border-radius: 3px;
	border: 1px solid var(--border-color);
`;

export const CurrentYearMini = styled.p`
	font-weight: 400;
	font-size: 9px;
	line-height: 9px;
`;

export const DayBlockContainer = styled.div`
	min-width: 310px;
	max-width: 625px;
	display: flex;
	gap: 5px;
	flex-wrap: wrap;
`;
