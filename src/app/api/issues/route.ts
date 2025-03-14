import { NextResponse } from "next/server";
import {z} from "zod";
import prisma from "@/app/lib/prisma";
const createIssueSchema = z.object({
    "title": z.string().min(1).max(255),
    "description": z.string().min(1)
})          
export async function POST(request: Request) {
    const body = await request.json();
    const validataResult = createIssueSchema.safeParse(body);
    if (!validataResult.success) {
        return NextResponse.json({error: validataResult.error.errors}, {status: 400});
    }
    const newIssue = await prisma.issue.create({
        data: {
            title: validataResult.data.title,
            description: validataResult.data.description,
        },
    });


    return NextResponse.json(newIssue, {status: 201});
}