import Link from 'next/link';
import Head from 'next/head';
import { Box, Flex, Spacer, Text, Avatar, Button, SimpleGrid, Badge, Icon } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import { FiPhone, FiMail, FiHeadphones } from 'react-icons/fi';
import millify from 'millify';

import { baseUrl, fetchApi } from '../../utils/fetchApi';
import ImageScrollbar from '../../components/ImageScrollbar';

const PropertyDetails = ({ propertyDetails }) => {
    if (!propertyDetails) {
        return (
            <Box maxWidth='1000px' margin='auto' p='10' textAlign='center'>
                <Text fontSize='2xl' fontWeight='bold' mb='4'>Property Not Found</Text>
                <Link href='/search' passHref>
                    <Button colorScheme='blue'>Browse Properties</Button>
                </Link>
            </Box>
        );
    }

    const {
        price = 0,
        rentFrequency = null,
        rooms = 0,
        title = 'Luxury Residence',
        baths = 0,
        area = 0,
        agency = {},
        isVerified = false,
        description = '',
        type = 'Property',
        purpose = 'For Sale',
        furnishingStatus = '',
        amenities = [],
        photos = []
    } = propertyDetails;

    return (
        <Box maxWidth='1000px' margin='auto' p='4'>
            <Head>
                <title>{title} | Grandview-Properties</title>
                <meta name='description' content={description.substring(0, 150)} />
            </Head>
            {photos && photos.length > 0 && <ImageScrollbar data={photos} />}
            <Box w='full' p='6'>
                <Flex paddingTop='2' alignItems='center'>
                    <Box paddingRight='3' color='green.400'>
                        {isVerified && <GoVerified />}
                    </Box>
                    <Text fontWeight='bold' fontSize='lg'>
                        AED {price?.toLocaleString ? price.toLocaleString() : price} {rentFrequency && `/${rentFrequency}`}
                    </Text>
                    <Spacer />
                    <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area || 0)} sqft <BsGridFill />
                </Flex>
            </Box>
            <Box marginTop='2'>
                <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
                <Text lineHeight='2' color='gray.600'>{description}</Text>
            </Box>
            <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                    <Text>Type</Text>
                    <Text fontWeight='bold'>{type}</Text>
                </Flex>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                    <Text>Purpose</Text>
                    <Text fontWeight='bold'>{purpose}</Text>
                </Flex>
                {furnishingStatus && (
                    <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                        <Text>Furnishing Status</Text>
                        <Text fontWeight='bold'>{furnishingStatus}</Text>
                    </Flex>
                )}
            </Flex>
            <Box>
                {amenities?.length > 0 && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilities:</Text>}
                <Flex flexWrap='wrap'>
                    {amenities?.map((item, idx) => (
                        item?.amenities?.map((amenity, aIdx) => (
                            <Text key={`${idx}-${aIdx}-${amenity.text}`} fontWeight='bold' color='blue.400' fontSize='l' p='2' bg='gray.200' m='1' borderRadius='5'>
                                {amenity.text}
                            </Text>
                        ))
                    ))}
                </Flex>
            </Box>

            {/* Grandview-Properties Contact & Inquiry Section */}
            <Box mt={10} p={6} bg='blue.50' borderRadius='lg' border='1px' borderColor='blue.200'>
                <Flex direction={{ base: 'column', md: 'row' }} justify='space-between' align={{ base: 'flex-start', md: 'center' }} mb={4}>
                    <Box>
                        <Badge colorScheme='blue' mb={1}>Grandview-Properties Exclusive</Badge>
                        <Text fontSize='xl' fontWeight='bold' color='gray.800'>
                            Interested in this Property?
                        </Text>
                        <Text fontSize='sm' color='gray.600'>
                            Speak directly with a Grandview-Properties advisor or reach our alternative hotline.
                        </Text>
                    </Box>
                    <Link href='/contact' passHref>
                        <Button mt={{ base: 3, md: 0 }} colorScheme='blue' size='md'>
                            Book a Viewing / Inquire
                        </Button>
                    </Link>
                </Flex>

                <SimpleGrid columns={{ base: 1, sm: 3 }} spacing={4} pt={2}>
                    <Box p={3} bg='white' borderRadius='md' boxShadow='xs'>
                        <Flex align='center' gap={2} mb={1}>
                            <Icon as={FiPhone} color='blue.500' />
                            <Text fontSize='xs' fontWeight='bold' color='gray.500'>PRIMARY CALL</Text>
                        </Flex>
                        <a href='tel:+18005550199' style={{ color: '#2b6cb0', fontSize: '0.9rem', fontWeight: 600 }}>
                            +1 (800) 555-0199
                        </a>
                    </Box>

                    <Box p={3} bg='white' borderRadius='md' boxShadow='xs'>
                        <Flex align='center' gap={2} mb={1}>
                            <Icon as={FiHeadphones} color='green.500' />
                            <Text fontSize='xs' fontWeight='bold' color='gray.500'>ALTERNATIVE HOTLINE</Text>
                        </Flex>
                        <a href='tel:+18005550144' style={{ color: '#2f855a', fontSize: '0.9rem', fontWeight: 600 }}>
                            +1 (800) 555-0144
                        </a>
                    </Box>

                    <Box p={3} bg='white' borderRadius='md' boxShadow='xs'>
                        <Flex align='center' gap={2} mb={1}>
                            <Icon as={FiMail} color='blue.500' />
                            <Text fontSize='xs' fontWeight='bold' color='gray.500'>ALTERNATIVE EMAIL</Text>
                        </Flex>
                        <a href='mailto:inquiries@grandview-properties.com' style={{ color: '#2b6cb0', fontSize: '0.85rem', fontWeight: 600 }}>
                            inquiries@grandview-properties.com
                        </a>
                    </Box>
                </SimpleGrid>
            </Box>
        </Box>
    );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
    const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
    return {
        props: {
            propertyDetails: data || null,
        }
    };
}
