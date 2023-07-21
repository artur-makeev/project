import type { CounterScema } from 'entity/Counter';
import type { UserScema } from 'entity/User';

export interface StateScema {
	counter: CounterScema;
	user: UserScema;
}
