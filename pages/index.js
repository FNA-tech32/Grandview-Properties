import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button, Stack, Badge, SimpleGrid, Icon } from '@chakra-ui/react';
import { FiPhone, FiHeadphones, FiMail } from 'react-icons/fi';

import { baseUrl, fetchApi } from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
  <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
    <Image src={imageUrl} width={500} height={300} alt='banner' />
    <Box p='5'>
      <Text color='gray.500' fontSize='sm' fontWeight='medium'>
        {purpose}
      </Text>
      <Text fontSize='3xl' fontWeight='bold'>
        {title1}<br />{title2}
      </Text>
      <Text fontSize='lg' paddingTop='3' paddingBottom='3' color='gray.700'>
        {desc1}<br />{desc2}
      </Text>
      <Button fontSize='xl'>
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2='and more with Grandview-Properties'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
      />
      <Flex flexWrap='wrap'>
        {propertiesForRent?.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1='Find, Buy & Own Your'
        title2='Dream Home'
        desc1='Explore Apartments, land, builder floors,'
        desc2='villas and more with Grandview-Properties'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
      />
      <Flex flexWrap='wrap'>
        {propertiesForSale?.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

      {/* Branded CTA Section */}
      <Box my={12} mx={{ base: 4, md: 10 }} p={{ base: 6, md: 10 }} bg='gray.50' borderRadius='2xl' border='1px' borderColor='gray.200'>
        <Flex direction={{ base: 'column', md: 'row' }} justify='space-between' align='center' gap={6}>
          <Box maxW='600px'>
            <Badge colorScheme='blue' mb={2} px={3} py={1} borderRadius='full'>
              Grandview-Properties Concierge
            </Badge>
            <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight='extrabold' color='gray.800'>
              Ready to Discover Your Next Property?
            </Text>
            <Text fontSize='md' color='gray.600' mt={2}>
              Our property specialists are here to guide you through luxury purchases, verified rentals, and bespoke investment portfolios. Reach our primary desk or 24/7 alternative hotline anytime.
            </Text>
          </Box>
          <Stack direction={{ base: 'column', sm: 'row' }} spacing={4} w={{ base: 'full', md: 'auto' }}>
            <Link href='/contact' passHref>
              <Button colorScheme='blue' size='lg' w={{ base: 'full', sm: 'auto' }}>
                Contact Advisors
              </Button>
            </Link>
            <Link href='/search' passHref>
              <Button variant='outline' colorScheme='blue' size='lg' w={{ base: 'full', sm: 'auto' }}>
                Browse All
              </Button>
            </Link>
          </Stack>
        </Flex>

        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} mt={8} pt={6} borderTop='1px' borderColor='gray.200'>
          <Flex align='center' gap={3}>
            <Icon as={FiPhone} color='blue.500' w={5} h={5} />
            <Box>
              <Text fontSize='xs' color='gray.500' fontWeight='bold'>PRIMARY OFFICE</Text>
              <a href='tel:+18005550199' style={{ fontWeight: 600, color: '#2b6cb0' }}>+1 (800) 555-0199</a>
            </Box>
          </Flex>
          <Flex align='center' gap={3}>
            <Icon as={FiHeadphones} color='green.500' w={5} h={5} />
            <Box>
              <Text fontSize='xs' color='gray.500' fontWeight='bold'>24/7 ALTERNATIVE HOTLINE</Text>
              <a href='tel:+18005550144' style={{ fontWeight: 600, color: '#2f855a' }}>+1 (800) 555-0144</a>
            </Box>
          </Flex>
          <Flex align='center' gap={3}>
            <Icon as={FiMail} color='blue.500' w={5} h={5} />
            <Box>
              <Text fontSize='xs' color='gray.500' fontWeight='bold'>DIRECT EMAIL</Text>
              <a href='mailto:info@grandview-properties.com' style={{ fontWeight: 600, color: '#2b6cb0' }}>info@grandview-properties.com</a>
            </Box>
          </Flex>
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  return {
    props: {
      propertiesForSale: propertyForSale?.hits || [],
      propertiesForRent: propertyForRent?.hits || []
    }
  };
}
