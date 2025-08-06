"use client";
import { Component, ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
  locale: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-foreground">
              {this.props.locale === "jp"
                ? "エラーが発生しました"
                : "Something went wrong"}
            </h1>
            <p className="text-muted-foreground mb-6">
              {this.props.locale === "jp"
                ? "予期しないエラーが発生しました。ページを再読み込みしてください。"
                : "An unexpected error occurred. Please reload the page."}
            </p>
            <Button
              onClick={() => window.location.reload()}
              className="px-4 py-2"
            >
              {this.props.locale === "jp" ? "再読み込み" : "Reload"}
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
