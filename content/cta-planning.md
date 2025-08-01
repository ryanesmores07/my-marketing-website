# Bilingual Freelancer Website Contact System

**Goal:** Allow potential clients to reach out easily via **email**, **LINE**, or **WhatsApp** — without requiring scheduled calls — while still conveying professionalism and trust.

---

## 📎 STRATEGY OVERVIEW

| Channel      | Purpose                        | Audience            | Best Use                       |
| ------------ | ------------------------------ | ------------------- | ------------------------------ |
| **Email**    | Formal, detailed communication | Everyone            | Main lead capture              |
| **LINE**     | Casual, local messaging        | Japanese clients 🇯🇵 | Trust-building, quick contact  |
| **WhatsApp** | Casual, global messaging       | Overseas clients 🌍 | Instant access, no form needed |

---

## 🔧 WHAT TO DO

### ✅ 1. Build a **Bilingual Contact Section**

Place it at:

- Top CTA (Hero)
- End of each service page
- Footer
- Final section before testimonials

### ✅ 2. Offer 3 Clear Options:

### A) **Email Inquiry Form (Main Method)**

- Fields:

  - Name / お名前
  - Email
  - Website URL (optional)
  - Service type (dropdown)
  - Message

- Use `react-hook-form` + `zod` or any familiar library
- Integrate with:
  - Formspree
- Auto-responder (24h promise):

  ```
  EN: Thank you for reaching out! We’ve received your message and will get back to you within 24 hours.
  JP: お問い合わせありがとうございます。24時間以内に返信させていただきます。
  ```

### B) **LINE Contact (Casual)**

- Add a QR code (PNG or SVG) or LINE ID link.
- Below the code, explain:

  ```
  EN: Prefer chatting? Add us on LINE for quick messages.
  JP: 簡単なご相談はLINEからもお気軽にどうぞ。
  ```

### C) **WhatsApp Link**

- Use: `https://wa.me/YourNumberHere` (pre-filled message optional)
- Button label:

  `💬 Chat via WhatsApp / WhatsAppで相談する`

---

## 💬 CTA Messaging Examples (Bilingual + Friendly)

### Main CTA

> 📩 Start with a free consultation
>
> 💬 メール、LINE、WhatsApp で無料相談を受け付けています！

### Inline Message (after blog or service pages)

> Not sure where to start? Just send a message. We’ll figure it out together.
>
> まずはお気軽にメッセージください。ご相談内容に合ったご提案をいたします。

---

## ↺ UX Tips

- **Speed = Trust:** Auto-reply + 24h reply is essential
- **Multilingual copy:** Use both English + Japanese side-by-side wherever possible
- **No login or signup required:** Don’t make users create accounts
- **Show availability honestly:**

  _"We respond within 24h (weeknights or weekends for meetings)"_

  This sets expectations upfront

---

## ✅ Final Checklist Summary

- [ ] Bilingual copy for all form fields and CTAs
- [ ] Email form integrated with autoresponder
- [ ] LINE contact option with QR code and casual text
- [ ] WhatsApp link clearly labeled
- [ ] 24h response time promise visible
- [ ] Included on Hero, Footer, and Service pages
