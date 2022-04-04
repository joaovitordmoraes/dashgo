import {
  Flex,
  Input,
  Button,
  Stack,
  FormLabel,
  FormControl
} from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth="360px"
        bg="gray.800"
        padding="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                bgColor: 'gray.900'
              }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              focusBorderColor="pink.500"
              bgColor="gray.900"
              variant="filled"
              size="lg"
              _hover={{
                bgColor: 'gray.900'
              }}
            />
          </FormControl>
          <Button type="submit" mt="6" colorScheme="pink" size="lg">
            Entrar
          </Button>
        </Stack>
      </Flex>
    </Flex>
  )
}
