import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../../theme';

export const Wrapper = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #e5e1da;
  padding: 10px;
  text-decoration: none;
  color: ${theme.color.text.primary};
  background: ${theme.color.foreground};
  align-items: center;
  transition: box-shadow 0.15s ease-in-out;

  &:hover {
    box-shadow: ${theme.boxShadow.soft};
    z-index: 1;
  }
`;

export const Album = styled.img`
  height: 100%;
  width: auto;
  object-fit: contain;
  aspect-ratio: 1;
  border-radius: ${theme.borderRadius}px;
  box-shadow: ${theme.boxShadow.soft};
`;

export const MainInfo = styled.div`
  margin-left: 10px;
`;

export const Name = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Artist = styled.div``;

export const AdditionalInfo = styled.div`
  margin-left: auto;
`;

export const Info = styled.div`
  display: flex;
  align-items: baseline;
`;

export const Parameter = styled.div`
  color: ${theme.color.text.tertiary};
  font-size: 12px;
`;

export const Value = styled.div`
  margin-left: 5px;
  color: ${theme.color.text.secondary};
`;