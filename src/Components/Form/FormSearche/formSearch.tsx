import React from 'react'
import {SubmitHandler, useForm} from "react-hook-form";

import {Box, Button, FormControl, Input, Text} from "@chakra-ui/react";


interface IFormInput {
    search: String;

}

export function FormSearch() {

    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>();


    const onSubmit: SubmitHandler<IFormInput> = data => {
        console.log(data);

        reset()

    }


    return (
        <>
            <Box display='block'>

                <form className='flex' onSubmit={handleSubmit(onSubmit)}>
                    <FormControl display='flex' m={3}>
                        <Input type='text'
                               placeholder='rechercher'
                               {...register("search", {required: 'le champ est vide '})}
                        />

                        <Button colorScheme='blue' size='sm' mt={1} ml={3} mr={3} type='submit'>validé</Button>
                    </FormControl>
                </form>
                <Text textAlign='start' ml={4}>{errors.search?.message}</Text>
            </Box>
        </>
    )
}