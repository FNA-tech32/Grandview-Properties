import Link from 'next/link';
import { Box, Flex, Text, SimpleGrid, Stack, Divider, Badge } from '@chakra-ui/react';
import { FiPhone, FiMail, FiMapPin, FiClock, FiHeadphones } from 'react-icons/fi';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box as='footer' bg='gray.50' color='gray.700' mt='10' borderTop='1px' borderColor='gray.200'>
            <Box maxW='1280px' mx='auto' px={{ base: 4, md: 8 }} py={{ base: 10, md: 12 }}>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
                    {/* Brand & Summary */}
                    <Stack spacing={4}>
                        <Text fontSize='2xl' fontWeight='extrabold' color='blue.500'>
                            Grandview-Properties
                        </Text>
                        <Text fontSize='sm' color='gray.600' lineHeight='1.7'>
                            Connecting clients with premier luxury properties, residential homes, and high-yield commercial investments across prime global destinations.
                        </Text>
                        <Text fontSize='xs' color='gray.500'>
                            Verified listings powered by the Bayut real estate network.
                        </Text>
                    </Stack>

                    {/* Primary Contact Details */}
                    <Stack spacing={3}>
                        <Flex alignItems='center' gap={2}>
                            <Text fontSize='md' fontWeight='bold' color='gray.800'>
                                Primary Contact
                            </Text>
                            <Badge colorScheme='blue' fontSize='0.7em'>Main</Badge>
                        </Flex>
                        <Flex alignItems='flex-start' gap={2} fontSize='sm'>
                            <Box as={FiMapPin} mt={1} color='blue.500' flexShrink={0} />
                            <Text color='gray.600'>
                                Grandview Tower, Suite 1400, Business Bay, Dubai, UAE
                            </Text>
                        </Flex>
                        <Flex alignItems='center' gap={2} fontSize='sm'>
                            <Box as={FiPhone} color='blue.500' flexShrink={0} />
                            <a href='tel:+18005550199' style={{ color: '#2b6cb0', fontWeight: 500 }}>
                                +1 (800) 555-0199
                            </a>
                        </Flex>
                        <Flex alignItems='center' gap={2} fontSize='sm'>
                            <Box as={FiMail} color='blue.500' flexShrink={0} />
                            <a href='mailto:info@grandview-properties.com' style={{ color: '#2b6cb0', fontWeight: 500 }}>
                                info@grandview-properties.com
                            </a>
                        </Flex>
                        <Flex alignItems='center' gap={2} fontSize='sm'>
                            <Box as={FiClock} color='blue.500' flexShrink={0} />
                            <Text color='gray.600'>Mon - Sat: 9:00 AM - 7:00 PM (GST)</Text>
                        </Flex>
                    </Stack>

                    {/* Alternative Contact Details */}
                    <Stack spacing={3}>
                        <Flex alignItems='center' gap={2}>
                            <Text fontSize='md' fontWeight='bold' color='gray.800'>
                                Alternative Contact
                            </Text>
                            <Badge colorScheme='green' fontSize='0.7em'>24/7 Hotline</Badge>
                        </Flex>
                        <Flex alignItems='flex-start' gap={2} fontSize='sm'>
                            <Box as={FiMapPin} mt={1} color='green.500' flexShrink={0} />
                            <Text color='gray.600'>
                                750 3rd Avenue, 21st Floor, New York, NY 10017, USA
                            </Text>
                        </Flex>
                        <Flex alignItems='center' gap={2} fontSize='sm'>
                            <Box as={FiHeadphones} color='green.500' flexShrink={0} />
                            <a href='tel:+18005550144' style={{ color: '#2f855a', fontWeight: 500 }}>
                                +1 (800) 555-0144 (Alt. Line)
                            </a>
                        </Flex>
                        <Flex alignItems='center' gap={2} fontSize='sm'>
                            <Box as={FiMail} color='green.500' flexShrink={0} />
                            <a href='mailto:support@grandview-properties.com' style={{ color: '#2f855a', fontWeight: 500 }}>
                                support@grandview-properties.com
                            </a>
                        </Flex>
                        <Flex alignItems='center' gap={2} fontSize='sm'>
                            <Box as={FiMail} color='green.500' flexShrink={0} />
                            <a href='mailto:inquiries@grandview-properties.com' style={{ color: '#2f855a', fontWeight: 500 }}>
                                inquiries@grandview-properties.com
                            </a>
                        </Flex>
                    </Stack>

                    {/* Quick Navigation Links */}
                    <Stack spacing={2}>
                        <Text fontSize='md' fontWeight='bold' color='gray.800' mb={1}>
                            Quick Links
                        </Text>
                        <Link href='/' passHref>
                            <Text cursor='pointer' fontSize='sm' color='gray.600' _hover={{ color: 'blue.500' }}>
                                Home
                            </Text>
                        </Link>
                        <Link href='/search' passHref>
                            <Text cursor='pointer' fontSize='sm' color='gray.600' _hover={{ color: 'blue.500' }}>
                                Search Properties
                            </Text>
                        </Link>
                        <Link href='/search?purpose=for-sale' passHref>
                            <Text cursor='pointer' fontSize='sm' color='gray.600' _hover={{ color: 'blue.500' }}>
                                Properties for Sale
                            </Text>
                        </Link>
                        <Link href='/search?purpose=for-rent' passHref>
                            <Text cursor='pointer' fontSize='sm' color='gray.600' _hover={{ color: 'blue.500' }}>
                                Properties for Rent
                            </Text>
                        </Link>
                        <Link href='/contact' passHref>
                            <Text cursor='pointer' fontSize='sm' color='gray.600' _hover={{ color: 'blue.500' }}>
                                Contact Us
                            </Text>
                        </Link>
                    </Stack>
                </SimpleGrid>

                <Divider my={8} borderColor='gray.200' />

                <Flex
                    direction={{ base: 'column', md: 'row' }}
                    justify='space-between'
                    align='center'
                    fontSize='xs'
                    color='gray.500'
                    gap={2}
                >
                    <Text>© {currentYear} Grandview-Properties, Inc. All rights reserved.</Text>
                    <Text>
                        Alternative Hotline: +1 (800) 555-0144 | Direct Inquiries: info@grandview-properties.com
                    </Text>
                </Flex>
            </Box>
        </Box>
    );
};

export default Footer;
