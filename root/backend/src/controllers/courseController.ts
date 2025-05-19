import {Request, Response} from'express';
import {PrismaClient} from '@prisma/client';
import {sendConfirmEmail} from '../utils/mailer';
const prisma = new PrismaClient();
export const getCourses = async(req: Request, res: Response) => {
    const courses = await prisma.course.findMany();
    res.json(courses);
};
