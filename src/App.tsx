import { Stack, Typography } from '@mui/material';
import { TabularData } from '@components/Tabular/TabularData';

function App() {
  return (
    <Stack display={'flex'} justifyContent={'center'} alignItems={'center'} height={'100vh'} gap={5}>
      <Typography variant="h1">Hello, world!</Typography>
      <TabularData />
    </Stack>
  );
}

export default App;
