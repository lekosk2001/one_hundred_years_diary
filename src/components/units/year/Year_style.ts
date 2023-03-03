import styled from "@emotion/styled";
import { Button } from "antd";

export const CalendarContainer = styled.section`
	display: flex;
	flex-wrap: wrap;
	gap: 30px;
	padding: 30px 0px;
	justify-content: center;
	transition: 0.1s all ease;
`;

export const StyledButton = styled(Button)`
	background-color: var(--background-primary-color);
	color: var(--text-color);
	border: 1px solid var(--border-color);
`;
