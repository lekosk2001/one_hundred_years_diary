import styled from "@emotion/styled";

export const LogoBox = styled.div`
	@media (max-width: 1024px) {
		a {
			display: flex;
			align-items: center;
			gap: 5px;
		}
	}
`;

export const Logo = styled.div`
	font-size: 36px;
	@media (max-width: 1024px) {
		display: flex;
		justify-content: center;
	}
`;

export const LinkLists = styled.ul`
	border-top: 1px solid var(--border-color);
	display: flex;
	flex-direction: column;
	margin: 10px 0px;

	@media (max-width: 1024px) {
		position: fixed;
		flex-direction: row;
		background-color: var(--background-primary-color);
		bottom: 0px;
		margin: 0px;
		width: 100%;
		justify-content: space-around;
		padding: 0px 40px;
		z-index: 2;
	}
`;

export const Title = styled.h1`
	word-break: keep-all;
	@media (max-width: 1024px) {
		font-size: 36px;
		text-align: center;
	}
`;

export const LinkStyle = styled.li`
	display: flex;
	gap: 10px;
	align-items: center;
	font-size: 13px;
	list-style: none;
	padding: 10px 10px;
	border-bottom: 1px solid var(--border-color);
	transition: 0.1s all ease;
	&:hover {
		background-color: var(--background-primary-color);
		color: rgb(22, 119, 255);
	}
	@media (max-width: 1024px) {
		font-size: 16px;
		gap: 5px;
		height: 60px;
		width: 60px;
		border-bottom: 0px;
		flex-direction: column;
		background-color: var(--background-primary-color);
	}
`;
