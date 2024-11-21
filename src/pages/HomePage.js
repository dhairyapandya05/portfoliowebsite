import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import TopSection from '../components/TopSection'
import SocialMedia from '../components/SocialMedia'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'
import profile from '../static/images/profile.png'

const About = () => {
    return (
        <>
            <Text fontFamily="paytone" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                Dhairya Pandya
            </Text>
            <Text fontFamily="satisfy" fontSize={["2xl", "2xl", "3xl", "4xl"]} color="blue.900">
                ( dhairyapandya05 )
            </Text>
            <Text mb={[5, 5, 8]} align="center" fontFamily="workSans" fontSize={["xl", "xl", "2xl", "3xl"]} color="blue.900">
            Passionate about coding and solving real-world problems through technology, impacting thousands as an aspiring software developer
            </Text>
            <SocialMedia />
        </>
    )
}

export default function HomePage() {
    return (
        <Box as="body" bg="blue.50" pt={4}>
            <TopSection content={<About />} image={profile} />
            <Skills />
            <Footer />
            <ScrollToTop />
        </Box>
    )
}
