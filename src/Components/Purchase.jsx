import React, { useState } from "react";
import { Check, Copy, CheckCircle2 } from "lucide-react";
import Navbar from "./Navbar";
import Nav from "../utils/Nav";
import { TbCurrencyNaira } from "react-icons/tb";
import { Link } from "react-router-dom";
import Trial from "../utils/Trial";

const Purchase = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#66a5b2] to-[#00b1d5]">
      {/* <Nav className="pb-[-10]" /> */}
      <div className=" flex items-center justify-center py-5 px-5 ">
        <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-5">
              <Check className="w-8 h-8 text-white stroke-[3]" />
            </div>
            <h1 className="text-gray-900 text-2xl font-bold mb-2">
              Complete Your Payment
            </h1>
            <h1 className="text-gray-900 text-2xl font-bold mb-2">
              Order ID: #26488195
            </h1>
            <p className="text-gray-500 text-sm">
              Transfer to the account below to activate your course
            </p>
          </div>

          {/* Course Info */}
          <div className="bg-blue-50 border-l-4 border-orange-400 rounded-lg p-4 mb-6">
            <div className="text-gray-900 font-semibold mb-1">Extended</div>
            <div className="text-orange-400 text-2xl font-bold flex items-center">
              <TbCurrencyNaira className="text-3xl" />
              <span> 20,000.00</span>
            </div>
          </div>

          {/* Payment Details */}
          <div className="bg-gray-50 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-500 text-sm font-medium">
                Bank Name
              </span>
              <span className="text-gray-900 text-sm font-semibold">
                First National Bank
              </span>
            </div>

            <div className="flex justify-between items-center py-3 border-b border-gray-200">
              <span className="text-gray-500 text-sm font-medium">
                Account Number
              </span>
              <div className="flex items-center gap-2">
                <span className="text-gray-900 text-sm font-semibold">
                  4532876109
                </span>
                <button
                  onClick={() => copyToClipboard("4532876109234567")}
                  className="bg-orange-300 hover:bg-orange-500 text-white px-2 py-1 rounded text-xs transition-colors flex items-center gap-1"
                >
                  {copied ? (
                    <>
                      <CheckCircle2 className="w-3 h-3" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-between items-center py-3">
              <span className="text-gray-500 text-sm font-medium">
                Account Name
              </span>
              <span className="text-gray-900 text-sm font-semibold">
                SkillHub Education Inc.
              </span>
            </div>
          </div>

          {/* Total Section */}
          <div className="bg-gray-900 text-white rounded-xl p-5 text-center  mb-6">
            <div className="text-sm opacity-80 mb-2">Total Amount to Pay</div>
            <div className="text-4xl font-bold flex items-center justify-center">
              <TbCurrencyNaira className="text-5xl" /> <span>20,000.00</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-4 mb-6">
            <p className="text-amber-900 text-xs leading-relaxed">
              <strong>Important:</strong> Please use your email address or Order
              ID as the payment reference. Your course will be activated within
              10 minutes of payment confirmation.
            </p>
          </div>

          {/* confirmation button*/}

          <Link to="/">
            <p className="text-center py-5 mx-28 cursor-pointer text-orange-400 transition-all hover:text-[#007991] font-semibold">
              I have sent the money
            </p>
          </Link>

          {/* <div>
            <Trial />
          </div> */}

          {/* Footer */}
          <div className="text-center">
            <p className="text-gray-500 text-xs">
              Need help? Contact support@learnhub.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Purchase;
