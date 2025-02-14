import React, { useState, useEffect } from "react";
import { useSpring, a } from "@react-spring/web";

const BioData = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const fadeInStyle = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(20px)",
    config: { mass: 5, tension: 2000, friction: 200 },
  });

  const [activeTab, setActiveTab] = useState("personal");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <a.div
      style={fadeInStyle}
      className="mt-56 md:mt-10 w-96 mb-10 flex flex-col justify-center items-center font-barlow"
    >
      {/* Tabs */}
      <div className="radio-inputs flex justify-center mb-6">
        <label className="radio cursor-pointer">
          <input
            type="radio"
            name="radio"
            checked={activeTab === "personal"}
            onChange={() => handleTabChange("personal")}
          />
          <span className="name">Personal</span>
        </label>
        <label className="radio cursor-pointer">
          <input
            type="radio"
            name="radio"
            checked={activeTab === "family"}
            onChange={() => handleTabChange("family")}
          />
          <span className="name">Family</span>
        </label>
        <label className="radio cursor-pointer">
          <input
            type="radio"
            name="radio"
            checked={activeTab === "contact"}
            onChange={() => handleTabChange("contact")}
          />
          <span className="name">Contact</span>
        </label>
      </div>

      {/* Tab Content */}
      <div className="bg-white shadow-lg rounded-lg p-8 border border-gray-200 h-[500px]">
        {activeTab === "personal" && (
          <section>
            <h2 className="text-3xl font-bold text-red-500 mb-4">
              Personal Details
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Name:</strong> Harsh Bhatt
              </li>
              <li>
                <strong>Date Of Birth:</strong> 22/05/2005
              </li>
              <li>
                <strong>Place Of Birth:</strong> Gondal, India
              </li>

              <li>
                <strong>Rashi:</strong> Cancer (kark)
              </li>
              <li>
                <strong>Height:</strong> 5'8"
              </li>
              <li>
                <strong>Weight:</strong> 80 kg
              </li>
              <li>
                <strong>Bachelors:</strong> BBA (sem-2)
              </li>
              <li>
                <strong>Work:</strong> sahkari mandli (clerk)
              </li>
            </ul>
          </section>
        )}

        {activeTab === "family" && (
          <section>
            <h2 className="text-3xl font-bold text-red-500 mb-4">
              Family Details
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Father's Name:</strong> Devendrabhai Jagdishbhai Bhatt
              </li>
              <li>
                <strong>Father's Occupation:</strong> sahkari mandli (clerk)
              </li>
              <li>
                <strong>Mother's Name:</strong> Falguniben Bhatt
              </li>
              <li>
                <strong>Siblings:</strong> 1 Sister (Kinnari Bhatt)
              </li>
            </ul>
          </section>
        )}

        {activeTab === "contact" && (
          <section>
            <h2 className="text-3xl font-bold text-red-500 mb-4">
              Contact Details
            </h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Phone:</strong> +91 97262 25672
              </li>
              <li>
                <strong>Address:</strong>Ramji Mandir, Near Chora, Ghoghavadar,
                Gondal
              </li>
            </ul>
          </section>
        )}
      </div>
    </a.div>
  );
};

export default BioData;
