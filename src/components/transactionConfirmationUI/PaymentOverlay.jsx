import { Button, For } from "@chakra-ui/react";
import { useState } from "react";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogRoot,
  DialogTrigger,
} from "../ui/dialog";
import { AddIcon, ChevronDownIcon, DownloadIcon } from "@chakra-ui/icons";
import PaymentType from "./PaymentType";
import CreatePaymentLink from "./CreatePaymentLink";
import PaymentSuccessMessage from "./PaymentSuccessMessage";
import PaymentLinkPage from "./PaymentLinkPage";
function PaymentOverlay() {
  const [step, setStep] = useState(1);
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
              borderRadius="0"
            >
              {value}
              {value === "All Payment Link" && <ChevronDownIcon />}
              {value === "Download Link" && <DownloadIcon />}
              {value === "New Payment Link" && <AddIcon />}
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogBody bg="gray.100">
              {value === "New Payment Link" && step === 1 && (
                <PaymentType step={step} setStep={setStep} />
              )}
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
