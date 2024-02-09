/* eslint-disable no-unused-vars */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementCounter, incrementCounter, resetCounter } from '../Services/action/CounterAction';
import { Box, Button, Text } from '@chakra-ui/react';

function Counter() {

    const count = useSelector(state => state.count);

    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter())
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }

    const handleReset = () => {
        dispatch(resetCounter())
    }


    return (
        <>
            <Box maxW={300} mx='auto' p={5} my={8} borderRadius="xl" bg='lightblue'>
                <Text color='firebrick' fontSize={36} fontWeight='semibold'>Counter App</Text>
                <Text fontSize={36} fontWeight='bold'>{count}</Text>
            </Box>
            <Box p={10} bg='lightblue' borderRadius="xl" my={8}>
                <Button px={5} py={2} mx={2} bg="gainsboro" border='none' boxShadow='base' onClick={handleIncrement}>Increment</Button>
                <Button px={5} py={2} mx={2} bg="gainsboro" border='none' boxShadow='base' onClick={handleDecrement}>Decrement</Button>
                <Button px={5} py={2} mx={2} bg="gainsboro" border='none' boxShadow='base' onClick={handleReset}>Reset</Button>
            </Box>
        </>
    )
}

export default Counter
