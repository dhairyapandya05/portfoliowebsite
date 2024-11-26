import { Stack, Box, Center, Text, Image, List, ListItem, ListIcon, Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import magma from '../static/images/magma.png'
import deshaw from '../static/images/deshaw.png'
import google from '../static/images/google.png'
import motorola from '../static/images/motorolalogo.png'
import stpl from '../static/images/stpl.png'
import oneoneseventechnologies from '../static/images/oneoneseventechnologies.png'
import urbanoinfotech from '../static/images/urbanoinfotech.png'


const works = {
    "Internship": [
        {
            image: stpl,
            name: "STPL",
            duration: "Dec 2024 - July 2025",
            position: "R & D Software Developer",
            location: "Surat, Gujarat",
            description: [
                "Designed and implemented an automated system using OpenCV and Python to generate precise 3D models of diamonds from 2D images, enhancing gemological analysis and design accuracy.",
                "Developed algorithms to detect corners and feature points on diamonds, ensuring accurate identification of critical geometric properties.",
                "Employed Delaunay Triangulation to create connected polygon meshes and Hough Line Transformation for detecting and analyzing lines and intersections within images.",
                "Built a custom edge detection algorithm using Bresenham's Line Algorithm to identify critical edges in diamond images with high precision.",
                "Revolutionized diamond modeling workflows by integrating advanced computational geometry, reducing manual intervention, and improving accuracy in gemological design and analysis."
            ]
        },
        {
            image: oneoneseventechnologies,
            name: "One 17 Technologies",
            duration: "Dec 2023 - July 2024",
            position: "Mobile Application Software Developer",
            location: "Meerut, Uttar Pradesh",
            description: [
                "Implemented Firebase Crashlytics to identify and resolve critical bugs swiftly, improving app stability and user experience across Android and iOS platforms.",
                "Configured Firebase Dynamic Links to serve platform-specific experiences, significantly streamlining navigation and enhancing user engagement for both Android and iOS customers.",
                "Extensively utilized Firebase Realtime Database for seamless, low-latency data synchronization, enabling a responsive and interactive user experience.",
                "Optimized app reliability through crash monitoring and user engagement via dynamic links, leading to increased customer satisfaction and retention rates.",
                "Successfully tailored Firebase features to meet platform-specific requirements, improving operational efficiency and addressing the unique needs of Android and iOS users."
            ]
        },
        {
            image: motorola,
            name: "Motorola Solutions",
            duration: "Jun 2022 - Jan 2023",
            position: "Web Developer",
            location: "Bangalore, Karnataka",
            description: [
                "Gained hands-on experience with cutting-edge frameworks, focusing on developing secure, scalable, and responsive web applications.",
                " Implemented JWT-based authentication in Angular to safeguard user data and enhance web application security.",
                "Acquired a strong understanding of MVC architecture, enabling structured application development and streamlined maintenance.",
                "Received professional training in modern web development tools, empowering the creation of dynamic and interactive user experiences.",
                "Strengthened web application reliability by incorporating advanced authentication and security measures, ensuring data protection and user trust."
            ]
        }
    ]
    ,
    "Full Time": [
        {
            image: urbanoinfotech,
            name: "Urbano Infotech",
            duration: "Present",
            position: "SDE 1",
            location: "Ahmedabad, Gujarat",
            description: [
            ]
        }
    ]
}

const WorkComponent = ({ work }) => {
    return (
        <Box w="100%" px={2} py={5}>
            <Stack shadow="xl" rounded="xl" p={4} direction={['column', 'column', 'row']} spacing={5} w="100%">
                <Center w={["100%", "100%", "40%", "30%"]}>
                    <Image src={work.image} alt={work.name} w={["60%", "60%", "90%", "80%"]} h="auto" />
                </Center>

                <Stack spacing={4} w={["100%", "100%", "60%", "70%"]} >

                    <Stack direction={['column', 'column', 'column', 'row']} spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Stack w={["100%", "100%", "100%", "50%"]} direction="column">
                            <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{work.name}</Text>

                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{work.position}</Text>
                        </Stack>

                        <Stack w={["100%", "100%", "100%", "50%"]} direction="column">
                            <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "right"]}>{work.duration}</Text>

                            <Text fontWeight="bold" fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "right"]}>{work.location}</Text>
                        </Stack>
                    </Stack>

                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={2}>
                        {work.description.map((desc) => (
                            <ListItem key={desc}>
                                <ListIcon as={FontAwesomeIcon} icon={faPencil} />
                                {desc}
                            </ListItem>
                        ))}
                    </List>
                </Stack>
            </Stack >
        </Box >
    )
}

const WorkAccordion = ({ workType, work }) => {
    return (
        <Accordion allowToggle mb={8}>
            <AccordionItem rounded="xl">
                <AccordionButton rounded="xl" p={5} border="2px" borderColor="blue.900" color="blue.900" _hover={{ bg: 'blue.900', color: 'white' }} _expanded={{ bg: 'blue.900', color: 'white', roundedBottom: '0px' }}>
                    <Box as="span" flex='1' textAlign='left'>
                        <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "left"]}>
                            {workType}
                        </Text>
                    </Box>
                    <AccordionIcon w={8} h={8} />
                </AccordionButton>
                <AccordionPanel roundedBottom="xl" border="2px" borderColor="blue.900">
                    {
                        work.map((w, index) => (
                            <WorkComponent key={index} work={w} />
                        ))
                    }
                </AccordionPanel>
            </AccordionItem>
        </Accordion>
    )
}

export default function Works() {
    return (
        <Box py={4} px={[5, 5, 8, 10]}>
            {
                Object.keys(works).map((workType, index) => (
                    <WorkAccordion key={index} workType={workType} work={works[workType]} />
                ))
            }
        </Box>
    )
}
