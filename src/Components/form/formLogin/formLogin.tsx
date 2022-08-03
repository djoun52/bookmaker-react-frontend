import React, {useState} from 'react';
import {Box, Button, FormControl, Input} from "@chakra-ui/react";


export default function FormLogin() {


    const [log, setLog] = useState({
        email: '',
        password: ''
    })

    //const [loginErro, setLoginErro] = useState(false)


    const handleForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();


        alert(log.email + "  " + log.password);
    }

    const changeInput = (e: { target: { classList: { contains: (arg0: string) => any; }; value: any; }; }) => {

        if (e.target.classList.contains('inp-email')) {
            const newObjState = {...log, email: e.target.value};
            setLog(newObjState);

        } else if (e.target.classList.contains('inp-pass')) {
            const newObjState = {...log, password: e.target.value};
            setLog(newObjState);
        }

    }

    return (
        <>
            <Box  mx="auto"  >

                <form onSubmit={handleForm}>
                    <FormControl display='block' m={3}>
                        <label htmlFor="email">email</label>
                        <Input

                            type="email"
                            name="email"
                            id="email"
                            className='inp-email '
                            value={log.email}
                            onChange={changeInput}
                            placeholder="Entrez votre identifiant"/>

                        <label htmlFor="password">mot de passe</label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            className='inp-pass'
                            value={log.password}
                            onChange={changeInput}
                            placeholder="Entrez votre mot de passe"/>
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
