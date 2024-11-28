import React from "react";

// Error Boundary Props Type
interface ErrorBoundaryProps {
    children: React.ReactNode;
}

// Error Boundary State Type
interface ErrorBoundaryState {
    hasError: boolean;
}

// Dynamic Import Error Boundary
export default class DynamicImportErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    // eslint-disable-next-line
    static getDerivedStateFromError(_: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.error("Dynamic Import Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div
                    className={`text-white inset-0 w-full h-full z-[999] bg-[#0000002d] grid place-content-center`}
                >
                    <p>Error. Por favor, revise su conexión.</p>
                    <button onClick={() => window.location.reload()}>
                        Reintentar
                    </button>
                </div>
            );
        }

        return this.props.children;
    }
}
