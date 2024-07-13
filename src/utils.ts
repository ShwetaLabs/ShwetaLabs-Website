import { useMediaQuery } from 'react-responsive';
const minWidthForDesktop = '800px';
export const isDesktop = () => {
  return useMediaQuery({ minWidth: minWidthForDesktop });
};
