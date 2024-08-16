import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

interface IFAQPopup {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleFAQ: () => void;
}

const FAQPopup: React.FC<IFAQPopup> = ({
  question,
  answer,
  isOpen,
  toggleFAQ,
}) => {
  return (
    <div className="description">
      <div className="faqContant">
        <div
          onClick={toggleFAQ}
          className={isOpen ? "faqPara active" : "faqPara"}
        >
          <p>{question}</p>
          <div className="plusIcon">
            {isOpen ? (
              <FontAwesomeIcon icon={faAngleUp} />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} />
            )}
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{
                height: 0,
                opacity: 0,
              }}
              animate={{
                height: "auto",
                opacity: 1,
              }}
              exit={{
                height: 0,
                opacity: 0,
              }}
              className="description"
            >
              <p>{answer}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default FAQPopup;
