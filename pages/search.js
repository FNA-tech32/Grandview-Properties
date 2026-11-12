import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';
import { fetchApi, baseUrl } from '../utils/fetchApi';

const noresult = '/assets/images/noresult.svg';

const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();
    const formattedPurpose = router.query.purpose ? router.query.purpose.replace('-', ' ') : 'for Rent';

    return (
        <Box>
            <Head>
                <title>Properties {formattedPurpose} | Grandview-Properties</title>
                <meta name='description' content={`Browse verified properties ${formattedPurpose} with Grandview-Properties advanced search and real-time filters.`} />
            </Head>
            <Flex
                cursor='pointer'
                bg='gray.100'
                borderBottom='1px'
                borderColor='gray.200'
                p='2'
                fontWeight='black'
                fontSize='lg'
                justifyContent='center'
                alignItems='center'
                onClick={() => setSearchFilters((prevFilters) => !prevFilters)}
            >
                <Text>Search Property By Filters</Text>
                <Icon paddingLeft='2' w='7' as={BsFilter} />
            </Flex>
            {searchFilters && <SearchFilters />}
            <Text fontSize='2xl' p='4' fontWeight='bold' textTransform='capitalize'>
                Properties {formattedPurpose}
            </Text>
            <Flex flexWrap='wrap'>
                {properties?.map((property) => <Property key={property.id} property={property} />)}
            </Flex>
            {properties?.length === 0 && (
                <Flex justifyContent='center' alignItems='center' flexDirection='column' marginTop='5' marginBottom='5'>
                    <Image alt='no result' src={noresult} width={200} height={200} />
                    <Text fontSize='2xl' marginTop='3'>No Results Found</Text>
                </Flex>
            )}
        </Box>
    );
};

export default Search;

export async function getServerSideProps({ query }) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '0';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '0';
    const bathsMin = query.bathsMin || '0';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
    const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
    return {
        props: {
            properties: data?.hits || [],
        }
    };
}
