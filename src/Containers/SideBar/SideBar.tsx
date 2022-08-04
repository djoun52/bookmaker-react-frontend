import React, {useEffect, useState} from 'react'
import './sideBar.css'
import {Avatar, Flex, LinkBox, Text, LinkOverlay, Box, WrapItem} from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import {useAppSelector, useAppDispatch} from '../../redux/hooks'
import {removeUser, selectUser} from "../../redux/user/userSlice";


export function SideBar() {
    const user = useAppSelector(selectUser);
    const [log, setLog] = useState(user.status)
    const dispatch = useAppDispatch();
    useEffect(() => {
        console.log(user.pseudo)

    }, [])

    function logout(): void {
        dispatch(removeUser())
        setLog(false)
    }


    return (
        <div className="sidebar">
            {log &&
                <Menu>
                    <MenuButton mt={2}>

                        <WrapItem p={2} pr={9} bg='tomato' borderRadius='full'>
                            <Avatar size='sm' mr={1}></Avatar>
                            <Text ml={1} fontSize='xl'>{user.pseudo}</Text>
                        </WrapItem>

                    </MenuButton>
                    <MenuList>
                        <MenuItem>
                            <Button onClick={logout}>déconnexion</Button>
                        </MenuItem>
                    </MenuList>
                </Menu>
            }
            {!log &&
                <Box w='100%' mt={3}>
                    <Menu>
                        <MenuButton as={Button}>
                            User
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                <Link to='/login'>connexion</Link>
                            </MenuItem>
                            <MenuItem>
                                <Link to='/register'>inscription</Link>
                            </MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

            }
            <Flex justifyItems='start' flexDir='column'>
                <LinkBox as='article' m={3} border='1px' borderColor='gray.200' borderRadius='xl'>
                    <LinkOverlay href='/list'>
                        <Text fontSize='xl'>Tous les favoris</Text>
                    </LinkOverlay>
                </LinkBox>
                <LinkBox as='article' m={3} border='1px' borderColor='gray.200' borderRadius='xl'>
                    <LinkOverlay href='/-1'>
                        <Text fontSize='xl'>Non trie</Text>
                    </LinkOverlay>
                </LinkBox>
                <Box w='100%' mt={3}>
                    <Menu>
                        <MenuButton as={Button}>
                            Collections
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Collection 1 </MenuItem>
                            <MenuItem>Collection 2</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box w='100%' mt={3}>
                    <Menu>
                        <MenuButton as={Button}>
                            tri rapide...
                        </MenuButton>
                        <MenuList>
                            <MenuItem>video</MenuItem>
                            <MenuItem>lien</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box w='100%' mt={3}>
                    <Menu>
                        <MenuButton as={Button}>
                            Tags
                        </MenuButton>
                        <MenuList>
                            <MenuItem>youtube</MenuItem>
                            <MenuItem>mozilla.org</MenuItem>
                        </MenuList>
                    </Menu>
                </Box>

            </Flex>
        </div>
    )
}
