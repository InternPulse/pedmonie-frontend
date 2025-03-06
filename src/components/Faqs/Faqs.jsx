import React from "react";
import {
    AccordionRoot,
    AccordionItem,
    AccordionItemTrigger,
    AccordionItemContent,
  } from "../ui/accordion";
  

function Faqs() {
  return (
    // Outer polygon container
    <div
      style={{
        position: "relative",
        width: "50%",
        // minHeight: "100vh", // Fills the viewport height
        overflow: "hidden", // Ensures no overflow from polygon edges
        clipPath: "polygon(5% 0%, 95% 0%, 100% 10%, 100% 100%, 0% 100%, 0% 10%)",
        backgroundColor: "#F8F9FA",
        // Center content horizontally
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingTop: "2rem",
        boxSizing: "border-box",
      }}
    >
      {/* Inner container to hold your FAQ */}
      <div
        style={{
          width: "100%",
          maxWidth: "800px", // Adjust to match the screenshot's width
          margin: "0 auto",
          boxSizing: "border-box",
          padding: "1rem",
        }}
      >
        {/* Top Headings */}
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "0 0 8px 0",
            color: "#000",
          }}
        >
          Frequently Asked Questions (FAQs)
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "#666",
            textAlign: "center",
            margin: "0 0 24px 0",
          }}
        >
          Everything You Need to Know About Pedmonie
        </p>

        {/* White rectangle container for the accordion */}
        <div
          style={{
            backgroundColor: "#FFF",
            padding: "24px",
            borderRadius: "8px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
          }}
        >
          <AccordionRoot type="single" collapsible defaultValue="item-1">
            {/* 1. Expanded by default */}
            <AccordionItem
              value="item-1"
              style={{
                padding: "16px 0",
                borderBottom: "1px solid #E2E8F0",
              }}
            >
              <AccordionItemTrigger
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    lineHeight: 1,
                    paddingTop: "2px",
                    color: "#000",
                  }}
                >
                  
                </span>
                How does Pedmonie work?
              </AccordionItemTrigger>
              <AccordionItemContent
                style={{
                  marginLeft: "24px",
                  marginTop: "8px",
                  backgroundColor: "#F9F9F9",
                  padding: "16px",
                  borderRadius: "8px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Pedmonie allows businesses to accept payments seamlessly
                  through multiple methods, including cards, bank transfers,
                  USSD, and mobile wallets. Simply sign up, integrate with your
                  platform, or generate a payment link to start receiving
                  payments.
                </p>
              </AccordionItemContent>
            </AccordionItem>

            {/* 2 */}
            <AccordionItem
              value="item-2"
              style={{
                padding: "16px 0",
                borderBottom: "1px solid #E2E8F0",
              }}
            >
              <AccordionItemTrigger
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    lineHeight: 1,
                    paddingTop: "2px",
                    color: "#000",
                  }}
                >
                  
                </span>
                Is Pedmonie secure?
              </AccordionItemTrigger>
              <AccordionItemContent
                style={{
                  marginLeft: "24px",
                  marginTop: "8px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Yes, Pedmonie uses industry-standard security measures, such
                  as encryption and tokenization, to protect sensitive payment
                  information.
                </p>
              </AccordionItemContent>
            </AccordionItem>

            {/* 3 */}
            <AccordionItem
              value="item-3"
              style={{
                padding: "16px 0",
                borderBottom: "1px solid #E2E8F0",
                color: "#000",
              }}
            >
              <AccordionItemTrigger
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "#000",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    lineHeight: 1,
                    paddingTop: "2px",
                  }}
                >
                  
                </span>
                What types of payments can I accept?
              </AccordionItemTrigger>
              <AccordionItemContent
                style={{
                  marginLeft: "24px",
                  marginTop: "8px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Pedmonie supports credit/debit cards, bank transfers, USSD,
                  mobile wallets, and more.
                </p>
              </AccordionItemContent>
            </AccordionItem>

            {/* 4 */}
            <AccordionItem
              value="item-4"
              style={{
                padding: "16px 0",
                borderBottom: "1px solid #E2E8F0",
              }}
            >
              <AccordionItemTrigger
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    lineHeight: 1,
                    paddingTop: "2px",
                    color: "#000",
                  }}
                >
                  
                </span>
                Do I need a website to use Pedmonie?
              </AccordionItemTrigger>
              <AccordionItemContent
                style={{
                  marginLeft: "24px",
                  marginTop: "8px",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  No, you can start receiving payments without a website. We
                  offer payment links and other options.
                </p>
              </AccordionItemContent>
            </AccordionItem>

            {/* 5 */}
            <AccordionItem
              value="item-5"
              style={{
                padding: "16px 0",
              }}
            >
              <AccordionItemTrigger
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "bold",
                  fontSize: "16px",
                  cursor: "pointer",
                  color: "#000",
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    lineHeight: 1,
                    paddingTop: "2px",
                    color: "#000",
                  }}
                >
                  
                </span>
                Can I integrate Pedmonie with my website or app?
              </AccordionItemTrigger>
              <AccordionItemContent
                style={{
                  marginLeft: "24px",
                  marginTop: "8px",
                  color: "#000",
                }}
              >
                <p
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  Absolutely. Pedmonie provides easy integration options for
                  both websites and mobile applications.
                </p>
              </AccordionItemContent>
            </AccordionItem>
          </AccordionRoot>
        </div>
      </div>
    </div>
  );
}

export default Faqs;
