import Image from "next/image";
import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
}

const Phone = ({ imgSrc, className, dark = false, ...props }: PhoneProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      {...props}
    >
      <Image
        src={
          dark
            ? "/phone-template-dark-edges.png"
            : "/phone-template-white-edges.png"
        }
        alt="phone template"
        layout="fill"
        objectFit="cover"
        className="pointer-events-none -z-50 select-none"
      />
      <div className="absolute -z-10 inset-0">
        <Image
          src={imgSrc}
          alt="phone content"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};
export default Phone;
