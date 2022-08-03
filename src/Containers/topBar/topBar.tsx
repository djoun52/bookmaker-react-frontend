import React from 'react'
import {Box, Button, Flex} from "@chakra-ui/react";
import {FormSearch} from "../../Components/form/formSearche/formSearch";


export default function TopBar() {

  return (
      <Flex w='100%' justifyContent='space-between'  borderBottom='2px' borderColor='gray.200'  >
        <FormSearch></FormSearch>
          <Button mt={3} mr={8} mb={10} colorScheme='blue'>ajouter</Button>
      </Flex>
  )
}
