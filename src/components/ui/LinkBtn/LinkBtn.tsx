import React from "react";
import styles from './LinkBtn.module.css';

interface LinkBtnProps {
  text: string;
  href?: string;
  target?: string;
  className?: string;
  onClick?: () => void;
}

const LinkBtn: React.FC<LinkBtnProps> = ({ text, href, target, className, onClick }) => {
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

export default LinkBtn;