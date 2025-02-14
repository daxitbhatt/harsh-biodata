import React, { useState, useEffect } from "react";
import { useTrail, a } from "@react-spring/web";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 20,
    from: { opacity: 0, y: 20 },
  });

  return (
    <div className="flex flex-wrap">
      {trail.map(({ y, ...style }, index) => (
        <a.div
          key={index}
          style={{
            ...style,
            transform: y.to((yVal) => `translate3d(0,${yVal}px,0)`),
          }}
          className="text-center mt-10"
        >
          {items[index]}
        </a.div>
      ))}
    </div>
  );
};

const TitleText = () => {
  const [open, setOpen] = useState(false);
  const [showSecondText, setShowSecondText] = useState(false);

  useEffect(() => {
    setOpen(true);
    const timer = setTimeout(() => {
      setShowSecondText(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Trail open={open}>
      <h1 className="text-3xl sm:text-[3em] font-barlow font-bold text-black">
        Hi there,
        <span className="text-3xl sm:hidden ">👋🏻</span>
      </h1>
      {showSecondText && (
        <h1 className="text-3xl sm:text-[3em] font-barlow font-bold text-black">
          &nbsp;&nbsp;&nbsp;&nbsp;I'm
        </h1>
      )}
    </Trail>
  );
};

export default TitleText;
