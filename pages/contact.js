import { useState } from 'react';
import Head from 'next/head';
import {
    Box,
    Flex,
    Text,
    Heading,
    SimpleGrid,
    Stack,
    Input,
    Textarea,
    Button,
    Select,
    Alert,
    AlertIcon,
    Badge,
    Icon
} from '@chakra-ui/react';
import {
    FiPhone,
    FiMail,
    FiMapPin,
    FiClock,
    FiHeadphones,
    FiMessageCircle,
    FiCheckCircle,
    FiSend
} from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        inquiryType: 'buy',
        preferredContact: 'primary-phone',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
        }, 600);
    };

    return (
        <>
            <Head>
                <title>Contact Us | Grandview-Properties</title>
                <meta
                    name='description'
                    content='Get in touch with Grandview-Properties. Contact our dedicated property specialists via primary phone, 24/7 alternative hotline, or email.'
                />
            </Head>

            <Box p={{ base: 4, md: 8 }} maxW='1100px' mx='auto'>
                {/* Header */}
                <Box textAlign='center' my={8}>
                    <Badge colorScheme='blue' px={3} py={1} borderRadius='full' fontSize='sm' mb={3}>
                        Grandview-Properties Support
                    </Badge>
                    <Heading as='h1' size='xl' color='blue.600' mb={3}>
                        Contact Grandview-Properties
                    </Heading>
                    <Text fontSize='lg' color='gray.600' maxW='650px' mx='auto'>
                        Have questions about buying, renting, or listing a property? Reach out via our primary office or our 24/7 alternative contact channels.
                    </Text>
                </Box>

                {/* Primary & Alternative Contact Cards */}
                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} mb={12}>
                    {/* Primary Contact Card */}
                    <Box
                        p={6}
                        bg='white'
                        borderRadius='lg'
                        boxShadow='md'
                        border='1px'
                        borderColor='blue.100'
                        transition='transform 0.2s'
                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                    >
                        <Flex alignItems='center' justify='space-between' mb={4}>
                            <Heading as='h2' size='md' color='gray.800'>
                                Primary Office & Inquiries
                            </Heading>
                            <Badge colorScheme='blue' fontSize='0.8em' px={2} py={0.5} borderRadius='md'>
                                Main Headquarters
                            </Badge>
                        </Flex>
                        <Text fontSize='sm' color='gray.600' mb={5}>
                            Our central headquarters manages property viewings, verified listings, and buyer consultations.
                        </Text>

                        <Stack spacing={4}>
                            <Flex alignItems='flex-start' gap={3}>
                                <Icon as={FiMapPin} w={5} h={5} color='blue.500' mt={1} />
                                <Box>
                                    <Text fontWeight='bold' fontSize='sm' color='gray.700'>Headquarters Address</Text>
                                    <Text fontSize='sm' color='gray.600'>Grandview Tower, Suite 1400, Business Bay, Dubai, UAE</Text>
                                </Box>
                            </Flex>

                            <Flex alignItems='center' gap={3}>
                                <Icon as={FiPhone} w={5} h={5} color='blue.500' />
                                <Box>
                                    <Text fontWeight='bold' fontSize='sm' color='gray.700'>Primary Phone</Text>
                                    <a href='tel:+18005550199' style={{ color: '#2b6cb0', fontSize: '0.875rem' }}>
                                        +1 (800) 555-0199
                                    </a>
                                    <Text as='span' fontSize='xs' color='gray.500' ml={2}>/ +971 4 555 0199</Text>
                                </Box>
                            </Flex>

                            <Flex alignItems='center' gap={3}>
                                <Icon as={FiMail} w={5} h={5} color='blue.500' />
                                <Box>
                                    <Text fontWeight='bold' fontSize='sm' color='gray.700'>Primary Email</Text>
                                    <a href='mailto:info@grandview-properties.com' style={{ color: '#2b6cb0', fontSize: '0.875rem' }}>
                                        info@grandview-properties.com
                                    </a>
                                </Box>
                            </Flex>

                            <Flex alignItems='center' gap={3}>
                                <Icon as={FiClock} w={5} h={5} color='blue.500' />
                                <Box>
                                    <Text fontWeight='bold' fontSize='sm' color='gray.700'>Office Hours</Text>
                                    <Text fontSize='sm' color='gray.600'>Mon - Sat: 9:00 AM - 7:00 PM (GST)</Text>
                                </Box>
                            </Flex>
                        </Stack>
                    </Box>

                    {/* Alternative Contact Card */}
                    <Box
                        p={6}
                        bg='white'
                        borderRadius='lg'
                        boxShadow='md'
                        border='1px'
                        borderColor='green.100'
                        transition='transform 0.2s'
                        _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                    >
                        <Flex alignItems='center' justify='space-between' mb={4}>
                            <Heading as='h2' size='md' color='gray.800'>
                                Alternative & 24/7 Channels
                            </Heading>
                            <Badge colorScheme='green' fontSize='0.8em' px={2} py={0.5} borderRadius='md'>
                                Fast Response
                            </Badge>
                        </Flex>
                        <Text fontSize='sm' color='gray.600' mb={5}>
                            Use our alternative channels for urgent requests, weekend queries, and international sales.
                        </Text>

                        <Stack spacing={4}>
                            <Flex alignItems='flex-start' gap={3}>
                                <Icon as={FiMapPin} w={5} h={5} color='green.500' mt={1} />
                                <Box>
                                    <Text fontWeight='bold' fontSize='sm' color='gray.700'>Alternative US Office</Text>
                                    <Text fontSize='sm' color='gray.600'>750 3rd Avenue, 21st Floor, New York, NY 10017, USA</Text>
                                </Box>
                            </Flex>

                            <Flex alignItems='center' gap={3}>
                                <Icon as={FiHeadphones} w={5} h={5} color='green.500' />
                                <Box>
                                    <Text fontWeight='bold' fontSize='sm' color='gray.700'>Alternative Hotline (24/7)</Text>
                                    <a href='tel:+18005550144' style={{ color: '#2f855a', fontSize: '0.875rem' }}>
                                        +1 (800) 555-0144
                                    </a>
                                </Box>
                            </Flex>

                            <Flex alignItems='center' gap={3}>
                                <Icon as={FiMessageCircle} w={5} h={5} color='green.500' />
                                <Box>
                                    <Text fontWeight='bold' fontSize='sm' color='gray.700'>Alternative Mobile / WhatsApp</Text>
                                    <a href='https://wa.me/971501234567' target='_blank' rel='noopener noreferrer' style={{ color: '#2f855a', fontSize: '0.875rem' }}>
                                        +971 50 123 4567
                                    </a>
                                </Box>
                            </Flex>

                            <Flex alignItems='center' gap={3}>
                                <Icon as={FiMail} w={5} h={5} color='green.500' />
                                <Box>
                                    <Text fontWeight='bold' fontSize='sm' color='gray.700'>Alternative Support & Inquiries</Text>
                                    <a href='mailto:support@grandview-properties.com' style={{ color: '#2f855a', fontSize: '0.875rem', display: 'block' }}>
                                        support@grandview-properties.com
                                    </a>
                                    <a href='mailto:inquiries@grandview-properties.com' style={{ color: '#2f855a', fontSize: '0.875rem' }}>
                                        inquiries@grandview-properties.com
                                    </a>
                                </Box>
                            </Flex>
                        </Stack>
                    </Box>
                </SimpleGrid>

                {/* Inquiry Form */}
                <Box
                    p={{ base: 6, md: 8 }}
                    bg='gray.50'
                    borderRadius='xl'
                    border='1px'
                    borderColor='gray.200'
                    mb={12}
                >
                    <Heading as='h3' size='lg' color='gray.800' mb={2}>
                        Send an Inquiry to Grandview-Properties
                    </Heading>
                    <Text fontSize='sm' color='gray.600' mb={6}>
                        Fill out the details below and an advisor from Grandview-Properties will follow up within 2 hours.
                    </Text>

                    {submitted ? (
                        <Alert
                            status='success'
                            variant='subtle'
                            flexDirection='column'
                            alignItems='center'
                            justifyContent='center'
                            textAlign='center'
                            borderRadius='md'
                            p={6}
                        >
                            <AlertIcon as={FiCheckCircle} boxSize='40px' mr={0} color='green.500' />
                            <Text fontSize='lg' fontWeight='bold' mt={3} mb={1} color='green.800'>
                                Message Sent Successfully!
                            </Text>
                            <Text fontSize='sm' color='green.700'>
                                Thank you for contacting Grandview-Properties. Our team has received your message and will reach out via your preferred contact channel shortly.
                            </Text>
                            <Button mt={4} size='sm' colorScheme='green' onClick={() => setSubmitted(false)}>
                                Send Another Inquiry
                            </Button>
                        </Alert>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} mb={4}>
                                <Box>
                                    <Text fontWeight='medium' fontSize='sm' mb={1} color='gray.700'>
                                        Your Full Name *
                                    </Text>
                                    <Input
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder='e.g., Alex Morgan'
                                        bg='white'
                                        required
                                    />
                                </Box>

                                <Box>
                                    <Text fontWeight='medium' fontSize='sm' mb={1} color='gray.700'>
                                        Email Address *
                                    </Text>
                                    <Input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder='e.g., alex@example.com'
                                        bg='white'
                                        required
                                    />
                                </Box>

                                <Box>
                                    <Text fontWeight='medium' fontSize='sm' mb={1} color='gray.700'>
                                        Phone Number *
                                    </Text>
                                    <Input
                                        type='tel'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        placeholder='e.g., +1 555 123 4567'
                                        bg='white'
                                        required
                                    />
                                </Box>

                                <Box>
                                    <Text fontWeight='medium' fontSize='sm' mb={1} color='gray.700'>
                                        Inquiry Purpose
                                    </Text>
                                    <Select
                                        name='inquiryType'
                                        value={formData.inquiryType}
                                        onChange={handleChange}
                                        bg='white'
                                    >
                                        <option value='buy'>Buying a Property</option>
                                        <option value='rent'>Renting a Home / Villa</option>
                                        <option value='sell'>Selling / Listing Property</option>
                                        <option value='valuation'>Property Valuation & Advice</option>
                                        <option value='other'>General Inquiries</option>
                                    </Select>
                                </Box>
                            </SimpleGrid>

                            <Box mb={4}>
                                <Text fontWeight='medium' fontSize='sm' mb={1} color='gray.700'>
                                    Preferred Contact Detail / Method
                                </Text>
                                <Select
                                    name='preferredContact'
                                    value={formData.preferredContact}
                                    onChange={handleChange}
                                    bg='white'
                                >
                                    <option value='primary-phone'>Primary Phone (+1 800 555-0199)</option>
                                    <option value='alternative-phone'>Alternative Hotline (+1 800 555-0144)</option>
                                    <option value='whatsapp'>Alternative WhatsApp (+971 50 123 4567)</option>
                                    <option value='email'>Email Response</option>
                                </Select>
                            </Box>

                            <Box mb={6}>
                                <Text fontWeight='medium' fontSize='sm' mb={1} color='gray.700'>
                                    Your Message or Requirements *
                                </Text>
                                <Textarea
                                    name='message'
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder='Tell us about the property you are interested in, budget, location preferences, or any specific requirements...'
                                    rows={5}
                                    bg='white'
                                    required
                                />
                            </Box>

                            <Button
                                type='submit'
                                colorScheme='blue'
                                size='lg'
                                leftIcon={<FiSend />}
                                isLoading={isSubmitting}
                                loadingText='Sending...'
                                px={8}
                            >
                                Submit Inquiry
                            </Button>
                        </form>
                    )}
                </Box>
            </Box>
        </>
    );
};

export default Contact;

