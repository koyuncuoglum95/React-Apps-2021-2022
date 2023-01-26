import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async Component', () => {
    test('renders Posts if requests succeeds', async () => {
        // Working with Mocks
        // Controlling different fetch results
        
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{ id: 'p1', title: 'First post' }],
        });

        render(<Async />);

        // This is testing <li></li>
        const listItemElements = await screen.findAllByRole('listitem', {}, {});
        expect(listItemElements).not.toHaveLength(0);
    })
})