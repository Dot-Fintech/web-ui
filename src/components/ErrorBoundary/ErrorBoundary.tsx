import React from 'react';

type AnalyticsErrorBoundaryErrorInfo = {
  componentStack: string;
};

type State = {
  hasError: boolean;
};

type Props = {
  fallback: () => JSX.Element;
};

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(
    error: Error,
    info?: AnalyticsErrorBoundaryErrorInfo,
  ): void {
    // TODO: replace this with proper logging
    console.error(error, info);
  }

  render(): React.ReactNode {
    const Fallback = this.props.fallback;

    if (this.state.hasError) {
      return <Fallback />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
