import { Stack, Box, Center, Text, Image, List, ListItem, ListIcon, Accordion, AccordionButton, AccordionIcon, AccordionPanel, AccordionItem } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import magma from '../static/images/magma.png'
import deshaw from '../static/images/deshaw.png'
import google from '../static/images/google.png'

const works = {
    "Internship": [
        {
            image: magma,
            name: "Magma",
            duration: "Jan 2024 - MAy 2024",
            position: "Full Stack Developer",
            location: "Ahmedabad, Gujarat",
            description: [
                "Developing web applications from scratch and deploying them on company server",
                "Maintaining network infrastructure of the organisation",
                "Developed MagPort (magport.magmagroup.in), a SaaS container booking and logistics management software",
                "Developed Magma Factory (factory.magmagroup.in), a platform for procuring raw materials and uploading dead stock for liquidation",
                "Revamped Magma Green (green.magmagroup.in), an ESG data management software to record energy and water consumption and carbon footprint",
                "Developed Admin Dashboard (admin.magmagroup.in) for internal use by Operations team of Magma"
            ]
        },
        {
            image: deshaw,
            name: "D.E. Shaw & Co.",
            duration: "June 2023 - Aug 2023",
            position: "Technology Developer Intern",
            location: "Hyderabad, Telangana",
            description: [
                "Worked in Data Technologies related team (Oasis) in Front Office",
                "Accelerated short SQL queries using Apache Ignite",
                "Current software Apache Spark takes 1-2 minutes to execute a short query",
                "Developed a caching layer above the existing software and reduced query execution time to few seconds"
            ]
        },
        {
            image: google,
            name: "Google",
            duration: "May 2022 - Aug 2022",
            position: "Software STEP Intern",
            location: "Bangalore, Karnataka",
            description: [
                "Worked in Google CloudSearch team which is a Search Engine for client organisations",
                "Designed ingestion flow for FAQs and answers",
                "Used concepts of data sources and search applications",
                "Made Design Docs and presented solution in team meetings"
            ]
        }
    ]
    ,
    "Full Time": [
        {
            image: google,
            name: "Google",
            duration: "Upcoming",
            position: "Software Engineer",
            location: "Bangalore, Karnataka",
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
