import type { CounterScema } from 'entity/Counter';
import type { UserScema } from 'entity/User';
import type { LoginScema } from 'features/AuthByUsername';

export interface StateScema {
	counter: CounterScema;
	user: UserScema;
	loginForm: LoginScema;
}
