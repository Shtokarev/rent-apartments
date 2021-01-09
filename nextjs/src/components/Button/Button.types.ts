export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  Readonly<{
    isLoading?: boolean;
    glow?: boolean;
  }>;
