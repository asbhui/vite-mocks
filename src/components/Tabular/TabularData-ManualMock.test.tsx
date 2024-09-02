import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TabularData } from './TabularData';

/*
Manual Mocking:
Vitest doesn't automatically use mocks from __mocks__ folders for ES modules. You need to manually mock the module in your test file.

Read mocked component from __mocks__ folder.
*/

vi.mock('./BasicCard');

describe('TabularData', () => {
  it('renders manually mocked BasicCard', () => {
    render(<TabularData />);
    const mockedCard = screen.getByTestId('manually-mocked-basic-card');
    expect(mockedCard).toHaveTextContent('Basically this mock card renders');
  });
});
