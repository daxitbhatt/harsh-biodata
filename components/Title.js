import React, { useState, useEffect } from "react";
import { useTrail, a } from "@react-spring/web";

const Trail = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 200 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    from: { opacity: 0, x: 20 },
  });

  return (
    <div className="flex flex-wrap mt-10">
      {trail.map(({ x, ...style }, index) => (
        <a.div
          key={index}
          style={{
            ...style,
            transform: x.to((xVal) => `translate3d(0,${xVal}px,0)`),
          }}
          className="text-center"
        >
          {items[index]}
        </a.div>
      ))}
    </div>
  );
};

const Title = () => {
  const [open, setOpen] = useState(false);

  // Trigger animation after 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setOpen(true); // Start animation after 1.5 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  return (
    <Trail open={open}>
      <h1 className="text-[4em] sm:text-[5em] font-courgette font-bold text-[#990000]">
        <span className="text-black">Harsh</span>&nbsp;
      </h1>
      <h1 className="text-[4em] sm:text-[5em] font-courgette font-bold text-[#990000]">
        Bhatt
      </h1>
    </Trail>
  );
};

export default Title;
