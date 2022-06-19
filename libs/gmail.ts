import nodemailer from 'nodemailer';

const EMAIL = 'leticia@letscommunicate.nz';

const options = {
    'type': 'service_account',
    'project_id': 'gmail-service-346603',
    'private_key_id': '8af2494da9a1cbefcc6a24da09bc16398ab84f9a',
    'private_key': '-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCJs03tewTG/nnY\na4CXg/teBN2a+KKRrdCz+r563wswFF8PJPCJ0S/1u4llxyyx5z7KYlimEoGLBgKv\n5CcuJMhhppTLvyf/slLgXoD7Kp5P3sL4wePIM8dFhhWKTSsrUVXKmaAJnU7pByw/\nPvat+iHQ6U9qZsH5GZPqbgWRGU3yOjVRnrelMSTYF5ADBttyCdw+qkz/B+p3CdDy\nIr+Bmxdtx2VfjGxOMgH4Mvf3OzBPHSQmac/foZifsm2+FlY8CpFlmc/ZAeVgeIGa\nGQ+FMtVuXqQOEZ8utHzwZqBgxnbpsMyx2PvyHXJaoikwj2GG5s/ZQBYfhCJIy0td\n452fr+uDAgMBAAECggEAFZbwAEH/d8EXvYpCuSl6VJK9ZA+DqFpGP1HFt7ds0PcA\nsyZ+3ZIsy4HB2HFSsqSnwEzhyqKwKOn3qzhBubG5W9t7DORFvd4UXGq0x6yLnHON\nbOSJdYRDbsUdGiK17VltSBIEzj0ZzYjQXoIyubMJcPCDq70SFfT1WhYx9+lYbUKJ\njrogyDpUmFW8tNtGArhTuZyZHEqZEfjVi3vTbw2Is+dStyojBfgJhiNLpZb1SPiI\nqwj4TKqPUEqkWHGT2JucfrhzXi5Ykzc2oLLMFiYgoqe7DsjRODMsGcQ8OEMmvZ/d\nuLZw47EHr0xLqc3AQyj61fOSRGViJfqFlTOEpgPFMQKBgQC+Wa99EeU7EhxTXghT\ncj8RT1o67VfWPSp8zqaNZ9pGkiDrQzEYWgw/aOUi4QcXc7DvMicPC51ozKk1A6Bh\niDlexUeohLD8INn8PvDuyMCXtc5/9wqwhR1NR6dMxHA5hLaa30RxpJ4wH/30U6B5\nPJiuZvkC0hKmv17okMX+89P7zwKBgQC5MRQY4fsFj5PVldSWbtE53sdGSIoGuZ4I\nYBu9Klrj7EaPJIYgJYAtZ0WMtt4J8ZWF9/2CQNHHJcjxskH2HA3tY+OdvQMPk8R6\nKd/fzZ1waOl9ZviU6dNnefeQ9AiIaor+on36YR1g8r1yBCVZ6KT7J73G6rnaQl5U\nKJ9XthA+DQKBgQCK0zQWvld1pna8Iodl/Jucj0gaVAFMwZ1cGwcDeGuMLoUNsBp9\nTSdDk8gRkRav9vNi8CvmYC00Qpdhj7yHhWd6A92IPQYrS/ZPbsQfEpDL1I+/ajgE\nl4DQXOLaLSY//NeEyjLLwyiPprV7XQZbhWNBRt5zPSzXKhkY+oU8tS20pwKBgFz8\nurWfypZJOJbXS85ZSG9BYFf3Fm84BpT4BRWfzdGCEw/O7BX6Hnkt0KtOKwFdL5H8\nKmubtnnDjDloI1y7S3b2YBUVEhNhRBd/LS1IJhSKaSsRaCIFoqPjhx5emmY88RvY\nZV8yIjlKyTsVv9d8TFLb6puVwspH5utlFlVJUrCFAoGAEuN+7ZXCYCF7vbIEvmjK\nQqLRrx9LeNVsDelYI+XUwPWALXj1q5Ypi3yvsD2di/Cm0CkgE3cucfLkuSTZEkEZ\n08I7/nRKQ0cstM7d6ZptYLDyxFQlxR+//p66iN/Jnxprnw+S2y14gSeE09IRyUqB\nhC/fIixOplZytLoKyVqWRr8=\n-----END PRIVATE KEY-----\n',
    'client_email': 'gmail-service@gmail-service-346603.iam.gserviceaccount.com',
    'client_id': '101701548543473634149',
    'auth_uri': 'https://accounts.google.com/o/oauth2/auth',
    'token_uri': 'https://oauth2.googleapis.com/token',
    'auth_provider_x509_cert_url': 'https://www.googleapis.com/oauth2/v1/certs',
    'client_x509_cert_url': 'https://www.googleapis.com/robot/v1/metadata/x509/gmail-service%40gmail-service-346603.iam.gserviceaccount.com'
};

interface Props {
    email: string,
    subject: string,
    text: string
}

export const gmail = async ({ email, subject, text }: Props) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: EMAIL,
            serviceClient: options.client_id,
            privateKey: options.private_key
        }
    });

    try {
        const verified = await transporter.verify();

        console.log('Email verification', verified);

        const response = await transporter.sendMail({
            from: email,
            to: EMAIL,
            subject,
            text
        });

        console.log('Email sent!', response);
    } catch (error) {
        console.log(error);
    }
}
