import type { ErrorInfo, ReactNode } from 'react';
import React, { Suspense } from 'react';
import { AppError } from 'widgets/Error/ui/AppError';

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrourBoundaryState {
	hasError: boolean;
}

export class ErrorBoundary extends React.Component<
	ErrorBoundaryProps,
	ErrourBoundaryState
> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: Error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		// Example "componentStack":
		//   in ComponentThatThrows (created by App)
		//   in ErrorBoundary (created by App)
		//   in div (created by App)
		//   in App
		console.log(error, info.componentStack);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (hasError) {
			// You can render any custom fallback UI
			return (
				<Suspense fallback={''}>
					<AppError />
				</Suspense>
			);
		}

		return children;
	}
}
