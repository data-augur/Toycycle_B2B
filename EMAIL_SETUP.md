# Email Setup Instructions

The contact form is now configured to send emails to sarfraz@toycycle.co when someone submits the form.

## Setup Steps

1. **Create a `.env.local` file** in the root directory with the following variables:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=your-email@gmail.com
```

2. **For Gmail Setup:**
   - Go to your Google Account settings
   - Enable 2-Step Verification
   - Generate an App Password: https://support.google.com/accounts/answer/185833
   - Use the App Password as `SMTP_PASSWORD`

3. **For Other Email Providers:**
   - **Outlook/Hotmail**: Use `smtp-mail.outlook.com` on port 587
   - **Yahoo**: Use `smtp.mail.yahoo.com` on port 587
   - **Custom SMTP**: Update `SMTP_HOST` and `SMTP_PORT` accordingly

4. **Restart your development server** after adding the environment variables:
   ```bash
   npm run dev
   ```

## Testing

After setup, test the contact form at `/contact` to ensure emails are being sent successfully.

## Troubleshooting

- If emails aren't sending, check the server console for error messages
- Ensure all environment variables are set correctly
- For Gmail, make sure you're using an App Password, not your regular password
- Check that the email service allows SMTP connections from your server
