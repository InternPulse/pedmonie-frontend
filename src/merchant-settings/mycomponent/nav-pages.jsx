import { Box, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navpages =({state,title,onClick,path,isBold,isGreen})=>{


    return(
        <>
        <Box h="px" textAlign="Center" px='27px'>
              <Link
                as={RouterLink}
                to={path}
                outline="none"
                textDecoration="none"
                fontWeight={state ? 'bold' : 'normal'}
                fontSize='14px'
                color={state ? '#5EB070' : '#979EAC'}
                onClick={onClick}
              >
                {title}
              </Link>

              {state? (
                <Box
                  h="2px"
                  mt='1.8px'
                  bg="#5EB070"
                  borderTopLeftRadius="5px"
                  borderTopRightRadius="5px"
                ></Box>
              ) : null}
            </Box>
        </>
    )
}

export default Navpages