import React from 'react';
import styles from './button.module.css';
interface IButtonProps {
  // label: string;
  variant: 'primary' | 'danger';
  // disable: boolean;
  children: React.ReactNode;
  onClick(): void;
}

function Button({ children, variant, onClick }: IButtonProps) {
  let styleVariant;
  switch (variant) {
    case 'danger':
      styleVariant = styles.btnDanger;
      break;
    case 'primary':
      styleVariant = styles.btnPrimary;
      break;

    // default:
    //   break;
  }

  return (
    <button onClick={onClick} className={`${styles.btn} ${styleVariant}`}>
      {children}
    </button>
  );
}

export default Button;
