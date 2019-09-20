import * as express from 'express';
import * as mailgunLoader from 'mailgun-js';
import config from '../../config';

const router = express.Router();


let mailgun = mailgunLoader({
    apiKey: config.mailgun.apiKey,
    domain: config.mailgun.domain
}); 


const sendEmail = (to: string, from: string, subject: string, content: string) => {
    let data = {
        to,
        from,
        subject,
        text: content
    };
    return mailgun.messages().send(data);
};

router.post(`/`, async (req, res, next) => {
    try {
        await sendEmail('kvn35124@uab.edu', req.body.email, req.body.subject, req.body.message);
        res.json('Email Sent!');
    } catch (error) {
        console.log(error);
        res.status(500);
    }
})





export default router;