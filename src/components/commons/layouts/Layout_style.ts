import styled from "@emotion/styled";

export const Main = styled.main`
	background-color: #fff;
	padding: 30px 30px;
	display: flex;
	align-items: center;
	width: 768px;
	min-width: 360px;
	flex-direction: column;
	border: 1px solid #dae1e6;
	overflow: hidden;
`;
export const LayoutStyle = styled.div`
	flex-wrap: wrap;
	display: flex;
	padding: 0px 20px;
	margin: 40px auto;
	gap: 20px;
	justify-content: center;
`;

export const Aside = styled.aside`
	display: flex;
	width: 120px;
	flex-direction: column;
	gap: 10px;
	p {
		font-size: 13px;
	}
`;

export const Footer = styled.footer`
	display: flex;
	color: gray;
	font-size: 11px;
	justify-content: center;
	align-items: center;
	border-top: 1px solid #dae1e6;
	height: 100px;
`;
