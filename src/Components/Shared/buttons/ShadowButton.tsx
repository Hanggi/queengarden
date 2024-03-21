import React from "react";

interface Props {
  children: React.ReactNode;
  [key: string]: any;
}

const ShadowButton = React.forwardRef<HTMLDivElement, Props>(
  ({ children, ...rest }: Props, ref) => {
    return (
      <div
        {...rest}
        ref={ref}
        className={
          "hover-btn-shadow inline-flex items-center justify-center " +
          "h-[36px] w-[36px] lg:h-[40px] lg:w-[40px] 3xl:h-[48px] 3xl:w-[48px] " +
          "rounded-[10px] border-black border-2 bg-white " +
          "shadow-[2px_2px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_rgba(0,0,0,1)] sm:hover-btn-shadow"
        }
      >
        {children}
      </div>
    );
  },
);

export default ShadowButton;
