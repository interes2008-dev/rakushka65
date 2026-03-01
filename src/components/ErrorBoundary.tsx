import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a1628",
          color: "#e2e8f0",
          fontFamily: "sans-serif",
          padding: "20px",
          textAlign: "center",
        }}>
          <div>
            <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>
              Произошла ошибка загрузки
            </h1>
            <p style={{ color: "#94a3b8", marginBottom: "16px" }}>
              Попробуйте обновить страницу
            </p>
            <button
              onClick={() => window.location.reload()}
              style={{
                padding: "12px 24px",
                background: "#2dd4a8",
                color: "#0a1628",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "16px",
              }}
            >
              Обновить страницу
            </button>
            <pre style={{
              marginTop: "24px",
              padding: "16px",
              background: "#1e293b",
              borderRadius: "8px",
              fontSize: "12px",
              color: "#f87171",
              textAlign: "left",
              maxWidth: "600px",
              overflow: "auto",
            }}>
              {this.state.error?.message}
            </pre>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
