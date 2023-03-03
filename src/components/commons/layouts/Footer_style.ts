import styled from "@emotion/styled";

export const Footer = styled.footer`
	flex-direction: column;
	gap: 5px;
	display: flex;
	color: gray;
	font-size: 11px;
	justify-content: center;
	align-items: center;
	text-align: center;
	border-top: 1px solid var(--border-color);
	height: 100px;
	@media (max-width: 1100px) {
		margin-bottom: 60px;
	}
`;
