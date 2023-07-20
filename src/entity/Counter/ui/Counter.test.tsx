import { screen } from '@testing-library/react';
import { componentRender } from 'shared/lib/tests/componentRender/componentRender';
import { Counter } from './Counter';
import userEvent from '@testing-library/user-event';

describe('Counter', () => {
	test('Counter rendered', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		expect(screen.getByTestId('value-title')).toHaveTextContent('10');
	});

	test('Increment', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		userEvent.click(screen.getByTestId('increment-btn'));
		setTimeout(() => {
			expect(screen.getByTestId('value-title')).toHaveTextContent('11');
		}, 50);
	});

	test('Decrement', () => {
		componentRender(<Counter />, {
			initialState: { counter: { value: 10 } },
		});
		userEvent.click(screen.getByTestId('decrement-btn'));
		setTimeout(() => {
			expect(screen.getByTestId('value-title')).toHaveTextContent('9');
		}, 50);
	});
});
