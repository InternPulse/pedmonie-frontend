import { Button, For } from "@chakra-ui/react";
import { useState } from "react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot,
  DialogTrigger,
} from "../ui/dialog";
import PaymentType from "./PaymentType";
import CreatePaymentLink from "./CreatePaymentLink";
import PaymentSuccessMessage from "./PaymentSuccessMessage";
import PaymentLinkPage from "./PaymentLinkPage";
import { FaChevronDown, FaDownload } from "react-icons/fa";
import { RiAddLargeFill } from "react-icons/ri";
import { useNavigate } from "react-router";
function PaymentOverlay() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const toPath = "/merchant/select-payment-type";

  return (
    <For each={["All Payment Link", "Download Link", "New Payment Link"]}>
      {(value) => (
        <DialogRoot
          key={value}
          size="cover"
          motionPreset="slide-in-bottom"
          closeOnInteractOutside={false}
        >
          <DialogTrigger asChild>
            <Button
              size="sm"
              variant="outline"
              bg={value === "New Payment Link" ? "green" : "#919191"}
              color="white"
              px={4}
              py={2}
              disabled={value !== "New Payment Link" ? true : false}
            >
              {value}
              {value === "All Payment Link" && <FaChevronDown />}
              {value === "Download Link" && <FaDownload />}
              {value === "New Payment Link" && <RiAddLargeFill />}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogBody bg="gray.100">
              {value === "New Payment Link" && navigate(toPath)}
              {step === 2 && (
                <CreatePaymentLink step={step} setStep={setStep} />
              )}
              {step === 3 && (
                <PaymentSuccessMessage step={step} setStep={setStep} />
              )}
              {step === 4 && <PaymentLinkPage setStep={setStep} />}
            </DialogBody>
            <DialogCloseTrigger
              color="black"
              _hover={{ bg: "white" }}
              onClick={() => setStep(1)}
            />
          </DialogContent>
        </DialogRoot>
      )}
    </For>
  );
}

export default PaymentOverlay;
