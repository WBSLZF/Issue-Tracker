'use client'
import { Button, TextField } from '@radix-ui/themes'
import React from 'react'
import "easymde/dist/easymde.min.css";
import dynamic from 'next/dynamic'
import {Controller, useForm} from "react-hook-form"
import { useRouter } from 'next/navigation';
import axios from 'axios';
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
  return (
    <form className='p-5 max-w-lg space-y-2' onSubmit={handleSubmit(async (data)=>{
        await axios.post("/api/issues",data)
        route.push("/issues")
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
  )
}

export default newIssues