import nodemailer from 'nodemailer';

export const sendConfirmEmail = async(to: string, name: string) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });
    await transporter.sendMail({
        from: `"College Course Bot" <${process.env.EMAIL_USER}>`,
        to,
        subject: "Course Registration Confirmation",
        text: `Hey ${name}, you have officially been enrolled in your desired course!\n
                The rest of your student details will be sent over closer to the course start date.\n
                If you have any questions, please email 4021980@hruc.ac.uk.\n\n
                Welcome to Richmond upon Thames College!`,
    });
};
