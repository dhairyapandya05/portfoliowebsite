import { Stack, VStack, Box, Text, Image, Center, Wrap, List, ListItem, ListIcon } from '@chakra-ui/react'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil } from '@fortawesome/free-solid-svg-icons'
import * as icons from './Icons'
import cp from '../static/images/competitiveprogramming.png'
import dsa from '../static/images/mydsa.png'
import datascience from '../static/images/frameworksandtechnologies.png'
import webdev from '../static/images/mobileapplicationdev.png'

const skills = [
    // {
    //     image: cp,
    //     title: "Competitive Programming",
    //     icons: [icons.Codeforces, icons.Codechef],
    //     description: [
    //         "Solved 1+ questions on Competitive Programming platforms",
    //         "Newbie (Max. Rating 0) on Codeforces",
    //         "0 Star (Max. Rating 0) on CodeChef"
    //     ]
    // },
    {
        image: dsa,
        title: "Data Structures and Algorithms",
        icons: [icons.Leetcode, icons.Gfg, icons.Interviewbit],
        description: [
            "Solved 600+ questions on LeetCode with highest rating of 1445",
            "Solved 150+ questions on GFG | 3 ⭐ coder with highest rating of 1766",
            "Good grasp on Dynamic Programming, Arrays, Trees and Graphs",
            "Appreciable knowledge in Design and Analysis of Algorithms"
        ]
    },
    {
        image: datascience,
        title: "Frameworks and Technologies",
        icons: [icons.VisualStudio,icons.VisualStudioCode,icons.OpenCV,icons.ARCore,icons.Git,icons.Cpp,icons.GitHub,icons.Python, icons.Matplotlib,icons.GoogleGCP,icons.Nodejs],
        description: [
            "Skilled in Image Processing Algorithms.",
            "Experienced in developing Augmented Reality Applications for iOS and Android.",
            "Worked with Google Firebase Cloud Functions and Backend Projects.",
            "Strong knowledge of OpenCV Library and its algorithms.",
            "Proficient in C++, Java, and Python for implementation."
        ]
    },
    {
        image: webdev,
        title: "Mobile Application Development",
        icons: [icons.Android,icons.JetpackCompose,icons.Androidstudio,icons.Firebase,icons.Unity,icons.Mysql,icons.Onesignal, icons.Postman],
        description: [
            "Skilled in frontend mobile technologies: Java, Kotlin, C#, and Jetpack Compose.",
            "Experienced in implementing Scheduled Notification Systems.",
            "Knowledgeable in databases like SQLite, Firestore, and Firebase Realtime Database.",
            "Experienced with REST APIs and prefer using Kotlin for programming."
        ]
    }
]

const SkillComponent = ({ skill }) => {
    return (
        <Box w="100%" px={8} py={5}>
            <Stack shadow="xl" rounded="xl" p={4} direction={['column', 'column', 'row']} spacing={5} w="100%" bg='white'>
                <Center w={["100%", "100%", "40%", "30%"]}>
                    <Image src={skill.image} alt={skill.name} w={["60%", "60%", "90%", "80%"]} h="auto" />
                </Center>

                <Stack spacing={4} w={["100%", "100%", "60%", "70%"]} >
                    <Box direction={['column', 'column', 'column', 'row']} spacing={2} bg="blue.900" textColor="white" w="100%" px={5} py={2} rounded="lg">
                        <Text fontFamily="paytone" fontSize={["lg", "lg", "xl", "2xl"]} align={["center", "center", "center", "left"]}>{skill.title}</Text>
                    </Box>

                    <Wrap spacing={5} fontSize="xl" py={2} justify={["center", "center", "center", "left"]}>
                        {skill.icons.map((Icon, index) => (
                            <Icon />
                        ))}
                    </Wrap>

                    <List fontFamily="workSans" fontSize={["lg", "lg", "xl", "2xl"]} color="blue.900" spacing={2}>
                        {skill.description.map((desc) => (
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

export default function Skills() {
    return (
        <VStack>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Interests and Skills
            </Text>

            {
                skills.map((skill, index) => (
                    <SkillComponent key={index} skill={skill} />
                ))
            }
        </VStack>
    )
}
