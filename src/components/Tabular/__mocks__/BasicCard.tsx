const BasicCard = vi
  .fn()
  .mockImplementation(() => <div data-testid="manually-mocked-basic-card">Basically this mock card renders</div>);

export default BasicCard;
