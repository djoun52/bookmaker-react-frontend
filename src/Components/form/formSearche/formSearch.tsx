import React, {useState} from 'react'

import {Button, FormControl, FormLabel, Input} from "@chakra-ui/react";


export function FormSearch() {
    const [term, setTerm] = useState('')

    const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
        // Preventing the page from reloading
        event.preventDefault();

        // Do something
        alert(term);
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <FormControl display='flex' m={3} >
                    <Input type='text' placeholder='rechercher' onChange={(e)=>{setTerm(e.target.value)}}/>
                    <Button colorScheme='blue' size='sm' mt={1} ml={3} mr={3} type='submit'>validé</Button>
                </FormControl>
            </form>
        </>
    )
}
