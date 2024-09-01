import { Box } from '@mui/material';
import BasicCard from '@components/Tabular/BasicCard';

const bull = (
  <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>
    •
  </Box>
);

const handleClick = () => {
  console.info('You clicked the Chip.');
};

export const TabularData = () => {
  return (
    <Box>
      <h1>Tabular Data</h1>
      <BasicCard
        title="Word of the Day"
        wordOfTheDay={
          <>
            be{bull}nev{bull}o{bull}lent
          </>
        }
        meaning='"a benevolent smile"'
        btnText="Learn More"
        onClick={handleClick}
      />
    </Box>
  );
};
