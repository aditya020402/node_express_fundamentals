import sendEmail from "./sendEmail.js";

const sendResetPasswordEmail = async({name,email,token,origin}) => {
    const resetURL = `${origin}/user/reset-password?token=${token}$email=${email}`;
    const message = `<p> Please reset password by clicking on the following link:
    <a href="${resetURL}> Click here to reset password.</a>
    `;
    return sendEmail({
        to:email,
        subject:"Reset Password",
        html:`<h4>Hello, ${name}</h4>
        ${message}`,
    });
}

export default sendResetPasswordEmail;