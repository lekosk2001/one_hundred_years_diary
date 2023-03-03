import styled from "@emotion/styled";
import { Input } from "antd";

export const StyledInput = styled(Input)`
	background-color: var(--background-primary-color);
	color: var(--text-color);
	border: 1px solid var(--border-color);
`;

export const SettingContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	border-top: 1px solid var(--border-color);
`;

export const SettingItem = styled.div`
	cursor: pointer;
	display: flex;
	align-items: center;
	padding: 20px 20px;
	border-bottom: 1px solid var(--border-color);
	justify-content: space-between;
	transition: 0.1s all ease;
	&:hover {
		background-color: var(--background-secondary-color);
	}

	@media (max-width: 1100px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 10px;
	}
`;

export const SettingItemLabelBox = styled.span`
	display: flex;
	flex-direction: column;
	min-width: 50%;
	gap: 5px;
`;

export const SettingItemLabel = styled.label`
	font-size: 13px;
	font-weight: 800;
`;

export const SettingItemDesc = styled.p`
	font-size: 11px;
	color: gray;
`;
