import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>João Moraes</Text>
        <Text color="gray.300" fontSize="small">
          joaovitordmoraes@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="João Moraes"
        src="https://github.com/joaovitordmoraes.png"
      />
    </Flex>
  )
}
