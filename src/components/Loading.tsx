import { Center, Spinner } from 'native-base'

export function Loading() {
  return(
    <Center flex={1} bg="gray.900">
      <Spinner size={56} color="yellow.500"/>
    </Center>
  )
}