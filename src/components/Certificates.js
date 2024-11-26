import React from 'react'
import { HStack, Center, Button, Image, Text, Link, Card, CardHeader, CardBody, CardFooter, Wrap, WrapItem, VStack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import illinois from '../static/images/illinois.png'
import googlearvr from '../static/images/googlearvr.png'
import linkedinlearning from '../static/images/linkedinlearning.png'
import udemy from '../static/images/udemy.png'


const certificates = [
    {
        icon: illinois,
        name: "Accelerated CS Fundamentals",
        author: "University of Illinois",
        link: "https://www.coursera.org/account/accomplishments/specialization/CN3OBEZSZDE3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=s12n"
    },
    {
        icon: googlearvr,
        name: "Introduction to Augmented Reality and ARCore",
        author: "Google AR & VR",
        link: "https://www.coursera.org/account/accomplishments/verify/PS3965BRPAPC"
    },
    {
        icon:udemy,
        name: "Android Custom Views",
        author:"Udemy",
        link: "https://www.udemy.com/certificate/UC-cfa53453-104c-424d-b0f4-46620d3c375a/"
    },
    {
        icon:linkedinlearning,
        name: "Building Chatbots Using Google DialogFlow",
        author:"LinkedIn Learning",
        link: "https://www.linkedin.com/learning/certificates/fb51a9752b1de242729b97258bcca9da38b259bd5f208bf23dc7f3e4db9720d6"
    }
]

const CertificateComponent = ({ certificate }) => {
    return (
        <WrapItem>
            <Card maxW={['sm', 'sm', 'xs', 'sm']} border="0px" bg="transparent" rounded="xl" shadow="xl">
                <CardHeader align="center">
                    <VStack spacing={8}>
                        <Center w="full" h="100px" justify="center">
                            <Image src={certificate.icon} alt={certificate.icon} w={["60%", "60%", "90%", "80%"]} h="auto" />
                        </Center>

                        <Center minH={['0px', '0px', '80px', '100px']} direction='column' spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                            <Text align="center" fontWeight="bold" w="100%" fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]}>{certificate.name}</Text>
                        </Center>
                    </VStack>
                </CardHeader>

                <CardBody>
                    <Text align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900">{certificate.author}</Text>
                </CardBody>

                <CardFooter w="100%" justify="center">
                    <Link href={certificate.link} isExternal>
                        <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                            <HStack>
                                <Text>Certificate</Text>
                                <ExternalLinkIcon w={6} h={6} />
                            </HStack>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </WrapItem>
    )
}

export default function Certificates() {
    return (
        <Wrap mt={2} py={3} px={5} justify="center" spacing={[8, 8, 10, 12]}>
            {certificates.map((certificate, index) => (
                <CertificateComponent key={index} certificate={certificate} />
            ))}
        </Wrap>
    )
}
