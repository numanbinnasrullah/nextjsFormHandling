import { Button } from '@chakra-ui/react'

type btnPropTypes = {
    btnTitle: string,
    btnColor : string,
    btnVariant: string,
    mycolor:string,
    counterValueForDisable?: number,
    counterValue: number,
    Handler: React.MouseEventHandler<HTMLButtonElement>
}

const MyButton = (props : btnPropTypes) => {
   
    return(
        <>
            
                <Button colorScheme={props.counterValue >= 10 ? props.mycolor : props.btnColor} variant={props.btnVariant} onClick={props.Handler} disabled={props.counterValueForDisable <= 0} > {props.btnTitle} </Button>
           
        </>
    )
}
export default MyButton;