import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BasicCard from './BasicCard';

describe('BasicCard component', () => {
  it('renders with required props', () => {
    const title = 'Test Title';
    const wordOfTheDay = 'Test Word';
    const meaning = 'something different';
    const btnText = 'Test Button';

    render(<BasicCard title={title} wordOfTheDay={wordOfTheDay} meaning={meaning} btnText={btnText} />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(wordOfTheDay)).toBeInTheDocument();
    expect(screen.getByText(/meaning/i)).toBeInTheDocument();
    expect(screen.getByText(btnText)).toBeInTheDocument();
  });

  it('renders with optional props', () => {
    const title = 'Test Title';
    const wordOfTheDay = 'Test Word';
    const meaning = 'something different';
    const btnText = 'Test Button';
    const onClick = vi.fn();

    render(
      <BasicCard title={title} wordOfTheDay={wordOfTheDay} meaning={meaning} btnText={btnText} onClick={onClick} />,
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(wordOfTheDay)).toBeInTheDocument();
    expect(screen.getByText(/meaning/i)).toBeInTheDocument();
    expect(screen.getByText(btnText)).toBeInTheDocument();
    expect(onClick).not.toHaveBeenCalled();
  });

  it('handles button click event', () => {
    const title = 'Test Title';
    const wordOfTheDay = 'Test Word';
    const meaning = 'Test Meaning';
    const btnText = 'Test Button';
    const onClick = vi.fn();

    render(
      <BasicCard title={title} wordOfTheDay={wordOfTheDay} meaning={meaning} btnText={btnText} onClick={onClick} />,
    );

    const button = screen.getByText(btnText);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('renders typography with props', () => {
    const title = 'Test Title';
    const wordOfTheDay = 'Test Word';
    const meaning = 'Test Meaning';
    const btnText = 'Test Button';

    render(<BasicCard title={title} wordOfTheDay={wordOfTheDay} meaning={meaning} btnText={btnText} />);

    const typography = screen.getByText(title);

    expect(typography).toHaveTextContent(title);
  });

  it('renders card content', () => {
    const title = 'Test Title';
    const wordOfTheDay = 'Test Word';
    const meaning = 'Test Meaning';
    const btnText = 'Test Button';

    render(<BasicCard {...{ title, wordOfTheDay, meaning, btnText }} />);

    const cardContent = screen.getByTestId('CardContent');
    expect(cardContent).toBeInTheDocument();
  });

  const defaultProps = {
    title: 'Word of the Day',
    wordOfTheDay: 'Ephemeral',
    meaning: 'Lasting for a very short time',
    btnText: 'Learn More',
    onClick: vi.fn(),
  };

  it('calls onClick when button is clicked', async () => {
    render(<BasicCard {...defaultProps} />);

    const button = screen.getByRole('button', { name: defaultProps.btnText });
    await userEvent.click(button);

    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });
});
