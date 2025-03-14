import { Clipboard, IconButton, Image, Text } from "@chakra-ui/react"
 import { LuClipboard } from "react-icons/lu"
import { LuCheck } from "react-icons/lu"
import { MdContentCopy } from "react-icons/md";

 


// REMEBMBER TO IMPORT API DATA TO DELIVER THE VALUE TO BE COPIED


const Copy = () => {
  return (
    <Clipboard.Root value="https://chakra-ui.com">
      <Clipboard.Trigger asChild>
         
          <Clipboard.Indicator copied={<LuCheck />} color='black'>
            {/* <LuClipboard /> */}
            <MdContentCopy  color="black"/>
           </Clipboard.Indicator>
         
      </Clipboard.Trigger>
    </Clipboard.Root>

    
  )
}

export default Copy