'use client'
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic'
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
})
const newIssues = () => {
  return (
    <div className='p-5 max-w-lg space-y-2'> 
        <TextField.Root placeholder="Input the title…"></TextField.Root>
        <SimpleMDE placeholder="Input the Description…" />
        <Button>Submit New Issues</Button>
    </div>
  )
}

export default newIssues