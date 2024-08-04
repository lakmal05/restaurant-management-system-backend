// import { SENDGRID_API_KEY } from 'src/config/app-config';
import { SendGridCredentialsType } from './send-grid-config.type';

export const SendGridCredentials: SendGridCredentialsType = {
  api_key: process.env.SENDGRID_API_KEY,
};
