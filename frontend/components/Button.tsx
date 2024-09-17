import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-2 rounded-md border ${variant} ${
        full && "w-full"
      } p-2 text-sm`}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={16} height={16} />}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
