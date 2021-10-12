import React from 'react';
import styles from './button.module.css';
interface IButtonProps {
  variant: 'primary' | 'danger' | 'secondary';
  disable?: boolean;
  children: React.ReactNode;
  onClick?(): void;
}

function Button({ children, variant, disable, onClick }: IButtonProps) {
  let styleVariant;
  switch (variant) {
    case 'danger':
      styleVariant = styles.btnDanger;
      break;
    case 'primary':
      styleVariant = styles.btnPrimary;
      break;
    case 'secondary':
      styleVariant = styles.btnSecondary;
      break;

    // default:
    //   break;
  }
  if (!onClick) {
    <button className={`${styles.btn} ${styleVariant}`}>{children}</button>;
  }

  return (
    <button onClick={onClick} className={`${styles.btn} ${styleVariant}`}>
      {children}
    </button>
  );
}

export default Button;
