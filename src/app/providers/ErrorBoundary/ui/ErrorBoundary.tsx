import type { ErrorInfo, ReactNode } from 'react';
import React, { Suspense } from 'react';
import { AppError } from 'widgets/AppError/ui/AppError';

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

	static getDerivedStateFromError() {
		return { hasError: true };
	}

	componentDidCatch(error: Error, info: ErrorInfo) {
		console.log(error, info.componentStack);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (hasError) {
			return (
				<Suspense fallback={''}>
					<AppError />
				</Suspense>
			);
		}

		return children;
	}
}
