import { Text } from '@radix-ui/themes'
import React, { ReactNode ,PropsWithChildren} from 'react'

const ErrorMessage = ({children} : PropsWithChildren) => {
    if(children === null)
        return null
    return (
        <Text color='red' as = "p">{children}</Text>
    )
}

export default ErrorMessage