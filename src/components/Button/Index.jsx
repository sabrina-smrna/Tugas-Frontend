import styled, { css } from 'styled-components';

// Warna tombol
const colors = {
  primary: "#4361ee",
  secondary: "#b5179e",
};

// Ukuran tombol berdasarkan size props
const sizes = {
  sm: {
    fontSize: '0.8rem',
    padding: '0.2rem 0.5rem',
  },
  md: {
    fontSize: '1rem',
    padding: '0.5rem 1rem',
  },
  lg: {
    fontSize: '1.3rem',
    padding: '0.5rem 1rem',
  },
};

const Button = styled.button`
  font-size: ${({ size = 'md' }) => sizes[size].fontSize};
  padding: ${({ size = 'md' }) => sizes[size].padding};

  border: none;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;

  background-color: ${({ variant = 'primary' }) => colors[variant]};

  ${({ full }) =>
    full &&
    css`
      display: block;
      width: 100%;
    `}
`;

export default Button;
