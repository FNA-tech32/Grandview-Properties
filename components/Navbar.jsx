import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey, FiPhoneCall } from 'react-icons/fi';

const Navbar = () => (
    <Flex p='3' borderBottom='1px' borderColor='gray.200' alignItems='center'>
        <Box fontSize={['xl', '2xl', '3xl']} color='blue.500' fontWeight='extrabold' letterSpacing='tight'>
            <Link href='/' passHref>
                Grandview-Properties
            </Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant='outline' color='blue.500' aria-label='Open Navigation Menu' />
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch />}>Search Properties</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <MenuItem icon={<FcAbout />}>Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem icon={<FiKey />}>Rent Property</MenuItem>
                    </Link>
                    <Link href='/contact' passHref>
                        <MenuItem icon={<FiPhoneCall />}>Contact Us</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
);

export default Navbar;
