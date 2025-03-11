import { Box, Heading, Text, Input, Field, Flex, Stack, HStack, Button } from "@chakra-ui/react"
import { IoMdSearch } from "react-icons/io";
import { LuSettings2 } from "react-icons/lu";
import { createListCollection } from "@chakra-ui/react"
import {
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from '../../../ui/select'

const PayoutsDetails = () => {
  const frameworks = createListCollection({
    items: [
      { label: "React.js", value: "react" },
      { label: "Vue.js", value: "vue" },
      { label: "Angular", value: "angular" },
      { label: "Svelte", value: "svelte" },
    ],
  })
  return (
    <Box>
      <Text textStyle="xl" fontWeight='bold' marginBottom={2}>Payout Details</Text>
                 <form action="">
                   <Flex justifyContent='space-between' flexWrap={{base:'wrap', md:'nowrap'}}>
                     {/* first stack */}
                        <Stack gap={5}  width={{base:'fit-content', md:'fit-content', lg:'27rem'}} padding={{base:0, md:5, lg:5}}>
                   <Stack>
                 <SelectRoot collection={frameworks} size="sm" width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
         <SelectLabel>Business Name</SelectLabel>
         <SelectTrigger>
           <SelectValueText placeholder="Select business name" />
         </SelectTrigger>
         <SelectContent>
           {frameworks.items.map((movie) => (
             <SelectItem item={movie} key={movie.value}>
               {movie.label}
             </SelectItem>
           ))}
         </SelectContent>
       </SelectRoot>
       </Stack>
       <Stack width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
       <Field.Root>
         <Field.Label>Email</Field.Label>
         <Input placeholder="input email" />
       </Field.Root>
       </Stack>
       <Stack width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
       <Field.Root>
         <Field.Label>Available Balance</Field.Label>
         <Input placeholder="$1150.00" />
       </Field.Root>
       </Stack>
       {/* Payout */}
       <Stack width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
       <SelectRoot collection={frameworks} size="sm" >
         <SelectLabel>Payout Frequency</SelectLabel>
         <SelectTrigger>
           <SelectValueText placeholder="Monthly" />
         </SelectTrigger>
         <SelectContent>
           {frameworks.items.map((movie) => (
             <SelectItem item={movie} key={movie.value}>
               {movie.label}
             </SelectItem>
           ))}
         </SelectContent>
       </SelectRoot>
       </Stack>
       {/* Banks */}
       <Stack width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
       <SelectRoot collection={frameworks} size="sm" >
         <SelectLabel>Bank Name</SelectLabel>
         <SelectTrigger>
           <SelectValueText placeholder="Zenith Bank" />
         </SelectTrigger>
         <SelectContent>
           {frameworks.items.map((movie) => (
             <SelectItem item={movie} key={movie.value}>
               {movie.label}
             </SelectItem>
           ))}
         </SelectContent>
       </SelectRoot>
       </Stack>
       <Stack width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
       <Field.Root>
         <Field.Label>Mobile Money Number</Field.Label>
         <Input placeholder="+234-000-000" />
       </Field.Root>
       </Stack>
                         </Stack>
                         {/* second stack */}
                         <Stack gap={5}  width={{base: '16rem', md:'fit-content', lg:'27rem'}} padding={{base:0, md:5, lg:5}}>
                         <SelectRoot collection={frameworks} size="sm"  width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
         <SelectLabel>Business Type</SelectLabel>
         <SelectTrigger>
           <SelectValueText placeholder="Prefilled type" />
         </SelectTrigger>
         <SelectContent>
           {frameworks.items.map((movie) => (
             <SelectItem item={movie} key={movie.value}>
               {movie.label}
             </SelectItem>
           ))}
         </SelectContent>
       </SelectRoot>
       <Stack  width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
       <Field.Root>
         <Field.Label>Phone Number</Field.Label>
         <Input placeholder="+234-000-000" />
       </Field.Root>
       </Stack>
       <Stack  width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
       <Field.Root>
         <Field.Label>Payout Amount (min withdrawal amount $50)</Field.Label>
         <Input placeholder="$1000.01" />
       </Field.Root>
       </Stack>
       <Stack  width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
       <SelectRoot collection={frameworks} size="sm"  width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
         <SelectLabel>Payout Method</SelectLabel>
         <SelectTrigger>
           <SelectValueText placeholder="Bank Transfer" />
         </SelectTrigger>
         <SelectContent>
           {frameworks.items.map((movie) => (
             <SelectItem item={movie} key={movie.value}>
               {movie.label}
             </SelectItem>
           ))}
         </SelectContent>
       </SelectRoot>
       </Stack>
       <Stack  width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
       <Field.Root>
         <Field.Label>Account Number</Field.Label>
         <Input placeholder="0000000000" />
       </Field.Root>
       </Stack>
       <Stack  width={{base:'15rem', md:'15.6rem', lg:'20rem'}}>
       <Field.Root>
         <Field.Label>Next due date</Field.Label>
         <Input placeholder="12-05-25" />
       </Field.Root>
       </Stack>
                         </Stack>
                 </Flex>
                 </form>
                
                 </Box>
  )
}

export default PayoutsDetails