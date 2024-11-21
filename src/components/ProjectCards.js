import React from 'react'
import { Stack, HStack, Box, Button, Text, Link, List, ListItem, ListIcon, Card, CardHeader, CardBody, CardFooter, Wrap, WrapItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'

const projects = [
    {
        name: "QR Code Scanner and Generater",
        skills: "Java, Kotlin, Figma, Android Studio, Jetpack Compose",
        description: [
            "Analyzes cricket match data using Hadoop's MapReduce functions (Mapper, Reducer, Combiner and Partitioner)",
            "Extracts insights on Total Runs Team-Wise, Total Runs Player-Wise, Top 3 Batsmen and Top 3 Bowlers"
        ],
        website: "https://github.com/dhairyapandya05/QR-Code-Scanner-and-Generator"
    },
    {
        name: "Zeep Service",
        skills: "Java, Kotlin, Figma, Android Studio, One Signal, Quick Work, Google GCP, Firebase, Firestore",
        description: [
            "Web application that demonstrates LL Parsing technique used by compilers to perform top-down non-recursive parsing",
            "Deployed using Streamlit Community Cloud"
        ],
        website: "https://github.com/dhairyapandya05/Van-Service"
    },
    {
        name: "Human Anatomy Visualiser",
        skills: "Unity 3D, Google AR Core, Android, Blender",
        description: [
            "Allows users to insert, delete, extract minimum and merge in Fibonacci heaps",
            "Fibonacci Heap is a specialized data structure known for its efficient operations, find minimum and merge heaps"
        ],
        website: "https://github.com/dhairyapandya05/HumanAnatomyUsingAR"
    }
]

const ProjectComponent = ({ project }) => {
    return (
        <WrapItem>
            <Card maxW={['sm', 'sm', 'xs', 'sm']} minH={['0px', '0px', '650px', '780px']} border="0px" bg="transparent" rounded="xl" shadow="xl">
                <CardHeader align="center">
                    <Stack justify="center" minH={['0px', '0px', '150px', '200px']} direction='column' spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Text fontWeight="bold" w="100%" align="center" fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]}>{project.name}</Text>

                        <Text fontWeight="bold" w="100%" align="center" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]}>{project.skills}</Text>
                    </Stack>
                </CardHeader>

                <CardBody>
                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={4}>
                        {project.description.map((project) => (
                            <ListItem key={project}>
                                <ListIcon as={FontAwesomeIcon} icon={faPencil} />
                                {project}
                            </ListItem>
                        ))}
                    </List>
                </CardBody>

                <CardFooter w="100%" justify="right">
                    <Link href={project.website} isExternal>
                        <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                            <HStack>
                                <Text>Github Link</Text>
                                <ExternalLinkIcon w={6} h={6} />
                            </HStack>
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </WrapItem>
    )
}

export default function ProjectCards() {
    return (
        <>
            <Wrap py={3} px={4} justify="center" spacing={[8, 8, 10, 12]}>
                {projects.map((project, index) => (
                    <ProjectComponent key={index} project={project} />
                ))}
            </Wrap>

            <Box pt={10} align="center">
                <Link href='https://github.com/dhairyapandya05?tab=repositories' isExternal>
                    <Button p={[3, 3, 5, 6]} bg="blue.900" border="2px" borderRadius="lg" _hover={{ bg: "transparent", borderColor: "blue.900", textColor: "blue.900" }} fontFamily="workSans" fontSize={["lg", "lg", "xl"]} textColor="white">
                        <HStack>
                            <Text>See All Projects</Text>
                            <ExternalLinkIcon w={6} h={6} />
                        </HStack>
                    </Button>
                </Link>
            </Box>
        </>
    )
}
