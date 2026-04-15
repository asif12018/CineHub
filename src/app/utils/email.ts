import { google } from "googleapis";
import AppError from "../../errorHelpers/AppError";
import status from "http-status";
import path from "path";
import config from "../config";
import ejs from "ejs";

const OAuth2 = google.auth.OAuth2;

const createOAuth2Client = () => {
  const oauth2Client = new OAuth2(
    config.GMAIL_CLIENT_ID,
    config.GMAIL_CLIENT_SECRET,
    "https://developers.google.com/oauthplayground"
  );

  oauth2Client.setCredentials({
    refresh_token: config.GMAIL_REFRESH_TOKEN,
  });

  return oauth2Client;
};

interface sendEmailOptions {
  to: string;
  subject: string;
  templateName: string;
  templateData: Record<string, any>;
}

export const sendEmail = async ({
  subject,
  templateData,
  templateName,
  to,
}: sendEmailOptions) => {
  try {
    const templatePath = path.resolve(
      process.cwd(),
      `src/app/templates/${templateName}.ejs`
    );
    const html = await ejs.renderFile(templatePath, templateData);

    // Get fresh access token using OAuth2
    const oauth2Client = createOAuth2Client();
    const accessToken = await oauth2Client.getAccessToken();

    const gmail = google.gmail({ version: "v1", auth: oauth2Client });

    // Build raw email (RFC 2822 format)
    const emailLines = [
      `From: "My App" <${config.GMAIL_USER}>`,
      `To: ${to}`,
      `Subject: ${subject}`,
      `MIME-Version: 1.0`,
      `Content-Type: text/html; charset=utf-8`,
      ``,
      html,
    ];

    const email = emailLines.join("\r\n");

    // Base64 encode (URL safe)
    const encodedEmail = Buffer.from(email)
      .toString("base64")
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");

    // Send via Gmail REST API (port 443 HTTPS — Render won't block this)
    const result = await gmail.users.messages.send({
      userId: "me",
      requestBody: {
        raw: encodedEmail,
      },
    });

    console.log(`Email sent to ${to}:`, result.data.id);
    return result;

  } catch (err: any) {
    console.log("Email sending error", err.message);
    throw new AppError(status.INTERNAL_SERVER_ERROR, "Failed to send email");
  }
};