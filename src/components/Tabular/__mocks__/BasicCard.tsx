import { Button } from '@mui/material';
type Props = {
  onClick?: () => void;
};

const BasicCard = vi.fn().mockImplementation(({ onClick }: Props) => {
  return (
    <>
      <div data-testid="manually-mocked-basic-card">Basically this mock card renders</div>
      {onClick && (
        <Button data-testid="manually-mocked-basic-card-button" onClick={onClick}>
          Click me
        </Button>
      )}
    </>
  );
});

export default BasicCard;
