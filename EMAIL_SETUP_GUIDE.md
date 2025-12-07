# Email Setup Guide for Chetna Electronics Website

This guide will help you set up email functionality so that contact form submissions are automatically sent to **info@chetnaelectronics.com**.

## Overview

We're using **EmailJS** - a free service that allows sending emails directly from your website without a backend server.

**Free Plan Includes:**
- 200 emails per month
- No credit card required
- Easy setup

---

## Step-by-Step Setup

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com](https://www.emailjs.com)
2. Click **"Sign Up"** (top right)
3. Create account with your email (or use Google/GitHub)
4. Verify your email address

### 2. Add Email Service

1. After logging in, go to **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider:
   - **Gmail** (recommended for testing)
   - **Outlook**
   - **Yahoo**
   - Or any other SMTP service

4. **For Gmail:**
   - Click on Gmail icon
   - Click **"Connect Account"**
   - Sign in with the Gmail account: **info@chetnaelectronics.com**
   - Allow EmailJS permissions
   - Give your service a name (e.g., "Chetna Electronics")
   - Click **"Create Service"**

5. **Copy the Service ID** (looks like: `service_xxxxxxx`)
   - Keep this handy - you'll need it in step 4

### 3. Create Email Template

1. Go to **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Replace the default template with this:

```
Subject: New Contact Form Submission - Chetna Electronics

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Service Interested: {{service}}

Message:
{{message}}

---
This email was sent from the Chetna Electronics website contact form.
```

4. In the **Settings** tab:
   - Template Name: `Contact Form`
   - From Name: `Chetna Electronics Website`
   - From Email: `info@chetnaelectronics.com`
   - To Email: `info@chetnaelectronics.com`
   - Subject: `New Contact Form Submission - {{from_name}}`

5. Click **"Save"**
6. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### 4. Get Your Public Key

1. Go to **"Account"** in the left sidebar
2. Find **"API Keys"** section
3. **Copy your Public Key** (looks like: `xxxxxxxxxxxxxxxxxxxx`)

### 5. Update Your Website Files

Open `script.js` and replace these three values:

```javascript
// Line 56: Replace with your Public Key
emailjs.init('YOUR_PUBLIC_KEY');

// Line 83: Replace with your Service ID and Template ID
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**Example:**
```javascript
emailjs.init('xM9kL2pQwR5tN8vY');
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

### 6. Test Your Form

1. Save the `script.js` file
2. Refresh your website
3. Fill out the contact form
4. Click "Send Message"
5. Check **info@chetnaelectronics.com** inbox for the email!

---

## Troubleshooting

### ❌ Form not sending?

**Check:**
1. Did you replace all 3 IDs in `script.js`?
   - Public Key (line 56)
   - Service ID (line 83)
   - Template ID (line 83)

2. Did you verify your EmailJS account email?

3. Open browser console (F12) and check for errors

4. Make sure you're connected to the internet

### ❌ Email not receiving?

**Check:**
1. EmailJS dashboard → "Email Services" → Is service connected?
2. Check spam folder in Gmail
3. Verify the "To Email" in template settings is `info@chetnaelectronics.com`

### ❌ Getting errors in console?

1. Invalid Public Key → Double-check you copied it correctly
2. Service/Template not found → Verify IDs match exactly
3. Rate limit → Free plan allows 200 emails/month

---

## Email Template Variables

The following variables are sent from the form:

| Variable | Description | Example |
|----------|-------------|---------|
| `from_name` | Customer's name | "Rajesh Kumar" |
| `from_email` | Customer's email | "rajesh@example.com" |
| `phone` | Customer's phone | "9876543210" |
| `service` | Service selected | "CCTV Installation" |
| `message` | Customer's message | "I need CCTV for my shop" |

You can customize the email template format in EmailJS dashboard.

---

## Upgrade Options (Optional)

If you receive more than 200 contact forms per month, consider:

1. **EmailJS Pro** ($15/month) - 1,000 emails/month
2. **Backend Solution** - PHP/Node.js email service
3. **Alternative Services:**
   - Formspree
   - Web3Forms
   - Getform

---

## Security Notes

✅ **Safe to use:**
- Public Key is meant to be public (in your JavaScript)
- EmailJS handles authentication securely
- No sensitive credentials in your code

✅ **Spam Protection:**
- EmailJS has built-in rate limiting
- You can add reCAPTCHA if needed

---

## Quick Reference

**EmailJS Dashboard:** https://dashboard.emailjs.com

**Files to Update:**
- `script.js` (lines 56, 83)

**IDs Needed:**
1. Public Key
2. Service ID
3. Template ID

---

## Need Help?

- EmailJS Documentation: https://www.emailjs.com/docs
- EmailJS Support: support@emailjs.com
- Free plan support via email

---

**That's it! Your contact form will now send emails to info@chetnaelectronics.com** ✅
