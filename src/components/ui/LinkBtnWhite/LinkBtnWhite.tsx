import React from "react";
import styles from './LinkBtnWhite.module.css';

interface LinkBtnWhiteProps {
  text: string;
  href?: string;
  target?: string;
  className?: string;
  onClick?: () => void;
}

const LinkBtnWhite: React.FC<LinkBtnWhiteProps> = ({ text, href, target, className, onClick }) => {
  const commonProps = {
    onClick,
    className: `${className} ${styles.btnLink} flex items-center h-12 w-fit`,
  };

  return href ? (
    <a 
      href={href} 
      target={target}
      rel="noopener noreferrer"
      {...commonProps}
    >
      <em>
        <span data-text={text}>{text}</span>
      </em>
    </a>
  ) : (
    <p {...commonProps}>
      <em>
        <span data-text={text}>{text}</span>
      </em>
    </p>
  );
};

export default LinkBtnWhite;