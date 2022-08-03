import React, {useState} from 'react';
import {Box, Button, FormControl, Input} from "@chakra-ui/react";


export default function FormRegister() {

    const [log, setLog] = useState({
        pseudo: '',
        email: '',
        password: '',
        checkPass: ''
    })


    const handleForm = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (log.password !== log.checkPass) {
            alert('password non corespondant');
        } else if (log.pseudo.length === 0) {
            alert('pseudo vide');
        } else if (log.password.length < 8 || log.password.length > 20) {
            alert('le mots de passe doit contenire entre 8 et 20 caractere ');
        } else {
            alert(log.pseudo + "  " + log.email + "  " + log.password);
        }
    }


    const changeInput = (e: { target: { classList: { contains: (arg0: string) => any; }; value: any; }; }) => {

        if (e.target.classList.contains('inp-email')) {
            const newObjState = {...log, email: e.target.value};
            setLog(newObjState);
        } else if (e.target.classList.contains('inp-pseudo')) {
            const newObjState = {...log, pseudo: e.target.value};
            setLog(newObjState);
        } else if (e.target.classList.contains('inp-pass')) {
            const newObjState = {...log, password: e.target.value};
            setLog(newObjState);
        } else if (e.target.classList.contains('inp-checkPass')) {
            const newObjState = {...log, checkPass: e.target.value};
            setLog(newObjState);
        }
    }

    return (
        <>
            <Box mx="auto">

                <form onSubmit={handleForm}>
                    <FormControl display='block' m={3}>
                        <label htmlFor="email">votre pseudo</label>
                        <Input
                            mb={3}
                            type="text"
                            name="pseudo"
                            id="pseudo"
                            className='inp-pseudo'
                            value={log.pseudo}
                            onChange={changeInput}
                            placeholder="Entrer votre pseudo"/>

                        <label htmlFor="email"> votre email</label>
                        <Input
                            mb={3}
                            type="email"
                            name="email"
                            id="email"
                            className='inp-email'
                            value={log.email}
                            onChange={changeInput}
                            placeholder="Entrer votre mail"/>

                        <label htmlFor="password">mot de passe</label>
                        <Input
                            type="text"
                            name="password"
                            id="password"
                            className='inp-pass'
                            value={log.password}
                            onChange={changeInput}
                            placeholder="Entrer votre mot de passe"/>
                        <Input
                            mt={3}
                            type="text"
                            name="password"
                            id="password"
                            className='inp-checkPass'
                            value={log.checkPass}
                            onChange={changeInput}
                            placeholder="vérifier mot de passe"/>

                        <Button
                            colorScheme='blue'  mt={5} ml={3} mr={3}
                            type="submit">connexion
                        </Button>
                    </FormControl>
                </form>

            </Box>

        </>
    )
}
