import styled from "@emotion/styled";

export const GraphContainer = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
	border-top: 1px solid var(--border-color);
`;

export const GraphItem = styled.div`
	overflow: hidden;
	display: flex;
	align-items: center;
	padding: 20px 20px;
	border-bottom: 1px solid var(--border-color);
	justify-content: space-between;
	transition: 0.1s all ease;
	flex-direction: column;
	&:hover {
		background-color: var(--background-secondary-color);
	}
`;

export const GraphItemLabel = styled.label`
	font-size: 13px;
	font-weight: 800;
`;

export const GraphItemDesc = styled.p`
	font-size: 11px;
	color: gray;
	margin-bottom: 5px;
`;
