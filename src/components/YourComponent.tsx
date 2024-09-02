import { useMediaQuery, useTheme } from '@mui/material';

const YourComponent: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return <div>{isSmallScreen ? <p>This is a small screen layout</p> : <p>This is a large screen layout</p>}</div>;
};

export default YourComponent;
