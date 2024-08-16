import { SendGridCredentialsType } from './send-grid-config.type';

export const SendGridCredentials: SendGridCredentialsType = {
  api_key: process.env.SENDGRID_API_KEY,
};

// SENDGRID_API_KEY="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"
// FROM_EMAIL="tharindu@webmotech.com"
// SMS_API_KEY='790addd8'
// SMS_API_SECRET='7oRBtjFBanPFDbdA'