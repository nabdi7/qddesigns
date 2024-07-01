import Image from "next/image";
import Link from "next/link";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
  shape: "circle" | "rectangle";
  href?: string;
  onClick?: () => void;
};

const Button = ({ type, title, icon, variant, full, shape, href, onClick }: ButtonProps) => {
    const shapeClasses = shape === 'circle' ? 'rounded-full' : 'rounded-md';
    const buttonContent = (
      <button
        className={`flex items-center justify-center gap-3 border ${variant} ${full ? 'w-full' : ''} ${shapeClasses}`}
        type={href ? 'button' : type}
      >
        {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <span className="bold-16 whitespace-nowrap cursor-pointer">{title}</span>
      </button>
    );
  
    if (href) {
      return (
        <Link href={href} onClick={onClick}>
          {buttonContent}
        </Link>
      );
    }
  
    return buttonContent;
  }
  
  export default Button;
