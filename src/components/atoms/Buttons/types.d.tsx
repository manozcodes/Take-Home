export type GradientButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
};

export type MutedButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  className?: string;
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export type OutlineButtonProps = {
  text: string;
  type?: 'button' | 'submit' | 'reset';
  fullWidth?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  loading?: boolean;
};
