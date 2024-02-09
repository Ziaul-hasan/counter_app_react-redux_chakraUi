
import { Box, Text } from '@chakra-ui/react'
import './App.css'
import Counter from './components/Counter'

function App() {

  return (
    <>
      <Box w={600} boxShadow='inner' borderRadius='xl' p={10} my={20} backgroundColor='darkturquoise'>
        <div>
          <Text color='firebrick' fontSize={40} fontWeight='semibold'>Welcome to React Redux with Chakra UI</Text>
          <Counter></Counter>
        </div>
        <Text fontSize={16} color='white'>React-Redux counter is loading...</Text>
      </Box>
    </>
  )
}

export default App
