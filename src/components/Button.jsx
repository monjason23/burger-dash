import styled from "styled-components";

const Button = styled.button`
  padding: ${props => (props.settings ? "8px" : "12px")};
  border: 0px;
  font-weight: bold;
  font-size: 16px;
  color: ${props => (props.primary || props.social ? "#fff" : "inherit")};
  border-radius: 8px;
  margin: 4px;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);

  background: ${props =>
    props.primary
      ? "linear-gradient(to bottom, rgba(248,80,50,1) 0%, rgba(241,111,92,1) 50%, rgba(246,41,12,1) 51%, rgba(240,47,23,1) 71%, rgba(231,56,39,1) 100%)"
      : props.settings
      ? "#fff"
      : props.social
      ? "linear-gradient(to bottom, rgba(120,154,222,1) 0%, rgba(59,89,153,1) 50%, rgba(59,89,153,1) 51%, rgba(90,113,158,1) 100%)"
      : "linear-gradient(to bottom, rgba(226,226,226,1) 0%, rgba(219,219,219,1) 50%, rgba(209,209,209,1) 51%, rgba(254,254,254,1) 100%)"};
`;

export default Button;
