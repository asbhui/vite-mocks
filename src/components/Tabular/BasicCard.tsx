import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactNode } from 'react';

type Props = {
  title: string;
  wordOfTheDay: ReactNode;
  meaning: string;
  btnText: string;
  onClick?: () => void;
};

const Meaning = ({ heading = 'well meaning and kindly.', meaning }: { heading?: string; meaning: string }) => (
  <>
    <Typography variant="body2">{heading}</Typography>
    <Typography variant="body2">{meaning}</Typography>
  </>
);

/**
 * MUI Card component
 */
export default function BasicCard({ title, wordOfTheDay, meaning, onClick, btnText }: Props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent data-testid="CardContent">
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {title}
        </Typography>
        <Typography variant="h5" component="div">
          {wordOfTheDay}
        </Typography>
        <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography>
        <Meaning meaning={meaning} />
      </CardContent>
      <CardActions>
        <Button size="small" onClick={onClick}>
          {btnText}
        </Button>
      </CardActions>
    </Card>
  );
}
