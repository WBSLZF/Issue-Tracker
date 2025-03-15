import { Button, TextArea, TextField } from '@radix-ui/themes'
import React from 'react'

const newIssues = () => {
  return (
    <div className='p-5 max-w-lg space-y-2'> 
        <TextField.Root placeholder="Input the title…"></TextField.Root>
        <TextArea placeholder="Input the Description…" />
        <Button>Submit New Issues</Button>
    </div>
  )
}

export default newIssues