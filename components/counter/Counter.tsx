import { useState } from "react";
import MyButton from "../button/button";
import { useToast } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react'
import FormHandling from "../formHandling/FormHandling";
import { Input, Button } from '@chakra-ui/react'
import Link from 'next/link';

const Counter = () => {
    const [counterValue, setCounterValue] = useState(0);
    const toast = useToast()

    const IncrementHandler = ()=> {
        setCounterValue(counterValue + 1)
        toast({
            position: 'top',
            title: `State Updated as Increment & Curent Value is ${counterValue + 1 } `,
            status: 'success',
            duration: 9000,
            isClosable: true,
          })
        
    }
    const DecrementHandler = ()=> {
        setCounterValue(counterValue - 1)
        toast({
            position: 'top',
            title: `State Updated as Decrement & Curent Value is ${counterValue - 1}`,
            status: 'error',
            duration: 9000,
            isClosable: true,
          })
    }
    return(
        <>
            <Text fontSize='50px' color='green'> This is Counter App </Text>
            <MyButton btnColor="teal" btnVariant="solid" btnTitle="-" Handler={DecrementHandler} counterValueForDisable={counterValue} counterValue={counterValue} mycolor="pink"/> 
            <Text fontSize='5xl'>{counterValue} </Text>
            <MyButton btnColor="green" btnVariant="solid" btnTitle="+" Handler={IncrementHandler} counterValue={counterValue} mycolor="red"/>
            <br />
            <br />
            
            <Link href="form/formHandling"> Go to Form Data</Link>
        </>
    )
}
export default Counter;