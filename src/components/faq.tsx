import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

interface WrapperProps {
  theme: any;
}

interface ContentProps {
  theme: any;
}

interface BoxProps {
  theme: any;
}

interface QuestionProps {
  active: boolean;
  onClick: () => void;
}

interface AnswerProps {
  active: boolean;
}

const FAQ: React.FC = () => {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id: string) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  return (
    <section className={` ${"bg-white"} bg-no-repeat bg-auto bg-bottom`}>
      <div>
        <div className={`flex flex-col text-black`}>
          <div className="flex flex-col items-center text-center max-w-screen-xl mx-auto space-y-4">
            <h2 className="text-4xl mb-6 font-bold">FAQ&apos;s</h2>
            <p className="text-lg text-gray-600 font-semibold">
              Frequently Asked Questions
            </p>
          </div>

          <div className="flex flex-col items-center mt-10 space-y-8">
            <div
              className={`flex flex-col w-4/5 lg:w-full bg-${"white"} cursor-pointer`}
            >
              <div
                className={`flex justify-between items-center p-7 shadow-md transition rounded-xl ${
                  activeQ === "q1" ? "bg-primary" : ""
                }`}
                onClick={() => openQ("q1")}
              >
                <p
                  className={`md:text-lg font-oswald ${
                    activeQ === "q1" ? "text-white" : "text-gray-600"
                  }`}
                >
                  1. What Are The Requirements?
                </p>
                <i className="fa-solid fa-angle-down text-2xl"></i>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeQ === "q1" ? "max-h-80 p-7" : "max-h-0 p-0"
                } text-gray-600 font-poppins`}
              >
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5" />
                  <p className="text-tiny md:text-base">
                    Completed Loan Application Form.
                  </p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5" />
                  <p className="text-tiny md:text-base">
                    3 latest Salary slips.
                  </p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5" />
                  <p className="text-tiny md:text-base">
                    1 Colour Passport Photo.
                  </p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5" />
                  <p className="text-tiny md:text-base">
                    Photocopy of I/D or Passport.
                  </p>
                </span>
                <span className="flex space-x-1 mt-6 align-middle items-center">
                  <CheckIcon className="h-5 w-5" />
                  <p className="text-tiny md:text-base">
                    Photocopy of Bank ATM Card.
                  </p>
                </span>
              </div>
            </div>

            <div
              className={`flex flex-col w-4/5 lg:w-full bg-${"white"} cursor-pointer`}
            >
              <div
                className={`flex justify-between items-center p-7 shadow-md transition rounded-xl ${
                  activeQ === "q2" ? "bg-primary" : ""
                }`}
                onClick={() => openQ("q2")}
              >
                <p
                  className={`md:text-lg font-oswald ${
                    activeQ === "q2" ? "text-white" : "text-gray-600"
                  }`}
                >
                  2. What Is The Repayment Period?
                </p>
                <i className="fa-solid fa-angle-down text-2xl"></i>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeQ === "q2" ? "max-h-80 p-7" : "max-h-0 p-0"
                } text-gray-600 font-poppins`}
              >
                <span className="flex mt-6 align-middle items-center">
                  <p className="text-tiny md:text-base">
                    Minimum 6 months to maximum 48 months.
                  </p>
                </span>
              </div>
            </div>

            <div
              className={`flex flex-col w-4/5 lg:w-full bg-${"white"} cursor-pointer`}
            >
              <div
                className={`flex justify-between items-center p-7 shadow-md transition rounded-xl ${
                  activeQ === "q3" ? "bg-primary" : ""
                }`}
                onClick={() => openQ("q3")}
              >
                <p
                  className={`md:text-lg font-oswald ${
                    activeQ === "q3" ? "text-white" : "text-gray-600"
                  }`}
                >
                  3. What Is The Processing Time?
                </p>
                <i className="fa-solid fa-angle-down text-2xl"></i>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeQ === "q3" ? "max-h-80 p-7" : "max-h-0 p-0"
                } text-gray-600 font-poppins`}
              >
                <span className="flex mt-6 align-middle items-center">
                  <p className="text-tiny md:text-base">
                    24 hours from the time all documents are correctly provided
                    and successfully validated.
                  </p>
                </span>
              </div>
            </div>
            <div
              className={`flex flex-col w-4/5 lg:w-full bg-${"white"} cursor-pointer`}
            >
              <div
                className={`flex justify-between items-center p-7 shadow-md transition rounded-xl ${
                  activeQ === "q4" ? "bg-primary" : ""
                }`}
                onClick={() => openQ("q4")}
              >
                <p
                  className={`md:text-lg font-oswald ${
                    activeQ === "q4" ? "text-white" : "text-gray-600"
                  }`}
                >
                  4. What Is The Interest Rate?
                </p>
                <i className="fa-solid fa-angle-down text-2xl"></i>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeQ === "q4" ? "max-h-80 p-7" : "max-h-0 p-0"
                } text-gray-600 font-poppins`}
              >
                <span className="flex mt-6 align-middle items-center">
                  <p className="text-tiny md:text-base">
                    Competitive interest rates.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
