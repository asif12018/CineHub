var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module) {
    "use strict";
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms3) {
      var msAbs = Math.abs(ms3);
      if (msAbs >= d) {
        return Math.round(ms3 / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms3 / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms3 / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms3 / s) + "s";
      }
      return ms3 + "ms";
    }
    function fmtLong(ms3) {
      var msAbs = Math.abs(ms3);
      if (msAbs >= d) {
        return plural(ms3, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms3, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms3, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms3, msAbs, s, "second");
      }
      return ms3 + " ms";
    }
    function plural(ms3, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms3 / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// src/app.ts
import express3 from "express";
import cors from "cors";

// src/app/config/index.ts
import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env") });
var config_default = {
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
  BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
  NODE_ENV: process.env.NODE_ENV,
  FRONTEND_URL: process.env.FRONTEND_URL,
  ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET,
  ACCESS_TOKEN_EXPIRES_IN: process.env.ACCESS_TOKEN_EXPIRES_IN,
  REFRESH_TOKEN_EXPIRES_IN: process.env.REFRESH_TOKEN_EXPIRES_IN,
  BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN: process.env.BETTER_AUTH_SESSION_TOKEN_EXPIRES_IN,
  BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE: process.env.BETTER_AUTH_SESSION_TOKEN_UPDATE_AGE,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL: process.env.GOOGLE_CALLBACK_URL,
  EMAIL_SENDER_SMTP_USER: process.env.EMAIL_SENDER_SMTP_USER,
  EMAIL_SENDER_SMTP_PASS: process.env.EMAIL_SENDER_SMTP_PASS,
  EMAIL_SENDER_SMTP_HOST: process.env.EMAIL_SENDER_SMTP_HOST,
  EMAIL_SENDER_SMTP_PORT: process.env.EMAIL_SENDER_SMTP_PORT,
  EMAIL_SENDER_SMTP_FROM: process.env.EMAIL_SENDER_SMTP_FROM,
  CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
  CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY,
  STRIPE_WEBHOOK_SECRET: process.env.STRIPE_WEBHOOK_SECRET,
  SUPER_ADMIN_EMAIL: process.env.SUPER_ADMIN_EMAIL,
  SUPER_ADMIN_PASSWORD: process.env.SUPER_ADMIN_PASSWORD
};

// src/app.ts
import { toNodeHandler } from "better-auth/node";

// src/app/lib/auth.ts
import { betterAuth } from "better-auth";

// src/app/utils/email.ts
import nodemailer from "nodemailer";

// src/errorHelpers/AppError.ts
var AppError = class extends Error {
  statusCode;
  constructor(statusCode, message, stack = "") {
    super(message);
    this.statusCode = statusCode;
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
};
var AppError_default = AppError;

// src/app/utils/email.ts
import status from "http-status";
import path2 from "path";
import ejs from "ejs";
var transporter = nodemailer.createTransport({
  host: config_default.EMAIL_SENDER_SMTP_HOST,
  secure: true,
  auth: {
    user: config_default.EMAIL_SENDER_SMTP_USER,
    pass: config_default.EMAIL_SENDER_SMTP_PASS
  },
  port: Number(config_default.EMAIL_SENDER_SMTP_PORT)
});
var sendEmail = async ({ subject, templateData, templateName, to, attachments }) => {
  try {
    const templatePath = path2.resolve(process.cwd(), `src/app/templates/${templateName}.ejs`);
    const html = await ejs.renderFile(templatePath, templateData);
    const info = await transporter.sendMail({
      from: config_default.EMAIL_SENDER_SMTP_USER,
      to,
      subject,
      html,
      attachments: attachments?.map((attachment) => {
        return {
          filename: attachment.filename,
          content: attachment.content,
          contentType: attachment.contentType
        };
      })
    });
    console.log(`Email sent to ${to}:`, info.messageId);
    return info;
  } catch (err) {
    console.log("Email sending error", err.message);
    throw new AppError_default(status.INTERNAL_SERVER_ERROR, "Failed to send email");
  }
};

// src/app/lib/auth.ts
import { prismaAdapter } from "better-auth/adapters/prisma";

// src/app/lib/prisma.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
var connectionString = config_default.DATABASE_URL;
var adapter = new PrismaPg({ connectionString });
var prisma = new PrismaClient({ adapter });

// src/app/lib/auth.ts
import { bearer, emailOTP } from "better-auth/plugins";
var auth = betterAuth({
  baseURL: config_default.BETTER_AUTH_URL,
  secret: config_default.BETTER_AUTH_SECRET,
  database: prismaAdapter(prisma, {
    provider: "postgresql"
    // or "mysql", "postgresql", ...etc
  }),
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true
  },
  //social provider || login with social media
  //   socialProviders:{
  //     google:{
  //       clientId: envVars.GOOGLE_CLIENT_ID,
  //       clientSecret: envVars.GOOGLE_CLIENT_SECRET,
  //       // callbackURL: envVars.GOOGLE_CALLBACK_URL,
  //       mapProfileToUser: () =>{
  //         return {
  //           role: Role.PATIENT,
  //           status: UserStatus.ACTIVE,
  //           needPasswordChange: false,
  //           emailVerified: true,
  //           isDeleted: false,
  //           deletedAt: null
  //         }
  //       }
  //     }
  //   },
  // email verificaiton
  emailVerification: {
    sendOnSignUp: true,
    // sendOnSignIn: true,
    autoSignInAfterVerification: true
  },
  //addictional fields for user
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: false,
        defaultValue: "USER"
      },
      gender: {
        type: "string",
        required: true,
        defaultValue: "MALE"
      },
      banned: {
        type: "boolean",
        required: false,
        defaultValue: false
      },
      banReason: {
        type: "string",
        required: false
      },
      banExpires: {
        type: "date",
        required: false
      }
    }
  },
  plugins: [
    bearer(),
    //plugins to send email for email verificaiton
    emailOTP({
      overrideDefaultEmailVerification: true,
      async sendVerificationOTP({ email, otp, type }) {
        if (type === "email-verification") {
          const user = await prisma.user.findFirst({
            where: {
              email
            }
          });
          if (!user) {
            console.error("User not found for email: ", email);
            return;
          }
          if (user && user.role === "ADMIN") {
            console.log(`User with this email ${email} is admin, so not sending email`);
            return;
          }
          if (user && !user.emailVerified) {
            await sendEmail({
              to: email,
              subject: "Verify Your email",
              templateName: "otp",
              templateData: {
                name: user.name,
                otp
              }
            });
          }
        } else if (type = "forget-password") {
          const user = await prisma.user.findFirst({
            where: {
              email
            }
          });
          if (user) {
            await sendEmail({
              to: email,
              subject: "Password Reset OTP",
              templateName: "otp",
              templateData: {
                name: user.name,
                otp
              }
            });
          }
        }
      },
      expiresIn: 2 * 60,
      // valid for 2mins
      otpLength: 6
      // otp will be 6 digits long
    })
  ],
  session: {
    expiresIn: 60 * 60 * 60 * 24,
    // 1day in seconds
    updateAge: 60 * 60 * 60 * 24,
    // 1day in seconds
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 60 * 24
      // 1day in seconds
    }
  },
  // redirectURLs:{
  //   signIn: `${process.env.BETTER_AUTH_URL}/api/v1/auth/google/success`
  // },
  trustedOrigins: [
    process.env.BETTER_AUTH_URL || "http://localhost:5000",
    process.env.FRONTEND_URL || "http://localhost:3000"
  ],
  advanced: {
    // disableCSRFCheck: true
    useSecureCookies: false,
    cookies: {
      state: {
        attributes: {
          sameSite: "none",
          secure: true,
          httpOnly: true,
          path: "/"
        }
      }
    },
    sessionToken: {
      attributes: {
        sameSite: "none",
        secure: true,
        httpOnly: true,
        path: "/"
      }
    }
  }
});

// src/app.ts
import cookieParser from "cookie-parser";

// src/app/routes/index.ts
import { Router as Router12 } from "express";

// src/app/modules/auth/auth.routes.ts
import { Router } from "express";

// src/app/shared/catchAsync.ts
var catchAsync = (fn) => {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

// src/app/modules/auth/auth.service.ts
import status3 from "http-status";

// src/app/utils/jwt.ts
import jwt from "jsonwebtoken";
var createToken = (payload, secret, { expiresIn }) => {
  const token = jwt.sign(payload, secret, { expiresIn });
  return token;
};
var verifyToken = (token, secret) => {
  try {
    const decode = jwt.verify(token, secret);
    return {
      success: true,
      data: decode
    };
  } catch (err) {
    return {
      success: false,
      message: err.message,
      err
    };
  }
};
var decodeToken = (token) => {
  const decode = jwt.decode(token);
  return decode;
};
var jwtUtils = {
  createToken,
  verifyToken,
  decodeToken
};

// src/app/utils/cookie.ts
var setCookie = (res, key, value, options) => {
  res.cookie(key, value, options);
};
var getCookie = (req, key) => {
  return req.cookies[key];
};
var clearCookie = (res, key, options) => {
  res.clearCookie(key, options);
};
var CookieUtils = {
  setCookie,
  getCookie,
  clearCookie
};

// src/app/utils/token.ts
var import_ms = __toESM(require_ms());
var getAccessToken = (payload) => {
  const accessToken = jwtUtils.createToken(
    payload,
    config_default.ACCESS_TOKEN_SECRET,
    { expiresIn: config_default.ACCESS_TOKEN_EXPIRES_IN }
  );
  return accessToken;
};
var getRefreshToken = (payload) => {
  const refreshToken = jwtUtils.createToken(
    payload,
    config_default.REFRESH_TOKEN_SECRET,
    { expiresIn: config_default.REFRESH_TOKEN_EXPIRES_IN }
  );
  return refreshToken;
};
var setAccessTokenCookie = (res, token) => {
  CookieUtils.setCookie(res, "accessToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    //set access token should be 1day
    maxAge: 60 * 60 * 24 * 1e3
  });
};
var setRefreshTokenCookie = (res, token) => {
  CookieUtils.setCookie(res, "refreshToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    //max age is 7days
    maxAge: 60 * 60 * 24 * 7 * 1e3
  });
};
var setBetterAuthSessionCookie = (res, token) => {
  const maxAge = (0, import_ms.default)(config_default.REFRESH_TOKEN_EXPIRES_IN);
  CookieUtils.setCookie(res, "better-auth.session_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    //max is 1day
    maxAge: 60 * 60 * 24 * 1e3
  });
};
var tokenUtils = {
  getAccessToken,
  getRefreshToken,
  setAccessTokenCookie,
  setRefreshTokenCookie,
  setBetterAuthSessionCookie
};

// src/app/modules/auth/auth.service.ts
var import_ms2 = __toESM(require_ms());

// src/app/utils/cloudinary.config.ts
import { v2 as cloudinary } from "cloudinary";
import status2 from "http-status";
cloudinary.config({
  cloud_name: config_default.CLOUDINARY_CLOUD_NAME,
  api_key: config_default.CLOUDINARY_API_KEY,
  api_secret: config_default.CLOUDINARY_SECRET
});
var deleteFileFromCloudinary = async (url) => {
  try {
    const regex = /\/v\d+\/(.+?)(?:\.[a-zA-Z0-9]+)+$/;
    const match = url.match(regex);
    if (match && match[1]) {
      const publicId = match[1];
      await cloudinary.uploader.destroy(publicId, { resource_type: "image" });
      console.log(`File ${publicId} deleted from cloudinary`);
    }
  } catch (err) {
    console.log("deletation failed. error:", err);
    throw new AppError_default(status2.INTERNAL_SERVER_ERROR, "Failed to delete file from cloudinary");
  }
};
var cloudinaryUpload = cloudinary;

// src/app/modules/auth/auth.service.ts
var registerUser = async (payload) => {
  const maxAgeOfAccessToken = (0, import_ms2.default)(config_default.ACCESS_TOKEN_EXPIRES_IN);
  const maxAgeOfRefreshToken = (0, import_ms2.default)(
    config_default.REFRESH_TOKEN_EXPIRES_IN
  );
  const data = await auth.api.signUpEmail({
    body: payload
  });
  if (!data.user) {
    throw new AppError_default(status3.BAD_REQUEST, "Failed to register a user");
  }
  const accessToken = tokenUtils.getAccessToken({
    userId: data.user.id,
    role: data.user.role,
    name: data.user.name,
    email: data.user.email
  });
  const refreshToken = tokenUtils.getRefreshToken({
    userId: data.user.id,
    role: data.user.role,
    name: data.user.name,
    email: data.user.email
  });
  return {
    token: data.token,
    accessToken,
    refreshToken,
    user: data.user
  };
};
var logInUser = async (payload) => {
  const maxAgeOfAccessToken = (0, import_ms2.default)(config_default.ACCESS_TOKEN_EXPIRES_IN);
  const maxAgeOfRefreshToken = (0, import_ms2.default)(
    config_default.REFRESH_TOKEN_EXPIRES_IN
  );
  const result = await auth.api.signInEmail({ body: payload });
  if (!result) {
    throw new AppError_default(status3.BAD_REQUEST, "invalid email or password");
  }
  if (result.user.banned === true) {
    throw new AppError_default(
      status3.UNAUTHORIZED,
      "unfortunatly you are banned for violating our terms and conditions"
    );
  }
  const accessToken = tokenUtils.getAccessToken({
    userId: result.user.id,
    role: result.user.role,
    name: result.user.name,
    email: result.user.email
  });
  const refreshToken = tokenUtils.getRefreshToken({
    userId: result.user.id,
    role: result.user.role,
    name: result.user.name,
    email: result.user.email
  });
  return {
    token: result.token,
    accessToken,
    refreshToken,
    user: result.user
  };
};
var updateUser = async (id, payload, user) => {
  const isDoctorExist = await prisma.user.findFirstOrThrow({
    where: {
      id,
      email: user.email
    }
  });
  console.log("all photos url", isDoctorExist.image, payload.image);
  if (isDoctorExist.image && payload.image) {
    await deleteFileFromCloudinary(isDoctorExist.image);
  }
  const result = await prisma.user.update({
    where: {
      id: isDoctorExist.id
    },
    data: {
      name: payload.name,
      image: payload.image,
      gender: payload.gender
    }
  });
  return result;
};
var verifyEmailOtp = async (payload) => {
  const result = await auth.api.verifyEmailOTP({ body: payload });
  if (!result) {
    throw new AppError_default(status3.BAD_REQUEST, "invalid email or otp");
  }
  return result;
};
var getMe = async (user) => {
  const userData = await prisma.user.findFirstOrThrow({
    where: {
      email: user.email
    },
    include: {
      reviews: true,
      reviewLikes: true,
      comments: true,
      watchlist: true,
      purchases: true,
      notifications: true
    }
  });
  if (user.userId !== userData.id) {
    throw new AppError_default(status3.UNAUTHORIZED, "You dont have permission to perform this action");
  }
  return userData;
};
var getNewToken = async (refreshToken, sessionToken) => {
  const isSessionTokenExist = await prisma.session.findUnique({
    where: {
      token: sessionToken
    },
    include: {
      user: true
    }
  });
  if (!isSessionTokenExist) {
    throw new AppError_default(status3.BAD_REQUEST, "invalid session token");
  }
  if (isSessionTokenExist.user.banned === true) {
    throw new AppError_default(status3.UNAUTHORIZED, "You are banned from accessing this service");
  }
  const verifiedRefreshToken = jwtUtils.verifyToken(refreshToken, config_default.REFRESH_TOKEN_SECRET);
  if (!verifiedRefreshToken.success && verifiedRefreshToken.err) {
    throw new AppError_default(status3.UNAUTHORIZED, "invalid refresh token");
  }
  const data = verifiedRefreshToken.data;
  const newAccessToken = tokenUtils.getAccessToken({
    userId: data.userId,
    email: data.email,
    role: data.role
  });
  const newRefreshToken = tokenUtils.getRefreshToken({ userId: data.userId, email: data.email, role: data.role });
  const { token } = await prisma.session.update({
    where: {
      token: sessionToken
    },
    data: {
      token: newRefreshToken,
      expiresAt: new Date(Date.now() + 60 * 60 * 24 * 1e3),
      updatedAt: /* @__PURE__ */ new Date()
    }
  });
  return {
    accessToken: newAccessToken,
    refreshToken: newRefreshToken,
    sessionToken: token
  };
};
var forgetPassword = async (email) => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (!isUserExist) {
    throw new AppError_default(status3.BAD_REQUEST, "User not found");
  }
  if (isUserExist.banned === true) {
    throw new AppError_default(status3.UNAUTHORIZED, "You are banned from accessing this service");
  }
  await auth.api.requestPasswordResetEmailOTP({
    body: {
      email
    }
  });
};
var resetPassword = async (email, otp, newPassword) => {
  const isUserExist = await prisma.user.findUnique({
    where: {
      email
    }
  });
  if (!isUserExist) {
    throw new AppError_default(status3.BAD_REQUEST, "User not found");
  }
  if (isUserExist.banned === true) {
    throw new AppError_default(status3.UNAUTHORIZED, "You are banned from accessing this service");
  }
  await auth.api.resetPasswordEmailOTP({
    body: {
      email,
      otp,
      password: newPassword
    }
  });
  await prisma.session.deleteMany({
    where: {
      userId: isUserExist.id
    }
  });
};
var logOutUser = async (sessionToken) => {
  const result = await auth.api.signOut({
    headers: new Headers({
      Authorization: `Bearer ${sessionToken}`
    })
  });
  return result;
};
var AuthServices = {
  registerUser,
  logInUser,
  verifyEmailOtp,
  updateUser,
  getMe,
  getNewToken,
  forgetPassword,
  resetPassword,
  logOutUser
};

// src/app/shared/sendResponse.ts
var sendResponse = (res, responseData) => {
  const { httpStatusCode, success, message, data, meta } = responseData;
  res.status(httpStatusCode).json({
    success,
    message,
    data,
    meta
  });
};

// src/app/modules/auth/auth.controller.ts
import status4 from "http-status";
var registerUser2 = catchAsync(async (req, res) => {
  let payload = req.body;
  if (req.body.data) {
    payload = JSON.parse(req.body.data);
  }
  if (req.file) {
    payload.image = req.file.path;
  }
  const result = await AuthServices.registerUser(payload);
  tokenUtils.setAccessTokenCookie(res, result.accessToken);
  tokenUtils.setRefreshTokenCookie(res, result.refreshToken);
  tokenUtils.setBetterAuthSessionCookie(res, result.token);
  sendResponse(res, {
    httpStatusCode: status4.CREATED,
    success: true,
    message: "User registered successfully",
    data: result
  });
});
var logInUser2 = catchAsync(async (req, res) => {
  const result = await AuthServices.logInUser(req.body);
  tokenUtils.setAccessTokenCookie(res, result.accessToken);
  tokenUtils.setRefreshTokenCookie(res, result.refreshToken);
  tokenUtils.setBetterAuthSessionCookie(res, result.token);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "User logged in successfully",
    data: result
  });
});
var updateUser2 = catchAsync(async (req, res) => {
  const id = req.params.id;
  const payload = req.body;
  let user = req.user;
  if (req.file) {
    payload.image = req.file.path;
  }
  const result = await AuthServices.updateUser(id, payload, user);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "User updated successfully",
    data: result
  });
});
var verifyEmailOtp2 = catchAsync(async (req, res) => {
  const result = await AuthServices.verifyEmailOtp(req.body);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "Email verified successfully",
    data: result
  });
});
var getMe2 = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await AuthServices.getMe(user);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "User profile fetched successfully",
    data: result
  });
});
var getNewRefreshToken = catchAsync(async (req, res) => {
  const refreshToken = req.cookies.refreshToken;
  const betterAuthSessionToken = req.cookies["better-auth.session_token"];
  if (!refreshToken) {
    throw new AppError_default(status4.UNAUTHORIZED, "Refresh token not found");
  }
  const result = await AuthServices.getNewToken(
    refreshToken,
    betterAuthSessionToken
  );
  const { accessToken, refreshToken: newRefreshToken, sessionToken } = result;
  tokenUtils.setAccessTokenCookie(res, accessToken);
  tokenUtils.setRefreshTokenCookie(res, newRefreshToken);
  tokenUtils.setBetterAuthSessionCookie(res, sessionToken);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "New refresh token generated successfully",
    data: result
  });
});
var forgetPassword2 = catchAsync(async (req, res) => {
  const result = await AuthServices.forgetPassword(req.body.email);
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "Forgot password email sent successfully",
    data: result
  });
});
var resetPassword2 = catchAsync(async (req, res) => {
  const result = await AuthServices.resetPassword(
    req.body.email,
    req.body.otp,
    req.body.newPassword
  );
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "Password reset successfully",
    data: result
  });
});
var logOutUser2 = catchAsync(async (req, res) => {
  const sessionToken = req.cookies["better-auth.session_token"];
  const result = await AuthServices.logOutUser(sessionToken);
  CookieUtils.clearCookie(res, "accessToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });
  CookieUtils.clearCookie(res, "refreshToken", {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });
  CookieUtils.clearCookie(res, "better-auth.session_token", {
    httpOnly: true,
    secure: true,
    sameSite: "none"
  });
  sendResponse(res, {
    httpStatusCode: status4.OK,
    success: true,
    message: "User logged out successfully",
    data: result
  });
});
var AuthController = {
  registerUser: registerUser2,
  logInUser: logInUser2,
  verifyEmailOtp: verifyEmailOtp2,
  updateUser: updateUser2,
  getMe: getMe2,
  getNewRefreshToken,
  forgetPassword: forgetPassword2,
  resetPassword: resetPassword2,
  logOutUser: logOutUser2
};

// src/app/utils/muler.config.ts
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
var storage = new CloudinaryStorage({
  cloudinary: cloudinaryUpload,
  params: async (req, file) => {
    const originalName = file.originalname;
    const fileNameWithOutExtension = originalName?.split(".").slice(0, -1).join(".").toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\-]/g, "");
    const uniqueName = Math.random().toString(36).substring(2) + "-" + Date.now() + "-" + fileNameWithOutExtension;
    return {
      folder: "ph-healthcare/images",
      // Since we only allow images, we can hardcode the folder
      public_id: uniqueName,
      allowed_formats: ["jpg", "jpeg", "png", "webp"],
      // Restrict formats on Cloudinary's side
      resource_type: "image"
      // Explicitly define the resource type as image
    };
  }
});
var fileFilter = (req, file, cb) => {
  console.log("MULTER fileFilter:", {
    originalname: file.originalname,
    mimetype: file.mimetype,
    size: file.size
  });
  const allowedMimeTypes = [
    "image/jpeg",
    "image/png",
    "image/jpg",
    "image/webp"
  ];
  if (allowedMimeTypes.includes(file.mimetype)) {
    console.log("\u2705 File accepted");
    cb(null, true);
  } else {
    console.log("\u274C File rejected - invalid mime");
    cb(
      new Error(
        "Invalid file type. Only JPG, JPEG, PNG, and WEBP image files are allowed."
      )
    );
  }
};
var multerUpload = multer({
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024
    // Optional: Limit file size to 5MB to prevent abuse
  }
});

// src/app/middlewares/checkAuth.ts
import status5 from "http-status";
var checkAuth = (...authRoles) => async (req, res, next) => {
  try {
    const sessionToken = CookieUtils.getCookie(
      req,
      "better-auth.session_token"
    );
    if (!sessionToken) {
      throw new Error("Unauthorized access! No session token provided.");
    }
    if (sessionToken) {
      const sessionExists = await prisma.session.findFirst({
        where: {
          token: sessionToken,
          expiresAt: {
            gt: /* @__PURE__ */ new Date()
          }
        },
        include: {
          user: true
        }
      });
      if (sessionExists && sessionExists.user) {
        const user = sessionExists.user;
        const now = /* @__PURE__ */ new Date();
        const expiresAt = new Date(sessionExists.expiresAt);
        const createdAt = new Date(sessionExists.createdAt);
        const sessionLifeTime = expiresAt.getTime() - createdAt.getTime();
        const timeRemaining = expiresAt.getTime() - now.getTime();
        const percentRemaining = timeRemaining / sessionLifeTime * 100;
        if (percentRemaining < 20) {
          res.setHeader("X-Session-Refresh", "true");
          res.setHeader("X-Session-Expires-At", expiresAt.toISOString());
          res.setHeader("X-Time-Remaining", timeRemaining.toString());
          console.log("Session Expiring Soon!!");
        }
        if (user.banned === true) {
          throw new AppError_default(
            status5.UNAUTHORIZED,
            "Unauthorized access! User is not active."
          );
        }
        if (authRoles.length > 0 && !authRoles.includes(user.role)) {
          throw new AppError_default(
            status5.FORBIDDEN,
            "Forbidden access! You do not have permission to access this resource."
          );
        }
        req.user = {
          userId: user.id,
          role: user.role,
          email: user.email
        };
      }
      const accessToken2 = CookieUtils.getCookie(req, "accessToken");
      if (!accessToken2) {
        throw new AppError_default(
          status5.UNAUTHORIZED,
          "Unauthorized access! No access token provided."
        );
      }
    }
    const accessToken = CookieUtils.getCookie(req, "accessToken");
    if (!accessToken) {
      throw new AppError_default(
        status5.UNAUTHORIZED,
        "Unauthorized access! No access token provided."
      );
    }
    const verifiedToken = jwtUtils.verifyToken(
      accessToken,
      config_default.ACCESS_TOKEN_SECRET
    );
    if (!verifiedToken.success) {
      throw new AppError_default(
        status5.UNAUTHORIZED,
        "Unauthorized access! Invalid access token."
      );
    }
    const decodedData = verifiedToken.data;
    if (authRoles.length > 0 && !authRoles.includes(decodedData?.role)) {
      throw new AppError_default(
        status5.FORBIDDEN,
        "Forbidden access! You do not have permission to access this resource."
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};

// src/app/modules/auth/auth.routes.ts
import { Role } from "@prisma/client";
var router = Router();
router.post("/register", multerUpload.single("image"), AuthController.registerUser);
router.post("/login", AuthController.logInUser);
router.post("/verify-email-otp", AuthController.verifyEmailOtp);
router.patch("/update-user/:id", checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN), multerUpload.single("image"), AuthController.updateUser);
router.get("/get-me", checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN), AuthController.getMe);
router.post("/refresh-token", AuthController.getNewRefreshToken);
router.post("/forget-password", AuthController.forgetPassword);
router.post("/reset-password", AuthController.resetPassword);
router.post("/logout", checkAuth(Role.USER, Role.ADMIN, Role.SUPER_ADMIN), AuthController.logOutUser);
var AuthRoutes = router;

// src/app/modules/user/user.routes.ts
import { Router as Router2 } from "express";
import { Role as Role3 } from "@prisma/client";

// src/app/modules/user/user.service.ts
import status6 from "http-status";
import { Role as Role2 } from "@prisma/client";
var getAllUser = async () => {
  const result = await prisma.user.findMany();
  return result;
};
var bannedAUser = async (id, adminId) => {
  const isUserExist = await prisma.user.findUniqueOrThrow({
    where: {
      id
    }
  });
  if (isUserExist.banned === true) {
    throw new AppError_default(status6.BAD_REQUEST, "User is already banned");
  }
  if (isUserExist.role === Role2.SUPER_ADMIN) {
    throw new AppError_default(status6.BAD_REQUEST, "Super admin can't be banned");
  }
  ;
  if (isUserExist.id === adminId) {
    throw new AppError_default(status6.BAD_REQUEST, "You can't ban yourself");
  }
  const result = await prisma.user.update({
    where: {
      id
    },
    data: {
      banned: true
    }
  });
  return result;
};
var unbannedAUser = async (id) => {
  const isUserExist = await prisma.user.findUniqueOrThrow({
    where: {
      id
    }
  });
  if (isUserExist.banned === false) {
    throw new AppError_default(status6.BAD_REQUEST, "User is already unbanned");
  }
  const result = await prisma.user.update({
    where: {
      id
    },
    data: {
      banned: false
    }
  });
  return result;
};
var UserServices = {
  getAllUser,
  bannedAUser,
  unbannedAUser
};

// src/app/modules/user/user.controller.ts
import status7 from "http-status";
var getAllUser2 = catchAsync(async (req, res) => {
  const result = await UserServices.getAllUser();
  sendResponse(res, {
    httpStatusCode: status7.OK,
    success: true,
    message: "User fetched successfully",
    data: result
  });
});
var bannedAUser2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const adminId = req.user.id;
  const result = await UserServices.bannedAUser(id, adminId);
  sendResponse(res, {
    httpStatusCode: status7.OK,
    success: true,
    message: "User status updated successfully",
    data: result
  });
});
var unbannedAUser2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await UserServices.unbannedAUser(id);
  sendResponse(res, {
    httpStatusCode: status7.OK,
    success: true,
    message: "User status updated successfully",
    data: result
  });
});
var UserController = {
  getAllUser: getAllUser2,
  bannedAUser: bannedAUser2,
  unbannedAUser: unbannedAUser2
};

// src/app/modules/user/user.routes.ts
var router2 = Router2();
router2.get("/", checkAuth(Role3.ADMIN, Role3.SUPER_ADMIN), UserController.getAllUser);
router2.patch("/ban/:id", checkAuth(Role3.ADMIN, Role3.SUPER_ADMIN), UserController.bannedAUser);
router2.patch("/unban/:id", checkAuth(Role3.ADMIN, Role3.SUPER_ADMIN), UserController.unbannedAUser);
var UserRoutes = router2;

// src/app/modules/genre/genre.routes.ts
import { Router as Router3 } from "express";
import { Role as Role4 } from "@prisma/client";

// src/app/modules/genre/genre.controller.ts
import status9 from "http-status";

// src/app/modules/genre/genre.services.ts
import status8 from "http-status";
var createGenre = async (payload) => {
  const result = await prisma.genre.create({
    data: payload
  });
  return result;
};
var getAllGenre = async () => {
  const result = await prisma.genre.findMany();
  return result;
};
var getGenreById = async (id) => {
  const result = await prisma.genre.findUnique({
    where: { id }
  });
  return result;
};
var updateGenre = async (id, payload) => {
  const isGenreExist = await prisma.genre.findUnique({
    where: { id }
  });
  if (!isGenreExist) {
    throw new AppError_default(status8.NOT_FOUND, "Genre not found");
  }
  const result = await prisma.genre.update({
    where: { id },
    data: payload
  });
  return result;
};
var deleteGenre = async (id) => {
  const isGenreExist = await prisma.genre.findUnique({
    where: { id }
  });
  if (!isGenreExist) {
    throw new AppError_default(status8.NOT_FOUND, "Genre not found");
  }
  const result = await prisma.genre.update({
    where: { id },
    data: {
      isDeleted: true
    }
  });
  return result;
};
var GenreService = {
  createGenre,
  getAllGenre,
  getGenreById,
  updateGenre,
  deleteGenre
};

// src/app/modules/genre/genre.controller.ts
var createGenre2 = catchAsync(async (req, res) => {
  const result = await GenreService.createGenre(req.body);
  sendResponse(res, {
    httpStatusCode: status9.CREATED,
    success: true,
    message: "Genre created successfully",
    data: result
  });
});
var updateGenre2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await GenreService.updateGenre(id, req.body);
  sendResponse(res, {
    httpStatusCode: status9.OK,
    success: true,
    message: "Genre updated successfully",
    data: result
  });
});
var deleteGenre2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await GenreService.deleteGenre(id);
  sendResponse(res, {
    httpStatusCode: status9.OK,
    success: true,
    message: "Genre deleted successfully",
    data: result
  });
});
var getAllGenre2 = catchAsync(async (req, res) => {
  const result = await GenreService.getAllGenre();
  sendResponse(res, {
    httpStatusCode: status9.OK,
    success: true,
    message: "Genre fetched successfully",
    data: result
  });
});
var getGenreById2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await GenreService.getGenreById(id);
  sendResponse(res, {
    httpStatusCode: status9.OK,
    success: true,
    message: "Genre fetched successfully",
    data: result
  });
});
var GenreController = {
  createGenre: createGenre2,
  updateGenre: updateGenre2,
  deleteGenre: deleteGenre2,
  getAllGenre: getAllGenre2,
  getGenreById: getGenreById2
};

// src/app/middlewares/validateRequest.ts
var validateRequest = (ZodSchema) => {
  return async (req, res, next) => {
    try {
      let validationData = req.body || {};
      if (req.body && typeof req.body.data === "string") {
        validationData = JSON.parse(req.body.data);
      }
      const parseResult = await ZodSchema.safeParseAsync(validationData);
      if (!parseResult.success) {
        return next(parseResult.error);
      }
      req.body = parseResult.data;
      next();
    } catch (error) {
      next(error);
    }
  };
};

// src/app/modules/genre/genre.validation.ts
import z from "zod";
var createGenre3 = z.object({
  name: z.string().min(3, "Genre name must be at least 3 characters long"),
  slug: z.string().min(3, "Genre slug must be at least 3 characters long")
});
var updateGenre3 = z.object({
  name: z.string().min(3, "Genre name must be at least 3 characters long").optional(),
  slug: z.string().min(3, "Genre slug must be at least 3 characters long").optional()
});
var GenreValidation = {
  createGenre: createGenre3,
  updateGenre: updateGenre3
};

// src/app/modules/genre/genre.routes.ts
var router3 = Router3();
router3.post("/", checkAuth(Role4.ADMIN, Role4.SUPER_ADMIN), validateRequest(GenreValidation.createGenre), GenreController.createGenre);
router3.patch("/:id", checkAuth(Role4.ADMIN, Role4.SUPER_ADMIN), validateRequest(GenreValidation.updateGenre), GenreController.updateGenre);
router3.delete("/:id", checkAuth(Role4.ADMIN, Role4.SUPER_ADMIN), GenreController.deleteGenre);
router3.get("/", GenreController.getAllGenre);
router3.get("/:id", GenreController.getGenreById);
var GenreRoutes = router3;

// src/app/modules/actor/actor.routes.ts
import { Router as Router4 } from "express";

// src/app/modules/actor/actor.validation.ts
import z2 from "zod";
var createActorValidation = z2.object({
  name: z2.string().min(3, "Actor Name must be 3 character long"),
  photoUrl: z2.string().optional()
});
var updateActorValidation = z2.object({
  name: z2.string().min(3, "Actor Name must be 3 character long").optional(),
  photoUrl: z2.string().optional()
});
var ActorValidation = {
  createActorValidation,
  updateActorValidation
};

// src/app/modules/actor/actor.routes.ts
import { Role as Role5 } from "@prisma/client";

// src/app/utils/QueryBuilder.ts
var QueryBuilder = class {
  constructor(model, queryParams, config = {}) {
    this.model = model;
    this.queryParams = queryParams;
    this.config = config;
    this.query = {
      where: {},
      include: {},
      orderBy: {},
      skip: 0,
      take: 10
    };
    this.countQuery = {
      where: {}
    };
  }
  model;
  queryParams;
  config;
  query;
  countQuery;
  page = 1;
  limit = 10;
  skip = 0;
  sortBy = "createdAt";
  sortOrder = "desc";
  selectFields;
  // search(): this {
  //     const { searchTerm } = this.queryParams;
  //     const { searchableFields } = this.config;
  //     if (searchTerm && searchableFields && searchableFields.length > 0) {
  //         const searchConditions: Record<string, unknown>[] = searchableFields.map((field) => {
  //             if (field.includes(".")) {
  //                 const parts = field.split(".");
  //                 if (parts.length === 2) {
  //                     const [relation, nestedField] = parts;
  //                     const stringFilter: PrismaStringFilter = {
  //                         contains: searchTerm,
  //                         mode: 'insensitive' as const,
  //                     }
  //                     return {
  //                         [relation]: {
  //                             [nestedField]: stringFilter
  //                         }
  //                     }
  //                 } else if (parts.length === 3) {
  //                     const [relation, nestedRelation, nestedField] = parts;
  //                     const stringFilter: PrismaStringFilter = {
  //                         contains: searchTerm,
  //                         mode: 'insensitive' as const,
  //                     }
  //                     return {
  //                         [relation]: {
  //                             some: {
  //                                 [nestedRelation]: {
  //                                     [nestedField]: stringFilter
  //                                 }
  //                             }
  //                         }
  //                     }
  //                 }
  //             }
  //             // direct field
  //             const stringFilter: PrismaStringFilter = {
  //                 contains: searchTerm,
  //                 mode: 'insensitive' as const,
  //             }
  //             return {
  //                 [field]: stringFilter
  //             }
  //         });
  //         const whereConditions = this.query.where as PrismaWhereConditions
  //         whereConditions.OR = searchConditions;
  //         const countWhereConditions = this.countQuery.where as PrismaWhereConditions;
  //         countWhereConditions.OR = searchConditions;
  //     }
  //     return this;
  // }
  search() {
    const { searchTerm } = this.queryParams;
    const { searchableFields } = this.config;
    if (searchTerm && searchableFields && searchableFields.length > 0) {
      const searchConditions = searchableFields.map((field) => {
        if (field === "streamingPlatFrom") {
          return null;
        }
        if (field.includes(".")) {
          const parts = field.split(".");
          if (parts.length === 2) {
            const [relation, nestedField] = parts;
            return {
              [relation]: {
                [nestedField]: {
                  contains: searchTerm,
                  mode: "insensitive"
                }
              }
            };
          } else if (parts.length === 3) {
            const [relation, nestedRelation, nestedField] = parts;
            return {
              [relation]: {
                some: {
                  [nestedRelation]: {
                    [nestedField]: {
                      contains: searchTerm,
                      mode: "insensitive"
                    }
                  }
                }
              }
            };
          }
        }
        return {
          [field]: {
            contains: searchTerm,
            mode: "insensitive"
          }
        };
      }).filter(Boolean);
      const whereConditions = this.query.where;
      whereConditions.OR = searchConditions;
      const countWhereConditions = this.countQuery.where;
      countWhereConditions.OR = searchConditions;
    }
    return this;
  }
  filter() {
    const { filterableFields } = this.config;
    const excludedField = [
      "searchTerm",
      "page",
      "limit",
      "sortBy",
      "sortOrder",
      "fields",
      "include"
    ];
    const filterParams = {};
    Object.keys(this.queryParams).forEach((key) => {
      if (!excludedField.includes(key)) {
        filterParams[key] = this.queryParams[key];
      }
    });
    const queryWhere = this.query.where;
    const countQueryWhere = this.countQuery.where;
    Object.keys(filterParams).forEach((key) => {
      let value = filterParams[key];
      let keyName = key;
      if (keyName === "appointementFee") keyName = "appointmentFee";
      if (keyName.startsWith("appointementFee[")) keyName = keyName.replace("appointementFee", "appointmentFee");
      const match = keyName.match(/^([^\[]+)\[([^\]]+)\]$/);
      if (match) {
        keyName = match[1];
        const operator = match[2];
        value = { [operator]: value };
      }
      if (value === void 0 || value === "") {
        return;
      }
      const isAllowedField = !filterableFields || filterableFields.length === 0 || filterableFields.includes(keyName);
      if (keyName.includes(".")) {
        const parts = keyName.split(".");
        if (filterableFields && !filterableFields.includes(keyName)) {
          return;
        }
        if (parts.length === 2) {
          const [relation, nestedField] = parts;
          if (!queryWhere[relation]) {
            queryWhere[relation] = {};
            countQueryWhere[relation] = {};
          }
          const queryRelation = queryWhere[relation];
          const countRelation = countQueryWhere[relation];
          const parsedVal = typeof value === "object" && value !== null && !Array.isArray(value) ? this.parseRangeFilter(value) : this.parseFilterValue(value);
          queryRelation[nestedField] = typeof parsedVal === "object" && parsedVal !== null ? { ...queryRelation[nestedField] || {}, ...parsedVal } : parsedVal;
          countRelation[nestedField] = typeof parsedVal === "object" && parsedVal !== null ? { ...countRelation[nestedField] || {}, ...parsedVal } : parsedVal;
          return;
        } else if (parts.length === 3) {
          const [relation, nestedRelation, nestedField] = parts;
          if (!queryWhere[relation]) {
            queryWhere[relation] = { some: {} };
            countQueryWhere[relation] = { some: {} };
          }
          const queryRelation = queryWhere[relation];
          const countRelation = countQueryWhere[relation];
          if (!queryRelation.some) queryRelation.some = {};
          if (!countRelation.some) countRelation.some = {};
          const querySome = queryRelation.some;
          const countSome = countRelation.some;
          if (!querySome[nestedRelation]) querySome[nestedRelation] = {};
          if (!countSome[nestedRelation]) countSome[nestedRelation] = {};
          const queryNestedRelation = querySome[nestedRelation];
          const countNestedRelation = countSome[nestedRelation];
          const parsedVal = typeof value === "object" && value !== null && !Array.isArray(value) ? this.parseRangeFilter(value) : this.parseFilterValue(value);
          queryNestedRelation[nestedField] = typeof parsedVal === "object" && parsedVal !== null ? { ...queryNestedRelation[nestedField] || {}, ...parsedVal } : parsedVal;
          countNestedRelation[nestedField] = typeof parsedVal === "object" && parsedVal !== null ? { ...countNestedRelation[nestedField] || {}, ...parsedVal } : parsedVal;
          return;
        }
      }
      if (!isAllowedField) {
        return;
      }
      if (typeof value === "object" && value !== null && !Array.isArray(value)) {
        const parsedRangeVal = this.parseRangeFilter(
          value
        );
        queryWhere[keyName] = { ...queryWhere[keyName] || {}, ...parsedRangeVal };
        countQueryWhere[keyName] = { ...countQueryWhere[keyName] || {}, ...parsedRangeVal };
        return;
      }
      queryWhere[keyName] = this.parseFilterValue(value);
      countQueryWhere[keyName] = this.parseFilterValue(value);
    });
    return this;
  }
  paginate() {
    const page = Number(this.queryParams.page) || 1;
    const limit = Number(this.queryParams.limit) || 10;
    this.page = page;
    this.limit = limit;
    this.skip = (page - 1) * limit;
    this.query.skip = this.skip;
    this.query.take = this.limit;
    return this;
  }
  sort() {
    const sortBy = this.queryParams.sortBy || "createdAt";
    const sortOrder = this.queryParams.sortOrder === "asc" ? "asc" : "desc";
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;
    if (sortBy === "mostReviewed") {
      this.query.orderBy = {
        reviews: {
          // Ensure 'reviews' is the exact name of the relation in your schema
          _count: sortOrder
        }
      };
      return this;
    }
    if (sortBy.includes(".")) {
      const parts = sortBy.split(".");
      if (parts.length === 2) {
        const [relation, nestedField] = parts;
        this.query.orderBy = {
          [relation]: {
            [nestedField]: sortOrder
          }
        };
      } else if (parts.length === 3) {
        const [relation, nestedRelation, nestedField] = parts;
        this.query.orderBy = {
          [relation]: {
            [nestedRelation]: {
              [nestedField]: sortOrder
            }
          }
        };
      } else {
        this.query.orderBy = { [sortBy]: sortOrder };
      }
    } else {
      this.query.orderBy = { [sortBy]: sortOrder };
    }
    return this;
  }
  fields() {
    const fieldsParam = this.queryParams.fields;
    if (fieldsParam && typeof fieldsParam === "string") {
      const fieldsArray = fieldsParam?.split(",").map((field) => field.trim());
      this.selectFields = {};
      fieldsArray?.forEach((field) => {
        if (this.selectFields) {
          this.selectFields[field] = true;
        }
      });
      this.query.select = this.selectFields;
      delete this.query.include;
    }
    return this;
  }
  include(relation) {
    if (this.selectFields) return this;
    this.query.include = { ...this.query.include, ...relation };
    return this;
  }
  dynamicInclude(includeConfig, defaultInclude) {
    if (this.selectFields) return this;
    const result = {};
    defaultInclude?.forEach((field) => {
      if (includeConfig[field]) {
        result[field] = includeConfig[field];
      }
    });
    const includeParam = this.queryParams.include;
    if (includeParam && typeof includeParam === "string") {
      const requestedRelations = includeParam.split(",").map((relation) => relation.trim());
      requestedRelations.forEach((relation) => {
        if (includeConfig[relation]) {
          result[relation] = includeConfig[relation];
        }
      });
    }
    this.query.include = { ...this.query.include, ...result };
    return this;
  }
  where(condition) {
    this.query.where = this.deepMerge(this.query.where, condition);
    this.countQuery.where = this.deepMerge(this.countQuery.where, condition);
    return this;
  }
  async execute() {
    const [total, data] = await Promise.all([
      this.model.count(this.countQuery),
      this.model.findMany(this.query)
    ]);
    const totalPages = Math.ceil(total / this.limit);
    return {
      data,
      meta: {
        page: this.page,
        limit: this.limit,
        total,
        totalPages
      }
    };
  }
  async count() {
    return await this.model.count(this.countQuery);
  }
  getQuery() {
    return this.query;
  }
  deepMerge(target, source) {
    const result = { ...target };
    for (const key in source) {
      if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
        if (result[key] && typeof result[key] === "object" && !Array.isArray(result[key])) {
          result[key] = this.deepMerge(result[key], source[key]);
        } else {
          result[key] = source[key];
        }
      } else {
        result[key] = source[key];
      }
    }
    return result;
  }
  // private parseFilterValue(value: unknown): unknown {
  //     if (value === 'true') return true;
  //     if (value === 'false') return false;
  //     if (typeof value === 'string' && !isNaN(Number(value)) && value != "") {
  //         return Number(value);
  //     }
  //     if (Array.isArray(value)) {
  //         return { in: value.map(String) };
  //     }
  //     // NEW LOGIC: Handle Case Insensitivity & Comma-Separated Strings
  //     if (typeof value === 'string') {
  //         if (value.includes(',')) {
  //             const arr = value.split(',').map((v) => v.trim());
  //             return { in: arr }; 
  //         }
  //         return { equals: value, mode: 'insensitive' };
  //     }
  //     return value;
  // }
  parseFilterValue(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (typeof value === "string" && !isNaN(Number(value)) && value != "") {
      return Number(value);
    }
    if (Array.isArray(value)) {
      return { in: value.map(String) };
    }
    if (typeof value === "string") {
      if (value.includes(",")) {
        const arr = value.split(",").map((v) => v.trim());
        return { in: arr };
      }
      const isEnumValue = value === value.toUpperCase() && value !== value.toLowerCase();
      if (isEnumValue) {
        return value;
      }
      return { equals: value, mode: "insensitive" };
    }
    return value;
  }
  parseRangeFilter(value) {
    const rangeQuery = {};
    Object.keys(value).forEach((operator) => {
      const operatorValue = value[operator];
      const parsedValue = typeof operatorValue === "string" && !isNaN(Number(operatorValue)) ? Number(operatorValue) : operatorValue;
      switch (operator) {
        case "lt":
        case "lte":
        case "gt":
        case "gte":
          rangeQuery[operator] = parsedValue;
          break;
        case "equals":
        case "not":
        case "contains":
        case "startsWith":
        case "endsWith":
          rangeQuery[operator] = parsedValue;
          if (typeof parsedValue === "string") {
            rangeQuery["mode"] = "insensitive";
          }
          break;
        case "in":
        case "notIn":
          if (Array.isArray(operatorValue)) {
            rangeQuery[operator] = operatorValue;
          } else if (typeof operatorValue === "string") {
            rangeQuery[operator] = operatorValue.split(",").map((v) => v.trim());
          } else {
            rangeQuery[operator] = [parsedValue];
          }
          break;
        default:
          break;
      }
    });
    return Object.keys(rangeQuery).length > 0 ? rangeQuery : value;
  }
};

// src/app/modules/actor/actor.constant.ts
var ActorSearchAbleFields = ["name"];
var ActorFilterAbleFileds = ["name"];

// src/app/modules/actor/actor.service.ts
var createActor = async (payload) => {
  const result = await prisma.actor.create({
    data: payload
  });
  return result;
};
var updateActor = async (id, payload) => {
  const isActorExist = await prisma.actor.findFirst({
    where: {
      id
    }
  });
  if (!isActorExist) {
    throw new Error("Actor not found");
  }
  if (isActorExist.photoUrl && payload.photoUrl) {
    await deleteFileFromCloudinary(isActorExist.photoUrl);
  }
  const result = await prisma.actor.update({
    where: {
      id: isActorExist.id
    },
    data: payload
  });
  return result;
};
var deleteActor = async (id) => {
  const result = await prisma.actor.delete({
    where: {
      id
    }
  });
  if (result.photoUrl) {
    await deleteFileFromCloudinary(result.photoUrl);
  }
  return result;
};
var getAllActor = async (query) => {
  const queryBuilder = new QueryBuilder(prisma.actor, query, {
    searchableFields: ActorSearchAbleFields,
    filterableFields: ActorFilterAbleFileds
  });
  const result = await queryBuilder.search().filter().paginate().sort().fields().execute();
  return result;
};
var getActorById = async (id) => {
  const result = await prisma.actor.findUnique({
    where: {
      id
    }
  });
  return result;
};
var ActorService = {
  createActor,
  updateActor,
  deleteActor,
  getAllActor,
  getActorById
};

// src/app/modules/actor/actor.controller.ts
import status10 from "http-status";
var createActor2 = catchAsync(async (req, res) => {
  let payload = req.body;
  if (req.file) {
    payload.photoUrl = req.file.path;
  }
  const result = await ActorService.createActor(payload);
  sendResponse(res, {
    httpStatusCode: status10.CREATED,
    success: true,
    message: "Actor created successfully",
    data: result
  });
});
var updateActor2 = catchAsync(async (req, res) => {
  const id = req.params.id;
  let payload = req.body;
  if (req.file) {
    payload.photoUrl = req.file.path;
  }
  const result = await ActorService.updateActor(id, payload);
  sendResponse(res, {
    httpStatusCode: status10.OK,
    success: true,
    message: "Actor updated successfully",
    data: result
  });
});
var deleteActor2 = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ActorService.deleteActor(id);
  sendResponse(res, {
    httpStatusCode: status10.OK,
    success: true,
    message: "Actor deleted successfully",
    data: result
  });
});
var getAllActor2 = catchAsync(async (req, res) => {
  const result = await ActorService.getAllActor(req.query);
  sendResponse(res, {
    httpStatusCode: status10.OK,
    success: true,
    message: "Actor fetched successfully",
    data: result
  });
});
var getActorById2 = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await ActorService.getActorById(id);
  sendResponse(res, {
    httpStatusCode: status10.OK,
    success: true,
    message: "Actor fetched successfully",
    data: result
  });
});
var ActorController = {
  createActor: createActor2,
  updateActor: updateActor2,
  deleteActor: deleteActor2,
  getAllActor: getAllActor2,
  getActorById: getActorById2
};

// src/app/modules/actor/actor.routes.ts
var router4 = Router4();
router4.post("/create-actor", checkAuth(Role5.ADMIN, Role5.SUPER_ADMIN), multerUpload.single("photoUrl"), validateRequest(ActorValidation.createActorValidation), ActorController.createActor);
router4.patch("/update-actor/:id", checkAuth(Role5.ADMIN, Role5.SUPER_ADMIN), multerUpload.single("photoUrl"), validateRequest(ActorValidation.updateActorValidation), ActorController.updateActor);
router4.delete("/delete-actor/:id", checkAuth(Role5.ADMIN, Role5.SUPER_ADMIN), ActorController.deleteActor);
router4.get("/", ActorController.getAllActor);
router4.get("/:id", ActorController.getActorById);
var ActorRoutes = router4;

// src/app/modules/media/media.routes.ts
import { Router as Router5 } from "express";

// src/app/modules/media/media.controller.ts
import status12 from "http-status";

// src/app/modules/media/media.services.ts
import status11 from "http-status";

// src/app/modules/media/media.constant.ts
var mediaSearchableFields = [
  `title`,
  `streamingPlatFrom`,
  `genres.genre.name`,
  `cast.actor.name`,
  // Add this for cast search
  `director`
  // Ensure this is the correct field name in your Prisma schema
];
var mediaFilterableFields = [
  `genres.genre.name`,
  `releaseYear`,
  `rating`,
  `viewCount`,
  `streamingPlatFrom`,
  `avgRating`
  /* popularity field */
];
var mediaIncludeConfig = {
  cast: {
    include: {
      actor: true
    }
  },
  genres: {
    include: {
      genre: true
    }
  }
};

// src/app/modules/media/media.services.ts
var createMedia = async (payload) => {
  const {
    actorIds,
    genreIds,
    streamingLinks,
    reviews,
    watchlistItems,
    purchases,
    ...mediaData
  } = payload;
  const result = await prisma.$transaction(async (tx) => {
    let castDataToInsert = [];
    let genreDataToInsert = [];
    if (actorIds && actorIds.length > 0) {
      const existingActors = await tx.actor.findMany({
        where: { id: { in: actorIds } }
      });
      if (existingActors.length !== actorIds.length) {
        throw new AppError_default(status11.BAD_REQUEST, "One or more Actor IDs do not exist.");
      }
      castDataToInsert = actorIds.map((id) => ({ actorId: id }));
    }
    if (genreIds && genreIds.length > 0) {
      const existingGenres = await tx.genre.findMany({
        where: { id: { in: genreIds } }
      });
      if (existingGenres.length !== genreIds.length) {
        throw new AppError_default(status11.BAD_REQUEST, "One or more Genre IDs do not exist.");
      }
      genreDataToInsert = genreIds.map((id) => ({ genreId: id }));
    }
    const newMedia = await tx.media.create({
      data: {
        ...mediaData,
        // Nested writes to automatically populate the join tables
        cast: { create: castDataToInsert },
        genres: { create: genreDataToInsert }
      },
      // Include related data in the return object so you can see it in Postman
      include: {
        cast: { include: { actor: true } },
        genres: { include: { genre: true } }
      }
    });
    return newMedia;
  }, {
    maxWait: 5e3,
    timeout: 1e4
  });
  return result;
};
var updateMedia = async (id, payload) => {
  const {
    actorIds,
    genreIds,
    streamingLinks,
    reviews,
    watchlistItems,
    purchases,
    ...mediaData
  } = payload;
  const isTheMovieExist = await prisma.media.findFirst({
    where: {
      id
    }
  });
  if (!isTheMovieExist) {
    throw new AppError_default(status11.NOT_FOUND, "Media not found.");
  }
  const result = await prisma.$transaction(async (tx) => {
    const isMediaExist = await tx.media.findUnique({ where: { id } });
    if (!isMediaExist) {
      throw new AppError_default(status11.NOT_FOUND, "Media not found.");
    }
    if (actorIds) {
      if (actorIds.length > 0) {
        const existingActors = await tx.actor.findMany({
          where: { id: { in: actorIds } }
        });
        if (existingActors.length !== actorIds.length) {
          throw new AppError_default(status11.BAD_REQUEST, "One or more Actor IDs do not exist.");
        }
      }
      await tx.mediaCast.deleteMany({ where: { mediaId: id } });
    }
    if (genreIds) {
      if (genreIds.length > 0) {
        const existingGenres = await tx.genre.findMany({
          where: { id: { in: genreIds } }
        });
        if (existingGenres.length !== genreIds.length) {
          throw new AppError_default(status11.BAD_REQUEST, "One or more Genre IDs do not exist.");
        }
      }
      await tx.mediaGenre.deleteMany({ where: { mediaId: id } });
    }
    const updatedMedia = await tx.media.update({
      where: { id },
      data: {
        ...mediaData,
        // Only trigger 'create' if the arrays were actually provided in the payload
        ...actorIds && { cast: { create: actorIds.map((actId) => ({ actorId: actId })) } },
        ...genreIds && { genres: { create: genreIds.map((genId) => ({ genreId: genId })) } }
      },
      include: {
        cast: { include: { actor: true } },
        genres: { include: { genre: true } }
      }
    });
    return updatedMedia;
  }, {
    maxWait: 5e3,
    timeout: 1e4
  });
  if (isTheMovieExist.backdropUrl && mediaData.backdropUrl) {
    await deleteFileFromCloudinary(isTheMovieExist.backdropUrl);
  }
  if (isTheMovieExist.posterUrl && mediaData.posterUrl) {
    await deleteFileFromCloudinary(isTheMovieExist.posterUrl);
  }
  return result;
};
var getAllMedia = async (query) => {
  const queryBuilder = new QueryBuilder(
    prisma.media,
    query,
    {
      searchableFields: mediaSearchableFields,
      filterableFields: mediaFilterableFields
      // Make sure this contains 'genres.genre.name'
    }
  );
  const queryInstance = queryBuilder.search().filter().include({
    cast: { include: { actor: true } },
    genres: { include: { genre: true } }
  }).dynamicInclude(mediaIncludeConfig).paginate().sort().fields();
  console.log("1. WHAT EXPRESS SEES (req.query):", query);
  console.log("2. WHAT PRISMA SEES (where clause):", JSON.stringify(queryInstance.getQuery().where, null, 2));
  return await queryInstance.execute();
};
var getMediaById = async (id) => {
  const result = await prisma.media.findUnique({
    where: { id },
    include: {
      cast: { include: { actor: true } },
      genres: { include: { genre: true } }
    }
  });
  if (!result) {
    throw new AppError_default(status11.NOT_FOUND, "Media not found");
  }
  return result;
};
var deleteMedia = async (id) => {
  const isMediaExist = await prisma.media.findUnique({ where: { id } });
  if (!isMediaExist) {
    throw new AppError_default(status11.NOT_FOUND, "Media not found");
  }
  const result = await prisma.media.delete({
    where: { id }
  });
  return result;
};
var MediaService = {
  createMedia,
  updateMedia,
  getAllMedia,
  getMediaById,
  deleteMedia
};

// src/app/modules/media/media.controller.ts
var createMedia2 = catchAsync(async (req, res) => {
  const payload = req.body;
  if (payload.releaseYear) {
    payload.releaseYear = Number(payload.releaseYear);
  }
  if (payload.actorIds && typeof payload.actorIds === "string") {
    payload.actorIds = payload.actorIds.replace(/^\[|\]$/g, "").split(",").map((id) => id.trim());
  }
  if (payload.genreIds && typeof payload.genreIds === "string") {
    payload.genreIds = payload.genreIds.replace(/^\[|\]$/g, "").split(",").map((id) => id.trim());
  }
  if (payload.rentPrice) payload.rentPrice = Number(payload.rentPrice);
  if (payload.buyPrice) payload.buyPrice = Number(payload.buyPrice);
  if (req.files) {
    const files = req.files;
    if (files["poster"] && files["poster"].length > 0) {
      payload.posterUrl = files["poster"][0].path;
    }
    if (files["backdrop"] && files["backdrop"].length > 0) {
      payload.backdropUrl = files["backdrop"][0].path;
    }
  }
  const result = await MediaService.createMedia(payload);
  sendResponse(res, {
    httpStatusCode: status12.CREATED,
    success: true,
    message: "Media created successfully",
    data: result
  });
});
var getAllMedia2 = catchAsync(async (req, res) => {
  const result = await MediaService.getAllMedia(req.query);
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: "All media retrieved successfully",
    data: result
  });
});
var getMediaById2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await MediaService.getMediaById(id);
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: "Media retrieved successfully",
    data: result
  });
});
var updateMedia2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  if (payload.releaseYear) {
    payload.releaseYear = Number(payload.releaseYear);
  }
  if (payload.actorIds && typeof payload.actorIds === "string") {
    payload.actorIds = payload.actorIds.replace(/^\[|\]$/g, "").split(",").map((id2) => id2.trim());
  }
  if (payload.genreIds && typeof payload.genreIds === "string") {
    payload.genreIds = payload.genreIds.replace(/^\[|\]$/g, "").split(",").map((id2) => id2.trim());
  }
  if (payload.rentPrice) payload.rentPrice = Number(payload.rentPrice);
  if (payload.buyPrice) payload.buyPrice = Number(payload.buyPrice);
  if (req.files) {
    const files = req.files;
    if (files["poster"] && files["poster"].length > 0) {
      payload.posterUrl = files["poster"][0].path;
    }
    if (files["backdrop"] && files["backdrop"].length > 0) {
      payload.backdropUrl = files["backdrop"][0].path;
    }
  }
  const result = await MediaService.updateMedia(id, payload);
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: "Media updated successfully",
    data: result
  });
});
var deleteMedia2 = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await MediaService.deleteMedia(id);
  sendResponse(res, {
    httpStatusCode: status12.OK,
    success: true,
    message: "Media deleted successfully",
    data: result
    // Usually returns the deleted record
  });
});
var MediaController = {
  createMedia: createMedia2,
  getAllMedia: getAllMedia2,
  getMediaById: getMediaById2,
  updateMedia: updateMedia2,
  deleteMedia: deleteMedia2
};

// src/app/modules/media/media.routes.ts
import { Role as Role6 } from "@prisma/client";
var router5 = Router5();
router5.post(
  "/create-media",
  checkAuth(Role6.ADMIN, Role6.SUPER_ADMIN),
  multerUpload.fields([
    { name: "poster", maxCount: 1 },
    // Expect 1 file named "poster"
    { name: "backdrop", maxCount: 1 }
    // Expect 1 file named "backdrop"
  ]),
  MediaController.createMedia
);
router5.get("/", MediaController.getAllMedia);
router5.get("/:id", MediaController.getMediaById);
router5.patch(
  "/update-media/:id",
  checkAuth(Role6.ADMIN, Role6.SUPER_ADMIN),
  multerUpload.fields([
    { name: "poster", maxCount: 1 },
    { name: "backdrop", maxCount: 1 }
  ]),
  MediaController.updateMedia
);
router5.delete("/delete-media/:id", checkAuth(Role6.ADMIN, Role6.SUPER_ADMIN), MediaController.deleteMedia);
router5.patch(
  "/update-media/:id",
  checkAuth(Role6.ADMIN, Role6.SUPER_ADMIN),
  multerUpload.fields([
    { name: "poster", maxCount: 1 },
    // Expect 1 file named "poster"
    { name: "backdrop", maxCount: 1 }
    // Expect 1 file named "backdrop"
  ]),
  MediaController.updateMedia
);
var MediaRoutes = router5;

// src/app/modules/tags/tags.routes.ts
import { Router as Router6 } from "express";

// src/app/modules/tags/tags.services.ts
var getAllTags = async () => {
  const result = await prisma.tag.findMany();
  return result;
};
var TagService = {
  getAllTags
};

// src/app/modules/tags/tags.controller.ts
import status13 from "http-status";
var getAllTags2 = catchAsync(async (req, res) => {
  const result = await TagService.getAllTags();
  sendResponse(res, {
    httpStatusCode: status13.OK,
    message: "Tags fetched successfully",
    success: true,
    data: result
  });
});
var TagController = {
  getAllTags: getAllTags2
};

// src/app/modules/tags/tags.routes.ts
var router6 = Router6();
router6.get("/", TagController.getAllTags);
var TagRoutes = router6;

// src/app/modules/reviews/reviews.routes.ts
import { Router as Router7 } from "express";
import { Role as Role7 } from "@prisma/client";

// src/app/modules/reviews/reviews.service.ts
import status14 from "http-status";

// src/app/helperFunciton/recalculateAvgReview.ts
var updateMediaAggregateStats = async (mediaId, tx = prisma) => {
  const aggregations = await tx.review.aggregate({
    where: {
      mediaId,
      status: "PUBLISHED"
      // CRITICAL: Only count approved reviews!
    },
    _avg: {
      rating: true
      // Calculates the average of the rating column
    },
    _count: {
      id: true
      // Counts how many reviews exist
    }
  });
  const averageRating = aggregations._avg.rating || 0;
  const totalReviewsCount = aggregations._count.id || 0;
  await tx.media.update({
    where: { id: mediaId },
    data: {
      avgRating: Number(averageRating.toFixed(1)),
      // Keep it to 1 decimal place (e.g., 8.4)
      totalRatings: totalReviewsCount,
      totalReviews: totalReviewsCount
    }
  });
};

// src/app/helperFunciton/notificationHelper.ts
var notifiedByAdmin = async (userId, content) => {
  const result = await prisma.notification.create({
    data: {
      userId,
      title: `Notification from admin`,
      body: `Your review has been ${content}`,
      link: "/"
    }
  });
};

// src/app/modules/reviews/reviews.service.ts
var createReview = async (payload, mediaId, userId) => {
  const { tags, ...reviewData } = payload;
  const isUserExist = await prisma.user.findUnique({
    where: { id: userId }
  });
  if (!isUserExist) {
    throw new AppError_default(status14.NOT_FOUND, "User not found");
  }
  const isMediaExist = await prisma.media.findUnique({
    where: { id: mediaId }
  });
  if (!isMediaExist) {
    throw new AppError_default(status14.NOT_FOUND, "Media not found");
  }
  const existingReview = await prisma.review.findUnique({
    where: {
      userId_mediaId: {
        userId,
        mediaId
      }
    }
  });
  if (existingReview) {
    throw new AppError_default(status14.CONFLICT, "You have already reviewed this media.");
  }
  const result = await prisma.$transaction(async (tx) => {
    if (tags && tags.length > 0) {
      const existingTags = await tx.tag.findMany({
        where: { id: { in: tags } }
      });
      if (existingTags.length !== tags.length) {
        throw new AppError_default(status14.BAD_REQUEST, "One or more Tag IDs are invalid.");
      }
    }
    const newReview = await tx.review.create({
      data: {
        ...reviewData,
        userId,
        mediaId,
        // If tags array exists and has items, dynamically build the nested 'create' query
        ...tags && tags.length > 0 && {
          tags: {
            create: tags.map((tagId) => ({
              tagId
            }))
          }
        }
      },
      // 6. Include relationships so you can return the full object to the frontend
      include: {
        tags: {
          include: {
            tag: true
            // Returns the actual tag details (e.g., name: "Masterpiece")
          }
        }
      }
    });
    return newReview;
  });
  return result;
};
var updateReview = async (reviewId, userId, payload) => {
  const { tags, ...updateData } = payload;
  const existingReview = await prisma.review.findUnique({
    where: { id: reviewId }
  });
  if (!existingReview) {
    throw new AppError_default(status14.NOT_FOUND, "Review not found.");
  }
  if (existingReview.userId !== userId) {
    throw new AppError_default(status14.FORBIDDEN, "You are not authorized to edit this review.");
  }
  if (existingReview.status !== "PENDING") {
    throw new AppError_default(status14.BAD_REQUEST, "You can only edit unpublished (pending) reviews.");
  }
  const result = await prisma.$transaction(async (tx) => {
    if (tags && tags.length > 0) {
      const existingTags = await tx.tag.findMany({
        where: { id: { in: tags } }
      });
      if (existingTags.length !== tags.length) {
        throw new AppError_default(status14.BAD_REQUEST, "One or more Tag IDs are invalid.");
      }
    }
    const updatedReview = await tx.review.update({
      where: { id: reviewId },
      data: {
        ...updateData,
        // If the frontend sent a new array of tags, replace the old ones
        ...tags && {
          tags: {
            deleteMany: {},
            // This safely removes the OLD tags connected to this review
            create: tags.map((tagId) => ({
              tagId
              // This connects the NEW tags
            }))
          }
        }
      },
      include: {
        tags: {
          include: {
            tag: true
          }
        }
      }
    });
    return updatedReview;
  });
  return result;
};
var getReviewsByMediaId = async (mediaId) => {
  const isMediaExist = await prisma.media.findUnique({
    where: { id: mediaId }
  });
  if (!isMediaExist) {
    throw new AppError_default(status14.NOT_FOUND, "Media not found.");
  }
  const reviews = await prisma.review.findMany({
    where: {
      mediaId,
      status: "PUBLISHED"
      // Security: Only fetch approved reviews!
    },
    // Sort by newest first
    orderBy: {
      createdAt: "desc"
    },
    include: {
      // Include the User who wrote it (we use 'select' so we don't accidentally leak their password/email)
      user: {
        select: {
          id: true
          // Assuming your user model has a name and photo, add them here:
          // name: true, 
          // profilePhoto: true 
        }
      },
      // Include the tags
      tags: {
        include: {
          tag: true
        }
      },
      comments: true
    }
  });
  return reviews;
};
var updateReviewStatus = async (payload, reviewId) => {
  const result = await prisma.review.update({
    where: { id: reviewId },
    data: {
      status: payload
    },
    include: {
      tags: {
        include: {
          tag: true
        }
      },
      user: true
    }
  });
  await updateMediaAggregateStats(result.mediaId);
  await notifiedByAdmin(result.userId, result.status);
  return result;
};
var getUnPublishedReview = async () => {
  const result = await prisma.review.findMany({
    where: {
      status: "PENDING"
    },
    include: {
      user: true,
      tags: {
        include: {
          tag: true
        }
      }
    }
  });
  return result;
};
var ReviewService = {
  createReview,
  updateReview,
  getReviewsByMediaId,
  updateReviewStatus,
  getUnPublishedReview
};

// src/app/modules/reviews/reviews.controller.ts
import status15 from "http-status";
var createReview2 = catchAsync(async (req, res) => {
  const mediaId = req.params.id;
  const userId = req.user.userId;
  const payload = req.body;
  const result = await ReviewService.createReview(payload, mediaId, userId);
  sendResponse(res, {
    httpStatusCode: status15.CREATED,
    success: true,
    message: "Review created successfully",
    data: result
  });
});
var updateReview2 = catchAsync(async (req, res) => {
  const reviewId = req.params.id;
  const userId = req.user.userId;
  const payload = req.body;
  const result = await ReviewService.updateReview(reviewId, userId, payload);
  sendResponse(res, {
    httpStatusCode: status15.OK,
    success: true,
    message: "Review updated successfully",
    data: result
  });
});
var getReviewByMedia = catchAsync(async (req, res) => {
  const mediaId = req.params.id;
  const result = await ReviewService.getReviewsByMediaId(mediaId);
  sendResponse(res, {
    httpStatusCode: status15.OK,
    success: true,
    message: "Review retrieved successfully",
    data: result
  });
});
var updateReviewStatus2 = catchAsync(async (req, res) => {
  const reviewId = req.params.id;
  const reviewStatus = req.body.status;
  const result = await ReviewService.updateReviewStatus(reviewStatus, reviewId);
  sendResponse(res, {
    httpStatusCode: status15.OK,
    success: true,
    message: "Review status updated successfully",
    data: result
  });
});
var getUnPublishedReview2 = catchAsync(async (req, res) => {
  const result = await ReviewService.getUnPublishedReview();
  sendResponse(res, {
    httpStatusCode: status15.OK,
    success: true,
    message: "Unpublished reviews retrieved successfully",
    data: result
  });
});
var ReviewController = {
  createReview: createReview2,
  updateReview: updateReview2,
  updateReviewStatus: updateReviewStatus2,
  getUnPublishedReview: getUnPublishedReview2,
  getReviewByMedia
};

// src/app/modules/reviews/reviews.validation.ts
import z3 from "zod";
var CreateReviewValidation = z3.object({
  rating: z3.number("Rating must be number").int("Rating must be integer").min(1, "Rating must be at least 1").max(10, "Rating must be at most 10"),
  content: z3.string("Content must be string").min(1, "Content must be at least 1"),
  tags: z3.array(z3.string("Tag must be string")).optional(),
  hasSpoiler: z3.boolean("Has spoiler must be boolean").optional()
});
var UpdateReviewValidation = CreateReviewValidation.partial();

// src/app/modules/reviews/reviews.routes.ts
var router7 = Router7();
router7.post("/:id", checkAuth(Role7.USER), validateRequest(CreateReviewValidation), ReviewController.createReview);
router7.patch("/:id", checkAuth(Role7.USER), validateRequest(UpdateReviewValidation), ReviewController.updateReview);
router7.get("/:id", ReviewController.getReviewByMedia);
router7.patch("/status/:id", checkAuth(Role7.ADMIN, Role7.SUPER_ADMIN), ReviewController.updateReviewStatus);
router7.get("/", checkAuth(Role7.ADMIN, Role7.SUPER_ADMIN), ReviewController.getUnPublishedReview);
var ReviewRoutes = router7;

// src/app/modules/notification/notification.routes.ts
import { Router as Router8 } from "express";

// src/app/modules/notification/notification.services.ts
import status16 from "http-status";
var readNotification = async (userId) => {
  const isNotificationExist = await prisma.notification.findFirst({
    where: {
      userId
    }
  });
  if (!isNotificationExist) {
    throw new AppError_default(status16.NOT_FOUND, "User not have any notification");
  }
  if (isNotificationExist.isRead === true) {
    throw new AppError_default(status16.BAD_REQUEST, "Notification already mark as read");
  }
  await prisma.notification.update({
    where: {
      id: isNotificationExist.id,
      userId
    },
    data: {
      isRead: true
    }
  });
};
var likeNotification = async (userId, personId) => {
  const userData = await prisma.user.findFirstOrThrow({
    where: {
      id: userId
    }
  });
  const personData = await prisma.user.findFirstOrThrow({
    where: {
      id: personId
    }
  });
  const result = await prisma.notification.create({
    data: {
      userId: personData.id,
      personId: userData.id,
      title: "Like",
      body: `${userData.name} liked your review`,
      link: `/profile/${personData.id}`,
      isRead: false
    }
  });
};
var commentNotification = async (userId, personId) => {
  const userData = await prisma.user.findFirstOrThrow({
    where: {
      id: userId
    }
  });
  const personData = await prisma.user.findFirstOrThrow({
    where: {
      id: personId
    }
  });
  const result = await prisma.notification.create({
    data: {
      userId: personData.id,
      personId: userData.id,
      title: "Comment",
      body: `${userData.name} commented on your review`,
      link: `/profile/${userData.id}`,
      isRead: false
    }
  });
};
var getAllUserNotification = async (userId) => {
  const result = await prisma.notification.findMany({
    where: {
      userId,
      isRead: false
    },
    orderBy: {
      createdAt: "desc"
    }
  });
  return result;
};
var NotificationService = {
  readNotification,
  likeNotification,
  commentNotification,
  getAllUserNotification
};

// src/app/modules/notification/notification.controller.ts
import status17 from "http-status";
var readNotification2 = catchAsync(async (req, res) => {
  const userData = req.user;
  const result = await NotificationService.readNotification(userData.userId);
  sendResponse(res, {
    httpStatusCode: status17.OK,
    message: "Notification read successfully",
    success: true,
    data: result
  });
});
var getAllUserNotification2 = catchAsync(async (req, res) => {
  const userData = req.user;
  const result = await NotificationService.getAllUserNotification(userData.userId);
  sendResponse(res, {
    httpStatusCode: status17.OK,
    message: "Notification retreive successfully",
    success: true,
    data: result
  });
});
var NotificationController = {
  readNotification: readNotification2,
  getAllUserNotification: getAllUserNotification2
};

// src/app/modules/notification/notification.routes.ts
import { Role as Role8 } from "@prisma/client";
var router8 = Router8();
router8.post("/", checkAuth(Role8.USER), NotificationController.readNotification);
router8.get("/", checkAuth(Role8.USER), NotificationController.getAllUserNotification);
var NotificationRoutes = router8;

// src/app/modules/comment/comment.routes.ts
import { Router as Router9 } from "express";

// src/app/modules/comment/comment.controller.ts
import status18 from "http-status";

// src/app/modules/comment/comment.services.ts
var createComment = async (payload, reviewId, userId) => {
  const isTheReviewExist = await prisma.review.findFirstOrThrow({
    where: {
      id: reviewId,
      status: "PUBLISHED"
    },
    include: {
      user: true
    }
  });
  const result = await prisma.comment.create({
    data: {
      ...payload,
      userId,
      reviewId
    }
  });
  await NotificationService.commentNotification(userId, isTheReviewExist.user.id);
  return result;
};
var getAllCommentByReviewId = async (reviewId) => {
  const isReviewExist = await prisma.review.findFirstOrThrow({
    where: {
      id: reviewId
    }
  });
  const result = await prisma.comment.findMany({
    where: {
      reviewId: isReviewExist.id
    },
    include: {
      user: true
    }
  });
  return result;
};
var CommentServices = {
  createComment,
  getAllCommentByReviewId
};

// src/app/modules/comment/comment.controller.ts
var createComment2 = catchAsync(async (req, res) => {
  const reviewId = req.params.id;
  const userId = req.user.userId;
  const payload = req.body;
  const result = await CommentServices.createComment(payload, reviewId, userId);
  sendResponse(res, {
    httpStatusCode: status18.CREATED,
    success: true,
    message: "Comment created successfully",
    data: result
  });
});
var getAllCommentByReviewId2 = catchAsync(async (req, res) => {
  const reviewId = req.params.id;
  const result = await CommentServices.getAllCommentByReviewId(reviewId);
  sendResponse(res, {
    httpStatusCode: status18.OK,
    message: "Comments fetched successfully",
    success: true,
    data: result
  });
});
var CommentController = {
  createComment: createComment2,
  getAllCommentByReviewId: getAllCommentByReviewId2
};

// src/app/modules/comment/comment.routes.ts
import { Role as Role9 } from "@prisma/client";

// src/app/modules/comment/comment.validation.ts
import z4 from "zod";
var CommentValidation = z4.object({
  content: z4.string()
});

// src/app/modules/comment/comment.routes.ts
var router9 = Router9();
router9.post("/:id", checkAuth(Role9.USER), validateRequest(CommentValidation), CommentController.createComment);
router9.get("/:id", CommentController.getAllCommentByReviewId);
var CommentRoutes = router9;

// src/app/modules/reviewLike/reviewLike.routes.ts
import { Router as Router10 } from "express";

// src/app/modules/reviewLike/reviewLikeServices.ts
import status19 from "http-status";
var toggleReviewLike = async (reviewId, userId) => {
  const isReviewExist = await prisma.review.findFirst({
    where: {
      id: reviewId,
      status: "PUBLISHED"
    }
  });
  if (!isReviewExist) {
    throw new AppError_default(status19.NOT_FOUND, "Review not found or not published.");
  }
  const existingLike = await prisma.reviewLike.findUnique({
    where: {
      userId_reviewId: {
        userId,
        reviewId
      }
    }
  });
  if (!existingLike) {
    const newLike = await prisma.reviewLike.create({
      data: {
        userId,
        reviewId
      }
    });
    NotificationService.likeNotification(userId, isReviewExist.userId).catch(console.error);
    return {
      success: true,
      message: "Review liked successfully",
      data: newLike
    };
  } else {
    const removedLike = await prisma.reviewLike.delete({
      where: {
        id: existingLike.id
      }
    });
    return {
      success: true,
      message: "Review unliked successfully",
      data: removedLike
    };
  }
};
var getAllReviewLikeByReviewId = async (reviewId) => {
  const result = await prisma.reviewLike.findMany({
    where: {
      reviewId
    },
    include: {
      user: true
    }
  });
  return result;
};
var getReviewByUserIdAndReviewId = async (reviewId, userId) => {
  const result = await prisma.reviewLike.findFirst({
    where: {
      userId,
      reviewId
    }
  });
  return result;
};
var ReviewLikeService = {
  toggleReviewLike,
  // reviewLike,
  getAllReviewLikeByReviewId,
  getReviewByUserIdAndReviewId
};

// src/app/modules/reviewLike/reviewLike.controller.ts
import status20 from "http-status";
var toggleReviewLike2 = catchAsync(async (req, res) => {
  const userData = req.user;
  const reviewId = req.params.id;
  const result = await ReviewLikeService.toggleReviewLike(
    reviewId,
    userData.userId
  );
  sendResponse(res, {
    httpStatusCode: status20.CREATED,
    message: "Action done successfully",
    success: true,
    data: result
  });
});
var getAllReviewLikeByReviewId2 = catchAsync(async (req, res) => {
  const reviewId = req.params.id;
  const result = await ReviewLikeService.getAllReviewLikeByReviewId(reviewId);
  sendResponse(res, {
    httpStatusCode: status20.OK,
    message: "Review like fetched successfully",
    success: true,
    data: result
  });
});
var getReviewByUserIdAndReviewId2 = catchAsync(async (req, res) => {
  const reviewId = req.params.id;
  const userData = req.user;
  const result = await ReviewLikeService.getReviewByUserIdAndReviewId(reviewId, userData.userId);
  sendResponse(res, {
    httpStatusCode: status20.OK,
    message: "Review like fetched successfully",
    success: true,
    data: result
  });
});
var ReviewLikeController = {
  toggleReviewLike: toggleReviewLike2,
  getAllReviewLikeByReviewId: getAllReviewLikeByReviewId2,
  getReviewByUserIdAndReviewId: getReviewByUserIdAndReviewId2
};

// src/app/modules/reviewLike/reviewLike.routes.ts
import { Role as Role10 } from "@prisma/client";
var router10 = Router10();
router10.post("/:id", checkAuth(Role10.USER, Role10.ADMIN, Role10.SUPER_ADMIN), ReviewLikeController.toggleReviewLike);
router10.get("/:id", ReviewLikeController.getAllReviewLikeByReviewId);
router10.get("/:id", checkAuth(Role10.USER, Role10.ADMIN, Role10.SUPER_ADMIN), ReviewLikeController.getReviewByUserIdAndReviewId);
var ReviewLikeRoutes = router10;

// src/app/modules/watchList/watchList.routes.ts
import { Router as Router11 } from "express";
import { Role as Role11 } from "@prisma/client";

// src/app/modules/watchList/watchList.service.ts
import status21 from "http-status";
var toggleWatchList = async (mediaId, userId) => {
  const isTheMediaExist = await prisma.media.findFirst({
    where: {
      id: mediaId,
      status: "PUBLISHED"
    }
  });
  if (!isTheMediaExist) {
    throw new AppError_default(status21.NOT_FOUND, "media not found");
  }
  ;
  const watchListItemExist = await prisma.watchlistItem.findUnique({
    where: {
      userId_mediaId: {
        userId,
        mediaId
      }
    }
  });
  if (!watchListItemExist) {
    const newWatchList = await prisma.watchlistItem.create({
      data: {
        mediaId,
        userId
      }
    });
    return {
      success: true,
      message: "Item added to the watchlist",
      data: newWatchList
    };
  } else {
    const removeItemFromWatchList = await prisma.watchlistItem.delete({
      where: {
        id: watchListItemExist.id
      }
    });
    return {
      success: true,
      message: "Item removed from the watchlist",
      data: removeItemFromWatchList
    };
  }
};
var getUserWatchList = async (userId) => {
  const result = await prisma.watchlistItem.findMany({
    where: {
      userId
    },
    include: {
      media: true
    }
  });
  return result;
};
var WatchListService = {
  toggleWatchList,
  getUserWatchList
};

// src/app/modules/watchList/watchList.controller.ts
import status22 from "http-status";
var toggleWatchList2 = catchAsync(async (req, res) => {
  const mediaId = req.params.id;
  const userData = req.user;
  const result = await WatchListService.toggleWatchList(mediaId, userData.userId);
  sendResponse(res, {
    httpStatusCode: status22.CREATED,
    message: "Action done successfully",
    success: true,
    data: result
  });
});
var getUserWatchList2 = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const result = await WatchListService.getUserWatchList(userId);
  sendResponse(res, {
    httpStatusCode: status22.OK,
    message: "Watch list retrieved successfully",
    success: true,
    data: result
  });
});
var WatchListController = {
  toggleWatchList: toggleWatchList2,
  getUserWatchList: getUserWatchList2
};

// src/app/modules/watchList/watchList.routes.ts
var router11 = Router11();
router11.post("/:id", checkAuth(Role11.ADMIN, Role11.SUPER_ADMIN, Role11.USER), WatchListController.toggleWatchList);
router11.get("/", checkAuth(Role11.ADMIN, Role11.SUPER_ADMIN, Role11.USER), WatchListController.getUserWatchList);
var WatchListRoutes = router11;

// src/app/modules/adminStats/adminStats.routes.ts
import express from "express";
import { Role as Role12 } from "@prisma/client";

// src/app/modules/adminStats/adminStats.service.ts
import { ReviewStatus, MediaStatus, PaymentStatus } from "@prisma/client";
var getDashboardAnalytics = async () => {
  const [
    totalUsers,
    publishedMovies,
    publishedSeries,
    pendingReviews,
    totalRevenue
  ] = await Promise.all([
    prisma.user.count(),
    // Total registered users
    prisma.media.count({ where: { type: "MOVIE", status: MediaStatus.PUBLISHED } }),
    prisma.media.count({ where: { type: "SERIES", status: MediaStatus.PUBLISHED } }),
    // Assuming your Review model has a status field for admin approval
    prisma.review.count({ where: { status: ReviewStatus.PENDING } }),
    // 🏆 PRO PORTFOLIO MOVE: Calculate total money made
    prisma.purchase.aggregate({
      _sum: { amount: true },
      where: { paymentStatus: PaymentStatus.COMPLETED }
    })
  ]);
  const recentPendingReviews = await prisma.review.findMany({
    where: { status: ReviewStatus.PENDING },
    take: 10,
    // Just get the latest 10 for the dashboard preview
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true, email: true } },
      media: { select: { title: true } }
    }
  });
  const topRatedMedia = await prisma.media.findMany({
    where: { status: MediaStatus.PUBLISHED },
    take: 5,
    orderBy: { avgRating: "desc" },
    // Uses the field we fixed earlier!
    select: {
      id: true,
      title: true,
      avgRating: true,
      totalReviews: true
    }
  });
  return {
    overview: {
      totalUsers,
      totalPublishedContent: publishedMovies + publishedSeries,
      moviesCount: publishedMovies,
      seriesCount: publishedSeries,
      pendingReviewsCount: pendingReviews,
      totalRevenue: totalRevenue._sum.amount || 0
    },
    recentPendingReviews,
    topRatedMedia
  };
};
var AdminService = {
  getDashboardAnalytics
};

// src/app/modules/adminStats/adminStats.controller.ts
import status23 from "http-status";
var getDashboardAnalytics2 = catchAsync(async (req, res) => {
  const result = await AdminService.getDashboardAnalytics();
  sendResponse(res, {
    httpStatusCode: status23.OK,
    success: true,
    message: "Admin dashboard analytics retrieved successfully",
    data: result
  });
});
var AdminController = {
  getDashboardAnalytics: getDashboardAnalytics2
};

// src/app/modules/adminStats/adminStats.routes.ts
var router12 = express.Router();
router12.get(
  "/analytics",
  checkAuth(Role12.ADMIN, Role12.SUPER_ADMIN),
  // Your JWT middleware verifying the role
  AdminController.getDashboardAnalytics
);
var AdminRoutes = router12;

// src/app/routes/index.ts
var router13 = Router12();
router13.use("/auth", AuthRoutes);
router13.use("/user", UserRoutes);
router13.use("/genre", GenreRoutes);
router13.use("/actor", ActorRoutes);
router13.use("/media", MediaRoutes);
router13.use("/tags", TagRoutes);
router13.use("/reviews", ReviewRoutes);
router13.use("/notification", NotificationRoutes);
router13.use("/comment", CommentRoutes);
router13.use("/like", ReviewLikeRoutes);
router13.use("/watchList", WatchListRoutes);
router13.use("/admin", AdminRoutes);
var IndexRoutes = router13;

// src/app/middlewares/globalErrorhandler.ts
import status26 from "http-status";
import z5 from "zod";
import { Prisma } from "@prisma/client";

// src/errorHelpers/handleZodErrors.ts
import status24 from "http-status";
var handleZodError = (err) => {
  const statusCode = status24.BAD_REQUEST;
  const message = "Zod Validation Error";
  let errorSources = [];
  err.issues.forEach((issue) => {
    errorSources.push({
      path: issue.path.join(" => ") || "unknown",
      message: issue.message
    });
  });
  return {
    success: false,
    message,
    errorSources,
    statusCode
  };
};

// src/errorHelpers/handlePrismaErros.ts
import status25 from "http-status";
var getStatusCodeFromPrismaError = (errorCode) => {
  if (errorCode === "P2002") {
    return status25.CONFLICT;
  }
  if (["P2025", "P2001", "P2015", "P2018"].includes(errorCode)) {
    return status25.NOT_FOUND;
  }
  if (["P1000", "P6002"].includes(errorCode)) {
    return status25.UNAUTHORIZED;
  }
  if (["P1010", "P6010"].includes(errorCode)) {
    return status25.FORBIDDEN;
  }
  if (errorCode === "P6003") {
    return status25.PAYMENT_REQUIRED;
  }
  if (["P1008", "P2004", "P6004"].includes(errorCode)) {
    return status25.GATEWAY_TIMEOUT;
  }
  if (errorCode === "P5011") {
    return status25.TOO_MANY_REQUESTS;
  }
  if (errorCode === "P6009") {
    return 413;
  }
  if (errorCode.startsWith("P1") || ["P2024", "P2037", "P6008"].includes(errorCode)) {
    return status25.SERVICE_UNAVAILABLE;
  }
  if (errorCode.startsWith("P2")) {
    return status25.BAD_REQUEST;
  }
  if (errorCode.startsWith("P3") || errorCode.startsWith("P4")) {
    return status25.INTERNAL_SERVER_ERROR;
  }
  return status25.INTERNAL_SERVER_ERROR;
};
var formatErrorMeta = (meta) => {
  if (!meta) return "";
  const parts = [];
  if (meta.target) {
    parts.push(`Field(s): ${String(meta.target)}`);
  }
  if (meta.field_name) {
    parts.push(`Field: ${String(meta.field_name)}`);
  }
  if (meta.column_name) {
    parts.push(`Column: ${String(meta.column_name)}`);
  }
  if (meta.table) {
    parts.push(`Table: ${String(meta.table)}`);
  }
  if (meta.model_name) {
    parts.push(`Model: ${String(meta.model_name)}`);
  }
  if (meta.relation_name) {
    parts.push(`Relation: ${String(meta.relation_name)}`);
  }
  if (meta.constraint) {
    parts.push(`Constraint: ${String(meta.constraint)}`);
  }
  if (meta.database_error) {
    parts.push(`Database Error: ${String(meta.database_error)}`);
  }
  return parts.length > 0 ? parts.join(" |") : "";
};
var handlePrismaClientKnownRequestError = (error) => {
  const statusCode = getStatusCodeFromPrismaError(error.code);
  const metaInfo = formatErrorMeta(error.meta);
  let cleanMessage = error.message;
  cleanMessage = cleanMessage.replace(/Invalid `.*?` invocation:?\s*/i, "");
  const lines = cleanMessage.split("\n").filter((line) => line.trim());
  const mainMessage = lines[0] || "An error occurred with the database operation.";
  const errorSources = [
    {
      path: error.code,
      message: metaInfo ? `${mainMessage} | ${metaInfo}` : mainMessage
    }
  ];
  if (error.meta?.cause) {
    errorSources.push({
      path: "cause",
      message: String(error.meta.cause)
    });
  }
  return {
    success: false,
    statusCode,
    message: `Prisma Client Known Request Error: ${mainMessage}`,
    errorSources
  };
};
var handlePrismaClientUnknownError = (error) => {
  let cleanMessage = error.message;
  cleanMessage = cleanMessage.replace(/Invalid `.*?` invocation:?\s*/i, "");
  const lines = cleanMessage.split("\n").filter((line) => line.trim());
  const mainMessage = lines[0] || "An unknown error occurred with the database operation.";
  const errorSources = [
    {
      path: "Unknown Prisma Error",
      message: mainMessage
    }
  ];
  return {
    success: false,
    statusCode: status25.INTERNAL_SERVER_ERROR,
    message: `Prisma Client Unknown Request Error: ${mainMessage}`,
    errorSources
  };
};
var handlePrismaClientValidationError = (error) => {
  let cleanMessage = error.message;
  cleanMessage = cleanMessage.replace(/Invalid `.*?` invocation:?\s*/i, "");
  const lines = cleanMessage.split("\n").filter((line) => line.trim());
  const errorSources = [];
  const fieldMatch = cleanMessage.match(/Argument `(\w+)`/i);
  const fieldName = fieldMatch ? fieldMatch[1] : "Unknown Field";
  const mainMessage = lines.find(
    (line) => !line.includes("Argument") && !line.includes("\u2192") && line.length > 10
  ) || lines[0] || "Invalid query parameters provided to the database operation.";
  errorSources.push({
    path: fieldName,
    message: mainMessage
  });
  return {
    success: false,
    statusCode: status25.BAD_REQUEST,
    message: `Prisma Client Validation Error: ${mainMessage}`,
    errorSources
  };
};
var handlerPrismaClientInitializationError = (error) => {
  const statusCode = error.errorCode ? getStatusCodeFromPrismaError(error.errorCode) : status25.SERVICE_UNAVAILABLE;
  const cleanMessage = error.message;
  cleanMessage.replace(/Invalid `.*?` invocation:?\s*/i, "");
  const lines = cleanMessage.split("\n").filter((line) => line.trim());
  const mainMessage = lines[0] || "An error occurred while initializing the Prisma Client.";
  const errorSources = [
    {
      path: error.errorCode || "Initialization Error",
      message: mainMessage
    }
  ];
  return {
    success: false,
    statusCode,
    message: `Prisma Client Initialization Error: ${mainMessage}`,
    errorSources
  };
};
var handlerPrismaClientRustPanicError = () => {
  const errorSources = [{
    path: "Rust Engine Crashed",
    message: "The database engine encountered a fatal error and crashed. This is usually due to an internal bug in the Prisma engine or an unexpected edge case in the database operation. Please check the Prisma logs for more details and consider reporting this issue to the Prisma team if it persists."
  }];
  return {
    success: false,
    statusCode: status25.INTERNAL_SERVER_ERROR,
    message: "Prisma Client Rust Panic Error: The database engine crashed due to a fatal error.",
    errorSources
  };
};

// src/app/utils/deleteUploadedFilesFromGlobalErrorHandler.ts
var deleteUploadedFilesFromGlobalErrorHandler = async (req) => {
  try {
    const filesToDelete = [];
    if (req.file && req.file?.path) {
      filesToDelete.push(req.file.path);
    } else if (req.files && typeof req.files === "object" && !Array.isArray(req.files)) {
      Object.values(req.files).forEach((fileArray) => {
        if (Array.isArray(fileArray)) {
          fileArray.forEach((file) => {
            if (file.path) {
              filesToDelete.push(file.path);
            }
          });
        }
      });
    } else if (req.files && Array.isArray(req.files) && req.files.length > 0) {
      req.files.forEach((file) => {
        if (file.path) {
          filesToDelete.push(file.path);
        }
      });
    }
    if (filesToDelete.length > 0) {
      await Promise.all(
        filesToDelete.map((url) => deleteFileFromCloudinary(url))
      );
      console.log(`
Deleted ${filesToDelete.length} uploaded file(s) from Cloudinary due to an error during request processing.
`);
    }
  } catch (error) {
    console.error("Error deleting uploaded files from Global Error Handler", error);
  }
};

// src/app/middlewares/globalErrorhandler.ts
var globalErrorHandler = async (err, req, res, next) => {
  if (config_default.NODE_ENV === "development") {
    console.log("Error from Global Error Handler", err);
  }
  if (req.file) {
    await deleteFileFromCloudinary(req.file.path);
  }
  if (req.files && Array.isArray(req.files) && req.files.length > 0) {
    const imageUrls = req.files.map((file) => file.path);
    await Promise.all(imageUrls.map((url) => deleteFileFromCloudinary(url)));
  }
  await deleteUploadedFilesFromGlobalErrorHandler(req);
  let errorSources = [];
  let statusCode = status26.INTERNAL_SERVER_ERROR;
  let message = "Internal Server Error";
  let stack = void 0;
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    const simplifiedError = handlePrismaClientKnownRequestError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    const simplifiedError = handlePrismaClientUnknownError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    const simplifiedError = handlePrismaClientValidationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof Prisma.PrismaClientRustPanicError) {
    const simplifiedError = handlerPrismaClientRustPanicError();
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    const simplifiedError = handlerPrismaClientInitializationError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof z5.ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = [...simplifiedError.errorSources];
    stack = err.stack;
  } else if (err instanceof AppError_default) {
    statusCode = err.statusCode;
    message = err.message;
    stack = err.stack;
    errorSources = [
      {
        path: "",
        message: err.message
      }
    ];
  } else if (err instanceof Error) {
    statusCode = status26.INTERNAL_SERVER_ERROR;
    message = err.message;
    stack = err.stack;
    errorSources = [
      {
        path: "",
        message: err.message
      }
    ];
  }
  const errorResponse = {
    success: false,
    message,
    errorSources,
    error: config_default.NODE_ENV === "development" ? err : void 0,
    stack: config_default.NODE_ENV === "development" ? stack : void 0
  };
  res.status(statusCode).json(errorResponse);
};

// src/app/middlewares/notFountRoutes.ts
import status27 from "http-status";
var notFount = (req, res) => {
  sendResponse(res, {
    httpStatusCode: status27.NOT_FOUND,
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
};

// src/app/modules/purchase/payment.routes.ts
import express2 from "express";

// src/app/config/stripe.config.ts
import Stripe from "stripe";
var stripe = new Stripe(config_default.STRIPE_SECRET_KEY);

// src/app/modules/purchase/purchase.service.ts
import {
  PaymentStatus as PaymentStatus2,
  SubscriptionStatus,
  PurchaseType
} from "@prisma/client";
var handleStripeWebhookEvent = async (event) => {
  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object;
      const transactionType = session.metadata?.transactionType;
      const dbId = session.metadata?.dbId;
      if (!transactionType || !dbId) return { message: "Missing metadata" };
      if (session.payment_status === "paid") {
        if (transactionType === "PURCHASE") {
          const purchase = await prisma.purchase.findUnique({ where: { id: dbId } });
          if (!purchase) return { message: "Purchase not found" };
          let accessTimeStartedAt = null;
          let accessExpiresAt = null;
          if (purchase.type === PurchaseType.RENTAL) {
            accessTimeStartedAt = /* @__PURE__ */ new Date();
            accessExpiresAt = /* @__PURE__ */ new Date();
            accessExpiresAt.setHours(accessExpiresAt.getHours() + 48);
          } else if (purchase.type === PurchaseType.ONE_TIME_BUY) {
            accessTimeStartedAt = /* @__PURE__ */ new Date();
            accessExpiresAt = null;
          }
          await prisma.purchase.update({
            where: { id: dbId },
            data: {
              paymentStatus: PaymentStatus2.COMPLETED,
              providerTxnId: session.payment_intent,
              accessTimeStartedAt,
              accessExpiresAt,
              providerPayload: JSON.parse(JSON.stringify(session))
            }
          });
        } else if (transactionType === "SUBSCRIPTION") {
          await prisma.subscription.update({
            where: { id: dbId },
            data: {
              status: SubscriptionStatus.ACTIVE,
              providerSubId: session.subscription,
              stripeCustomerId: session.customer
            }
          });
        }
      }
      break;
    }
    case "customer.subscription.updated": {
      const subscription = event.data.object;
      await prisma.subscription.updateMany({
        where: { providerSubId: subscription.id },
        data: { cancelAtPeriodEnd: subscription.cancel_at_period_end }
      });
      break;
    }
    case "customer.subscription.deleted": {
      const subscription = event.data.object;
      await prisma.subscription.updateMany({
        where: { providerSubId: subscription.id },
        data: { status: SubscriptionStatus.CANCELLED, cancelAtPeriodEnd: false }
      });
      break;
    }
    case "invoice.payment_succeeded": {
      const invoice = event.data.object;
      if (invoice.subscription) {
        const stripeSubId = invoice.subscription;
        const periodStart = new Date(invoice.lines.data[0].period.start * 1e3);
        const periodEnd = new Date(invoice.lines.data[0].period.end * 1e3);
        await prisma.subscription.updateMany({
          where: { providerSubId: stripeSubId },
          data: {
            status: SubscriptionStatus.ACTIVE,
            currentPeriodStart: periodStart,
            // 🟢 Now this will be Today
            currentPeriodEnd: periodEnd,
            // 🟢 Now this will be 1 month from Today
            cancelAtPeriodEnd: false
          }
        });
        console.log(`\u2705 Subscription ${stripeSubId} updated with correct dates.`);
      }
      break;
    }
    default:
      console.log(`\u2139\uFE0F Unhandled event type: ${event.type}`);
  }
  return { message: "Success" };
};
var createCheckoutSession = async (userId, mediaId, type) => {
  let unitAmount = 0;
  let name = "";
  let mode = "payment";
  let dbRecordId = "";
  if (type === "RENTAL" || type === "ONE_TIME_BUY") {
    const movie = await prisma.media.findUniqueOrThrow({ where: { id: mediaId } });
    const rawPrice = type === "RENTAL" ? movie.rentalPrice || 3 : movie.buyPrice || 15;
    unitAmount = Math.round(rawPrice * 100);
    name = `${type === "RENTAL" ? "Rent" : "Buy"}: ${movie.title}`;
    mode = "payment";
    const purchase = await prisma.purchase.create({
      data: {
        userId,
        mediaId,
        type: type === "RENTAL" ? PurchaseType.RENTAL : PurchaseType.ONE_TIME_BUY,
        amount: rawPrice
      }
    });
    dbRecordId = purchase.id;
  } else if (type === "SUBSCRIPTION") {
    unitAmount = 7500;
    name = "Premium Monthly Subscription";
    mode = "subscription";
    const sub = await prisma.subscription.upsert({
      where: { userId },
      update: { status: SubscriptionStatus.PENDING },
      create: { userId, currentPeriodStart: /* @__PURE__ */ new Date(), currentPeriodEnd: /* @__PURE__ */ new Date() }
    });
    dbRecordId = sub.id;
  }
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode,
    line_items: [{
      price_data: {
        currency: "usd",
        product_data: { name },
        ...mode === "subscription" && { recurring: { interval: "month" } },
        unit_amount: unitAmount
      },
      quantity: 1
    }],
    metadata: {
      transactionType: type === "SUBSCRIPTION" ? "SUBSCRIPTION" : "PURCHASE",
      dbId: dbRecordId
    },
    success_url: `${config_default.FRONTEND_URL}/payment-success`,
    cancel_url: `${config_default.FRONTEND_URL}/payment-cancelled`
  });
  return { checkoutUrl: session.url };
};
var cancelSubscription = async (userId) => {
  const subscription = await prisma.subscription.findUnique({
    where: { userId }
  });
  if (!subscription) {
    throw new Error("No subscription found for this user.");
  }
  if (subscription.status !== SubscriptionStatus.ACTIVE || !subscription.providerSubId) {
    throw new Error("Subscription is not active or cannot be canceled.");
  }
  await stripe.subscriptions.update(
    subscription.providerSubId,
    { cancel_at_period_end: true }
  );
  const updatedDbSub = await prisma.subscription.update({
    where: { id: subscription.id },
    data: {
      cancelAtPeriodEnd: true
    }
  });
  return updatedDbSub;
};
var createCustomerPortal = async (userId) => {
  const subscription = await prisma.subscription.findUnique({
    where: { userId }
  });
  if (!subscription || !subscription.stripeCustomerId) {
    throw new Error("No active Stripe customer found for this user.");
  }
  const portalSession = await stripe.billingPortal.sessions.create({
    customer: subscription.stripeCustomerId,
    return_url: `${config_default.FRONTEND_URL}/settings`
  });
  return { portalUrl: portalSession.url };
};
var PaymentService = {
  handleStripeWebhookEvent,
  createCheckoutSession,
  cancelSubscription,
  createCustomerPortal
};

// src/app/modules/purchase/purchase.controller.ts
import status28 from "http-status";
var handleStripeWebhookEvent2 = catchAsync(async (req, res) => {
  const signature = req.headers["stripe-signature"];
  const webhookSecret = config_default.STRIPE_WEBHOOK_SECRET;
  if (!signature || !webhookSecret) {
    console.error("Missing Stripe signature or webhook secret");
    return res.status(status28.BAD_REQUEST).json({ message: "Missing Stripe signature or webhook secret" });
  }
  let event;
  try {
    event = stripe.webhooks.constructEvent(req.body, signature, webhookSecret);
  } catch (error) {
    console.error("Error processing Stripe webhook:", error);
    return res.status(status28.BAD_REQUEST).json({ message: "Error processing Stripe webhook" });
  }
  try {
    const result = await PaymentService.handleStripeWebhookEvent(event);
    sendResponse(res, {
      httpStatusCode: status28.OK,
      success: true,
      message: "Stripe webhook event processed successfully",
      data: result
    });
  } catch (error) {
    console.error("Error handling Stripe webhook event:", error);
    sendResponse(res, {
      httpStatusCode: status28.INTERNAL_SERVER_ERROR,
      success: false,
      message: "Error handling Stripe webhook event"
    });
  }
});
var createCheckout = catchAsync(async (req, res) => {
  const userId = req.user.userId;
  const { mediaId, type } = req.body;
  const result = await PaymentService.createCheckoutSession(userId, mediaId, type);
  sendResponse(res, {
    httpStatusCode: status28.OK,
    success: true,
    message: "Checkout session created successfully",
    data: result
  });
});
var cancelSubscription2 = catchAsync(async (req, res) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(status28.UNAUTHORIZED).json({ message: "Not authenticated" });
  }
  const result = await PaymentService.cancelSubscription(userId);
  sendResponse(res, {
    httpStatusCode: status28.OK,
    success: true,
    message: "Subscription successfully set to cancel at the end of the billing period.",
    data: result
  });
});
var createCustomerPortal2 = catchAsync(async (req, res) => {
  const userId = req.user?.userId;
  if (!userId) {
    return res.status(status28.UNAUTHORIZED).json({ message: "Not authenticated" });
  }
  const result = await PaymentService.createCustomerPortal(userId);
  sendResponse(res, {
    httpStatusCode: status28.OK,
    success: true,
    message: "Customer portal session created successfully",
    data: result
  });
});
var PaymentController = {
  handleStripeWebhookEvent: handleStripeWebhookEvent2,
  createCheckout,
  cancelSubscription: cancelSubscription2,
  createCustomerPortal: createCustomerPortal2
};

// src/app/modules/purchase/payment.routes.ts
import { Role as Role13 } from "@prisma/client";
var router14 = express2.Router();
router14.post(
  "/stripe/webhook",
  express2.raw({ type: "application/json" }),
  PaymentController.handleStripeWebhookEvent
);
router14.post(
  "/create-checkout",
  express2.json(),
  // Parse normal JSON
  checkAuth(Role13.USER),
  // Ensure they are logged in
  PaymentController.createCheckout
);
router14.post(
  "/cancel-subscription",
  express2.json(),
  checkAuth(Role13.USER),
  PaymentController.cancelSubscription
);
router14.post(
  "/customer-portal",
  express2.json(),
  checkAuth(Role13.USER),
  PaymentController.createCustomerPortal
);
var PaymentRoutes = router14;

// src/app.ts
var app = express3();
app.use(cors({
  origin: [config_default.BETTER_AUTH_URL, config_default.FRONTEND_URL],
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(cookieParser());
app.use("/api/auth", toNodeHandler(auth));
app.use("/api/v1/payment", PaymentRoutes);
app.use(express3.json());
app.use(express3.urlencoded({ extended: true }));
app.use("/api/v1", IndexRoutes);
app.get("/", (req, res) => {
  res.send("Hello from Apollo Gears World!");
});
app.use(notFount);
app.use(globalErrorHandler);
var app_default = app;

// src/index.ts
var index_default = app_default;
export {
  index_default as default
};
