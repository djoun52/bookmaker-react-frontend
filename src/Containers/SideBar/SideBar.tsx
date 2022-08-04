import React, {useState} from 'react'
import './sideBar.css'
import {Avatar, Flex, LinkBox, Text, LinkOverlay, Wrap, Box, WrapItem} from '@chakra-ui/react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
} from '@chakra-ui/react'

export function SideBar() {
    const [log, setLog] = useState(false)

    return (
        <div className="sidebar">
            {log  &&
                <Wrap m={3}>
                    <WrapItem p={2} pr={9} bg='tomato' borderRadius='full'>
                        <Avatar size='sm' mr={1}></Avatar>
                        <Text fontSize='xl'>Raid59000</Text>
                    </WrapItem>
                </Wrap>
            }
            {!log &&
                <Box w='100%' mt={3}>
                    <Menu>
                        <MenuButton as={Button}>
                            User
                        </MenuButton>
                        <MenuList>
                            <MenuItem>
                                    <LinkOverlay href='/login'>
                                        <Text >connexion</Text>
                                    </LinkOverlay>
                            </MenuItem>
                            <MenuItem>
                                    <LinkOverlay href='/register'>
                                        <Text >inscription</Text>
                                    </LinkOverlay>
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
