import { useEffect, useState } from "react";
import { Grid, Text, Flex } from "@chakra-ui/react";
import Copy from "../Forms-component/copy";
import { HiOutlineDotsVertical } from "react-icons/hi";


const ApiKeyTable =()=>{

    const [apikey, setApiKey] = useState([]);

    useEffect(() => {
        // Replace with actual JSON path if needed
        fetch("..Forms-component/apidata.json")
          .then((response) => response.json())
          .then((data) => setApiKey(data))
          .catch((error) => console.error("Error loading api keys:", error));
      }, []);


    return(
        <>
        {/* Table Header */}
              <Grid
                templateColumns="1fr 1fr 1.5fr 0.2fr"
                px="20px"
                bg="#2E5C38" 
                py="15px"
                fontSize="14px"
                fontWeight="bold"
                color="white"
                borderBottom="1px solid #ddd"
                w='970px'
              >
                <Text>Created</Text>
                <Text>API Key Name</Text>
                <Text>API Key</Text>
                <Text>Actions</Text>
              </Grid>

              {apikey.map((item, index)=> (

              <Grid
              key={index}
              templateColumns="1fr 1fr 1.5fr 0.2fr"
              px="20px"
              bg="#D9D9D9"
              py="15px"
              fontSize="14px"
              color="black"
              borderBottom="1px solid #ddd"
              w='970px'
            >

            <Text>{item.date}</Text>
            <Text>{item.keyname}</Text>
            <Flex alignItems="center" gap='5px'>
              <Text>{item.apikey}</Text>
              <Copy/>
            </Flex>
            
            <HiOutlineDotsVertical size="20px"/>

            </Grid>
              ))}
            

        </>
    )
}

export default ApiKeyTable