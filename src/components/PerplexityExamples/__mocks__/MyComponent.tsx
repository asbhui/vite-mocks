const MockMyComponent = vi.fn().mockImplementation(({ prop1, prop2 }) => (
  <div data-testid="mock-my-component">
    Mocked Component {prop1} {prop2}
  </div>
));

export default MockMyComponent;
