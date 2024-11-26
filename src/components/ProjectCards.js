import React from 'react'
import { Stack, HStack, Box, Button, Text, Link, List, ListItem, ListIcon, Card, CardHeader, CardBody, CardFooter, Wrap, WrapItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import { Image } from '@chakra-ui/react';
import zeepimg from '../static/images/zeepservicesBG.jpg'
import humanAnatomy from '../static/images/HumanAnatomy.jpg'
import QRCodeimg from '../static/images/QRCodeimg.png'
import ratingView from '../static/images/ratingView.png'
import carar from '../static/images/carar.png'
import armeasure from '../static/images/armeasure.png'

const projects = [
    {
        name: "QR Code Scanner and Generater",
        skills: "Java, Kotlin, Figma, Android Studio, Jetpack Compose",
        description: [
            "QR Code Scanner and Generator allows users to scan and generate QR codes quickly and easily.",
            "Key features include fast scanning, custom QR code creation, and a modern UI with Jetpack Compose for enhanced performance."
        ],
        website: "https://github.com/dhairyapandya05/QR-Code-Scanner-and-Generator",
        image:QRCodeimg
    },
    {
        name: "Zeep Service",
        skills: "Java, Kotlin, Figma, Android Studio, Quick Work, Google GCP, Firebase, Firestore",
        description: [
            "Zeep Services is a travel app connecting students and drivers for efficient commutes, with features like flexible ride options, real-time updates, and complaint management.",
            "Key features include ride scheduling, cancellations, notifications, data insights, and Google Assistant integration for hands-free access."
        ],
        website: "https://github.com/dhairyapandya05/Van-Service",
        image:zeepimg

    },
    {
        name: "Human Anatomy Visualiser",
        skills: "Unity 3D, Google AR Core, Android, Blender",
        description: [
            "Explore interactive 3D models of human organs, bones, and muscles, with the ability to rotate, scale, and move them for a hands-on anatomy learning experience.",
            "Engage with quizzes, view different body systems, and enjoy realistic lighting and glow-in-the-dark models for an immersive AR environment."
        ],
        website: "https://github.com/dhairyapandya05/HumanAnatomyUsingAR",
        image:humanAnatomy

    }
    ,
    {
        name: "Custom Rating View for Android",
        skills: "Java, Kotlin, Android,Android Studio",
        description: [
            "Easily create and style star ratings with adjustable colors, sizes, and radii, either through XML or Kotlin code, to match your app's design.",
            "Quick setup via JitPack with flexible customization options, making it simple to add interactive star ratings to your Android app."
        ],
        website: "https://github.com/dhairyapandya05/Star_Android_Library",
        image:ratingView

    }
    ,
    {
        name: "AR - Car",
        skills: "C#, Google AR Core, Unity 3D, Visual Studio",
        description: [
            "Explore and customize 3D car models in your real-world environment. Move, rotate, and scale the car to fit your desired location, providing an immersive experience for users.",
            "Change the color of the car model in real-time and enjoy dynamic lighting effects that adjust based on your surroundings, making the car look as if it’s part of your environment."
        ],
        website: "https://github.com/dhairyapandya05/AR-car",
        image:carar

    }
    ,
    {
        name: "AR - Measure",
        skills: "C#, Google AR Core, Unity 3D, Visual Studio, Liner Algebra",
        description: [
            "Allows users to insert, delete, extract minimum and merge in Fibonacci heaps",
            "Fibonacci Heap is a specialized data structure known for its efficient operations, find minimum and merge heaps"
        ],
        website: "https://github.com/dhairyapandya05/rulAR",
        image:armeasure

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
                <Box w="100%" maxW={["300px", "400px", "450px", "500px"]} mx="auto" mb={5} overflow="hidden" rounded="lg" shadow="md">
                <Image
                    src={project.image} // Placeholder URL; replace with actual image URL
                    alt={`${project.name} image`}
                    w="100%" // Make the image responsive
                    h="auto"
                    maxH={["300px", "400px", "450px", "500px"]} // Keep image height constrained
                    objectFit="cover" // Ensures the image scales and fills the area
                    objectPosition="center" // Centers the visible part of the image
                />
                </Box>
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
