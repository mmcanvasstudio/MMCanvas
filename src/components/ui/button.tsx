import Link from 'next/link';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

/**
 * Button component for CTAs and links
 */
export default function Button({ href, children, variant = 'primary', className = '' }: ButtonProps): JSX.Element {
  const baseStyles = 'inline-block px-8 py-3 rounded-md font-medium transition-custom text-center';
  
  const variantStyles = {
    primary: 'bg-foreground text-background hover:bg-gray-light hover:text-foreground',
    secondary: 'bg-transparent border-2 border-foreground text-foreground hover:bg-foreground hover:text-background',
  };

  return (
    <Link 
      href={href} 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
