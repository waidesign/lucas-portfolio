import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  children: React.ReactNode;
  className?: string;
}

export const primaryButtonStyles =
  'inline-flex items-center justify-center gap-1.5 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 px-3.5 py-2 rounded-xs transition-all shadow-xs active:scale-98 cursor-pointer disabled:opacity-50 disabled:pointer-events-none max-w-full text-center';

export const secondaryButtonStyles =
  'inline-flex items-center justify-center gap-1.5 text-xs font-mono text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white px-3 py-1.5 rounded-xs border border-neutral-200 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors cursor-pointer disabled:opacity-50 disabled:pointer-events-none max-w-full text-center';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  download,
  children,
  className = '',
  ...props
}) => {
  const baseStyles = variant === 'primary' ? primaryButtonStyles : secondaryButtonStyles;
  const sizeStyles =
    size === 'sm'
      ? 'px-2.5 py-1 text-xs'
      : size === 'lg'
      ? 'px-5 py-2.5 text-sm font-semibold'
      : '';

  const combinedClass = `${baseStyles} ${sizeStyles} ${className}`.trim();

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === '_blank' && !rel ? 'noopener noreferrer' : rel}
        download={download}
        className={combinedClass}
        onClick={props.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};

export default Button;
