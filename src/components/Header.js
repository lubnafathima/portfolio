import React, { useState } from "react";

const Header = ({header_text}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full flex flex-col justify-center text-center">
      <h1
        className={`text-[10vw] lg:text-[11vw] font-thin leading-none tracking-tighter uppercase border-b-2 border-b-black pb-6 ${
          isHovered ? "hovering" : "mouse-out"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        dangerouslySetInnerHTML={{ __html: header_text }}
      />
    </div>
  );
};

export default Header;
