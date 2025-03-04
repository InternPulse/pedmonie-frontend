import { Button } from "@chakra-ui/react";

function CustomButton({ children, ...props }) {
  return <Button {...props}>{children}</Button>;
}

export default CustomButton;
