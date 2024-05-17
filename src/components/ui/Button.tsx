type ButtonProps = {
  title: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
  className?: string;
  isFullWidth?: boolean;
  disabled?: boolean;
};

const Button = ({
  className,
  title,
  variant = "primary",
  isFullWidth = false,
  disabled = false,
  onClick,
}: ButtonProps) => {
  const fullWidthStyles = isFullWidth ? `w-full` : ``;

  const commonStyles = `text-alien-yellow font-maze-font text-2xl px-4 py-2 disabled:cursor-not-allowed ${fullWidthStyles}`;

  const buttonsStyles = {
    primary: `${commonStyles} border-4 border-alien-yellow`,
    secondary: `${commonStyles}`,
  };

  return (
    <button
      className={`${buttonsStyles[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
