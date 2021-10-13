import React from 'react';
import styles from './button.module.css';
interface IButtonProps {
  variant: 'primary' | 'danger' | 'secondary' | 'success' | 'warning';
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
    case 'success':
      styleVariant = styles.btnSuccess;
      break;
    case 'secondary':
      styleVariant = styles.btnSecondary;
      break;
    case 'warning':
      styleVariant = styles.btnWarning;
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
