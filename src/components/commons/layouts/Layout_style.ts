import styled from "@emotion/styled";

export const Main = styled.main`
	background-color: var(--background-primary-color);
	padding: 30px 30px;
	display: flex;
	align-items: center;
	width: 100%;
	min-width: 360px;
	flex-direction: column;
	border: 1px solid var(--border-color);
	overflow: hidden;

	@media (max-width: 1100px) {
	}

	@media (max-width: 768px) {
		border-left: 0px;
		border-right: 0px;
	}
`;
export const LayoutStyle = styled.div`
	flex-wrap: wrap;
	display: flex;
	padding: 0px 20px;
	margin: 40px auto;
	gap: 20px;
	justify-content: center;

	@media (max-width: 1100px) {
		flex-direction: column;
		align-items: center;
		padding: 0px;
	}
`;

export const Aside = styled.aside`
	display: flex;
	width: 120px;
	max-width: 768px;
	flex-direction: column;
	gap: 10px;
	p {
		font-size: 13px;
	}
	@media (max-width: 1100px) {
		align-items: center;
		width: 100%;
		padding: 0px 20px;
	}
`;
