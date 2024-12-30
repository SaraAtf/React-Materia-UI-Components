import styled, { keyframes } from "styled-components";

const StyledButton = styled.button`
	background-color: ${({ $variant }) =>
		$variant === "outline" ? "transparent" : "#0061b2"};
	border: ${({ $variant }) =>
		$variant === "outline" ? "2px solid #0061b2" : "none"};
	padding: 0.75rem 1.5rem;
	border-radius: 0.15rem;
	cursor: pointer;
	transition: 0.5s;
	font-weight: bold;
	color: ${({ $variant }) => ($variant === "outline" ? "#0061b2" : "#fff")};
	box-shadow: 1px 2px 3px #384d7f;
	margin: 0px 0.5rem;
	text-decoration: none;
	&:hover {
		color: #fff;
		background-color: ${({ $variant }) =>
			$variant === "outline" ? "#0061b2" : "#003366"};
	}
`;

const GriadiantButton = styled(StyledButton)`
	background: linear-gradient(45deg, #0061b2, #003366);
`;

const SubmitButton = styled(StyledButton).attrs((props) => ({
	type: "submit",
}))``;

const rotate = keyframes`
        from {    transform: rotate(0deg);  }
        to {    transform: rotate(360deg);  }
   `;
const AnimatedLogo = styled.img`
	animation: ${rotate} infinite 5s linear;
`;

const DarkButton = styled(StyledButton)`
	background-color: ${({ theme }) => theme.dark.backgroundColor};
`;
export default StyledButton;
export { GriadiantButton, SubmitButton, AnimatedLogo, DarkButton };
