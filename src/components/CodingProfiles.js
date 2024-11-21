import React from 'react'
import { IconButton, HStack, Link } from '@chakra-ui/react'
import { Codeforces, Codechef, Leetcode, Gfg } from './Icons'

export default function SocialMedia() {
  return (
    <>
      <HStack mb={[1, 1, 3]} spacing={[3, 3, 5]}>
        <Link href='https://codeforces.com/profile/dhairyapandya05' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Codeforces' bg="transparent" fontSize={["20px", "25px"]} icon={<Codeforces />} />
        </Link>

        <Link href='https://www.codechef.com/users/dhairya_2020' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Codechef' bg="transparent" fontSize={["30px", "35px"]} icon={<Codechef />} />
        </Link>

        <Link href='https://leetcode.com/u/dhairyapandya05/' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='Leetcode' bg="transparent" fontSize={["20px", "25px"]} icon={<Leetcode />} />
        </Link>

        <Link href='https://www.geeksforgeeks.org/user/dhairyapandya05/' isExternal>
          <IconButton _hover={{ bg: "transparent" }} aria-label='GFG' bg="transparent" fontSize={["20px", "25px"]} icon={<Gfg />} />
        </Link>
      </HStack>
    </>
  )
}
