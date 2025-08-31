// ErrorBoundary.tsx
import React from "react";

type Props = {
  fallback?: React.ReactNode;
  onReset?: () => void;
  children: React.ReactNode;
};
type State = { hasError: boolean; error?: Error };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  reset = () => {
    this.setState({ hasError: false, error: undefined });
    this.props.onReset?.();
  };

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div className="p-4 rounded-lg border">
            <h2 className="font-semibold">Something went wrong.</h2>
            <p className="text-sm opacity-80">{this.state.error?.message}</p>
            <button
              className="mt-3 px-3 py-1 rounded bg-black text-white"
              onClick={this.reset}
            >
              Try again
            </button>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
