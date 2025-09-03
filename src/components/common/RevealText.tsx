import clsx from "clsx";
import { useEffect, useState } from "react";

const CharacterReveal = ({ isAnimating = false, char, delay }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsVisible(true), delay);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(false);
    }
  }, [isAnimating, delay]);

  return (
    <span
      className={`inline-block transition-all duration-700 ease-out ${
        isVisible
          ? "transform translate-y-0 filter blur-0 opacity-100"
          : "transform translate-y-8 filter blur-md opacity-0"
      }`}
    >
      {char}
    </span>
  );
};

const TextReveal = ({
  text = ["Unlock Your", "Team's Potential"],
  duration = 80,
  textClassName = "text-4xl font-semibold",
}) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), 100);
  };

  useEffect(() => {
    startAnimation();
  }, []);

  // Calculate total character count up to current position
  const getTotalCharacterDelay = (lineIndex, charIndex) => {
    let totalChars = 0;
    for (let i = 0; i < lineIndex; i++) {
      totalChars += text[i].length;
    }
    return (totalChars + charIndex) * duration;
  };

  return (
    <div className="">
      <div className="text-center md:text-left">
        {text.map((line, lineIndex) => (
          <div key={`line-${lineIndex}`} className="mb-2 last:mb-0">
            <h1
              className={clsx(textClassName, "leading-none")}
              style={{ whiteSpace: "pre" }}
            >
              {line.split("").map((char, charIndex) => (
                <span key={`line-${lineIndex}-char-${charIndex}`}>
                  <CharacterReveal
                    isAnimating={isAnimating}
                    char={char}
                    delay={getTotalCharacterDelay(lineIndex, charIndex)}
                  />
                </span>
              ))}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export { TextReveal };
