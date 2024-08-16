import React, { useState } from "react";
import FAQPopup from "./FAQPopup";
import "./FAQ.scss";

const data = [
  {
    question: "What is crowd trade capital ?",
    answer:
      "World’s No.1 Decentralized Platform crowd trade capital is a global symbiotic crypto currency ecosystem purely based on blockchain technology, which automates its function of mutual benefits, using our state-of-the-art fintech tools and algorithms. ",
  },
  {
    question: "Is crowd trade capital safe ?",
    answer:
      "crowd trade capital is a blockchain based smart contract system which functions on the doctrine of decentralization, which means there is no centralization of the control in crowd trade capital system. In other words this system will ensure the transparent and secured transactions without interference of any external entity.",
  },
  {
    question: "How do I start crowd trade capital?",
    answer:
      "Install Trust Wallet or Meta Mask then create a new wallet and save the recovery phrase. Paste the referral Link in the search bar of DAPP Browser and join our Community. Login your id by connecting the particular wallet with crowd trade capital smart contract. To complete the registration process you need to activate your id by subscribing one of the packages given.",
  },
  {
    question: "How much does it cost to participate in crowd trade capital USDT programme?",
    answer:
      "It depends on your caliber and vision towards expected earnings from this miraculous system. The package you select will provide you an opportunity of earning 100x of the amount that you selected as a package. Therefore the higher the package the higher will be the income generated.",
  },
  {
    question: "Benefits of participation in crowd trade capital USDT programme?",
    answer:
      "In crowd trade capital USDT programme you have access to 3 major benefits different in terms of profitability and condition of interaction between partners. You are entitled to all the three programs in parallel.",
  },
  {
    question: "Where will my profit come from?",
    answer:
      "Otter’s major functioning is based on referral programs where the existing community members will refer the link of the system to new participants and get remuneration in return. The digital platforms will be used for distributing rewards to members to build a strong and long-lasting community of crypto enthusiasts. The mechanism will be fully transparent as the whole system will be enabled by smart contracts. Due to this you can get to know, who your upline is or down line partner.",
  },
];

const FAQ: React.FC = () => {
  const [expandedFAQIndex, setExpandedFAQIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setExpandedFAQIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="faq-wrapper" id="faq">
      <div className="mx pad">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-card-wrapper">
            {data.map((f, index) => {
              return (
                <div key={index} className="faq-content">
                  <FAQPopup
                    question={f.question}
                    answer={f.answer}
                    isOpen={expandedFAQIndex === index}
                    toggleFAQ={() => toggleFAQ(index)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
