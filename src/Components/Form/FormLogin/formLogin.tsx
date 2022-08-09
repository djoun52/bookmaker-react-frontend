import React from 'react';
import {Box, Button, FormControl, Input} from "@chakra-ui/react";
import {SubmitHandler, useForm} from "react-hook-form";
import {addUser} from "../../../redux/user/userSlice";
import {useAppDispatch} from "../../../redux/hooks";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

interface IFormInput {
    email: String;
    password: String;
}

export default function FormLogin() {

    //const [loginErro, setLoginErro] = useState(false)
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const {register, handleSubmit, formState: {errors}, reset} = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => {

        console.log(data);
        axios.post("http://localhost:3333/auth/signin", data)
            .then(response => {
                console.log(response)
            }).catch(err =>{
                console.log(err)
        })
        reset()
    }



    return (
        <>
            <Box  mx="auto"  >

                <form onSubmit={handleSubmit(onSubmit)}>
                    <FormControl display='block' m={3}>
                        <label htmlFor="email">email</label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Entrez votre identifiant"
                            {...register("email")}
                        />

                        <label htmlFor="password">mot de passe</label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Entrez votre mot de passe"
                            {...register("password", {required: 'le champ est vide '})}
                        />
                        <Button

                            colorScheme='blue'  mt={5} ml={3} mr={3}
                            type="submit"
                        >connexion
                        </Button>
                    </FormControl>
                </form>
            </Box >

        </>
    )
}
