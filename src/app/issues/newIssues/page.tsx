'use client'
import { Button, Callout, TextField } from '@radix-ui/themes'
import React, { useState } from 'react'
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic'
import {Controller, useForm} from "react-hook-form"
import { useRouter } from 'next/navigation';
import axios from 'axios';
import {InfoCircledIcon} from "@radix-ui/react-icons"
const SimpleMDE = dynamic(() => import('react-simplemde-editor'), {
  ssr: false,
})

interface Issue{
  title : string
  description: string
}

const newIssues = () => {
  const {register,handleSubmit,control} = useForm<Issue>()
  const route = useRouter()
  const [error, setError] = useState("")
  
  return (
    <div className = "max-w-lg p-5">
      {error && (
        <Callout.Root color='red' className='mb-1'>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>
              {error}
            </Callout.Text>
        </Callout.Root>
      )}

      <form className='space-y-2' onSubmit={handleSubmit(async (data)=>{
        try {
          await axios.post("/api/issues",data)
          route.push("/issues")
        } catch (error) {
          setError('An unexpected error occured')
        }
      })}> 
          <TextField.Root placeholder="Input the title…" {...register("title")}></TextField.Root>
          <Controller
            name = "description"
            control = {control}
            render = {({field})=>
            <SimpleMDE placeholder="Input the Description…" {...field}/>}
          />
          <Button>Submit New Issues</Button> 
      </form>
    </div>
  )
}

export default newIssues