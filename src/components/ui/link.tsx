import NextLink from 'next/link';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

/**
 * Custom link component with external link handling
 */
export default function CustomLink({ href, children, className = '', external = false }: CustomLinkProps): JSX.Element {
  const baseStyles = 'transition-custom hover:text-accent';
  
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${className}`}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} className={`${baseStyles} ${className}`}>
      {children}
    </NextLink>
  );
}
