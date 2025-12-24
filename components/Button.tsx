
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'danger' | 'highlight';
  size?: 'large' | 'medium' | 'small' | 'full';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  loading = false,
  disabled = false,
  onClick,
  children,
  icon,
  className = '',
}) => {
  const baseStyles = "relative flex items-center justify-center font-medium transition-all duration-200 active:scale-[0.98] outline-none";
  
  const variants = {
    primary: "bg-[#0052D9] text-white shadow-[0_4px_12px_rgba(0,82,217,0.3)] hover:bg-[#0042B0]",
    highlight: "bg-gradient-to-r from-[#0052D9] to-[#2B7FFF] text-white shadow-[0_6px_20px_rgba(0,82,217,0.4)] hover:brightness-110",
    secondary: "bg-[#EEF4FF] text-[#0052D9] hover:bg-[#D9E6FF]",
    tertiary: "bg-white border border-[#0052D9] text-[#0052D9] hover:bg-gray-50",
    ghost: "bg-transparent text-[#64748B] hover:text-[#334155]",
    danger: "bg-[#FFF2F2] border border-[#FF4D4F] text-[#FF4D4F] hover:bg-[#FFECEC]",
  };

  const sizes = {
    large: "h-[56px] px-8 rounded-xl text-lg",
    medium: "h-[48px] px-6 rounded-lg text-base",
    small: "h-[32px] px-4 rounded-md text-sm",
    full: "w-full h-[56px] rounded-xl text-lg",
  };

  const disabledStyles = disabled 
    ? "opacity-40 cursor-not-allowed shadow-none active:scale-100" 
    : "cursor-pointer";

  return (
    <button
      onClick={!disabled && !loading ? onClick : undefined}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${disabledStyles} ${className}`}
    >
      {loading ? (
        <div className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span className="opacity-80">加载中...</span>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-2">
          {icon}
          {children}
        </div>
      )}
    </button>
  );
};

export default Button;
