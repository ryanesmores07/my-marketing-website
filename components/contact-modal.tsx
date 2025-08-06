"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, Loader2 } from "lucide-react";
import Image from "next/image";
import { useForm as useFormspreeForm, ValidationError } from "@formspree/react";
import { toast } from "sonner";
import { contactConfig, serviceTypes } from "@/lib/contact-config";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SmartContactHandler } from "./smart-contact-handler";

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  // Honeypot field - hidden from users, bots will fill it
  website: z.string().max(0, "Invalid submission"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: "en" | "jp";
}

const ContactModal = ({ isOpen, onClose, locale }: ContactModalProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitTime, setSubmitTime] = useState<number | null>(null);

  // Formspree form hook
  const [formspreeState, formspreeHandleSubmit] = useFormspreeForm("manogljy");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      serviceType: "",
      message: "",
      website: "", // Honeypot field
    },
  });

  const content = {
    en: {
      title: "Let's Make It Happen",
      subtitle: "Choose your preferred way to get in touch",
      formTitle: "Quick Contact Form",
      nameLabel: "Name",
      emailLabel: "Email",
      serviceTypeLabel: "Service Type",
      serviceTypePlaceholder: "Select a service...",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project...",
      sendButton: "Send Message",
      orText: "Or contact directly:",
      lineButton: "Line",
      whatsappButton: "WhatsApp",
      lineSubtext:
        "Prefer chatting? Add me on LINE or WhatsApp for quick messages.",
      whatsappSubtext: "Chat via WhatsApp for instant access.",
      successTitle: "Message Sent!",
      successMessage: `Thank you for reaching out! We've received your message and will get back to you within ${contactConfig.responseTime}.`,
      closeButton: "Close",
      // Left section content
      profileName: "Ryan",
      profileTitle: "Web Developer",
      consultationTitle: "Free consultation call",
      consultationDescription:
        "Let's discuss your project and see how I can help you achieve your goals.",
      availability: "24/7",
      location: "Tokyo, Japan",
      // Middle section content
      contactInfoTitle: "Contact Information",
      // Right section content
      quickContactTitle: "Quick Contact",
      quickContactDescription: "Prefer instant messaging? Contact us directly:",
    },
    jp: {
      title: "一緒に実現しましょう",
      subtitle: "お好みの連絡方法をお選びください",
      formTitle: "お問い合わせフォーム",
      nameLabel: "お名前",
      emailLabel: "メールアドレス",
      serviceTypeLabel: "サービス種類",
      serviceTypePlaceholder: "サービスを選択してください...",
      messageLabel: "メッセージ",
      messagePlaceholder: "プロジェクトについて教えてください...",
      sendButton: "送信",
      orText: "または直接連絡:",
      lineButton: "Line",
      whatsappButton: "WhatsApp",
      lineSubtext: "簡単なご相談はLINE又はWhatsAppからもお気軽にどうぞ。",
      whatsappSubtext: "WhatsAppで相談する",
      successTitle: "送信完了！",
      successMessage: `お問い合わせありがとうございます。${contactConfig.responseTime}以内に返信させていただきます。`,
      closeButton: "閉じる",
      // Left section content
      profileName: "Ryan",
      profileTitle: "Web開発者",
      consultationTitle: "無料相談",
      consultationDescription:
        "プロジェクトについて相談し、目標達成のお手伝いをさせていただきます。",
      availability: "24時間対応",
      location: "東京、日本",
      // Middle section content
      contactInfoTitle: "お問い合わせ情報",
      // Right section content
      quickContactTitle: "簡単連絡",
      quickContactDescription:
        "メッセージアプリをご希望ですか？直接お問い合わせください：",
    },
  };

  const t = content[locale];

  const handleSubmit = async (data: ContactFormData) => {
    // Spam prevention checks
    const now = Date.now();
    const minSubmitTime = 3000; // Minimum 3 seconds to fill form

    // Check if form was filled too quickly (likely a bot)
    if (submitTime && now - submitTime < minSubmitTime) {
      toast.error(
        locale === "jp"
          ? "送信が早すぎます。もう一度お試しください。"
          : "Submission too fast. Please try again."
      );
      return;
    }

    // Check honeypot field (bots will fill this)
    if (data.website && data.website.length > 0) {
      console.log("Honeypot triggered - likely spam");
      return; // Silently reject
    }

    // Use Formspree's handleSubmit with our form data
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("serviceType", data.serviceType);
    formData.append("message", data.message);
    formData.append("locale", locale);

    // Submit using Formspree's handleSubmit
    await formspreeHandleSubmit(formData);
  };

  // Set submit time when modal opens
  useEffect(() => {
    if (isOpen) {
      setSubmitTime(Date.now());
    }
  }, [isOpen]);

  // Handle success state from Formspree
  React.useEffect(() => {
    if (formspreeState.succeeded) {
      setIsSuccess(true);
      form.reset();
    }
  }, [formspreeState.succeeded, form]);

  // Removed handleDirectContact as it's now handled by SmartContactHandler

  const handleClose = () => {
    if (isSuccess) {
      setIsSuccess(false);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto bg-white border border-gray-200 shadow-2xl text-gray-900">
        <DialogTitle className="sr-only">{t.title}</DialogTitle>
        {!isSuccess ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Section - Contact Info */}
            <div className="lg:col-span-1 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{t.profileName}</h3>
                  <p className="text-sm text-gray-600">{t.profileTitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-yellow-400">👋</span>
                  <span>{t.consultationTitle}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {t.consultationDescription}
                </p>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">⏱️</span>
                  <span>{t.availability}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-gray-500">🌐</span>
                  <span>{t.location}</span>
                </div>
              </div>
            </div>

            {/* Middle Section - Form */}
            <div className="lg:col-span-1 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {t.contactInfoTitle}
                </h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-3"
                    aria-describedby="form-description"
                    noValidate
                  >
                    {/* Form description for screen readers */}
                    <div id="form-description" className="sr-only">
                      {locale === "jp"
                        ? "お問い合わせフォームです。必須項目を入力してください。"
                        : "Contact form. Please fill in all required fields."}
                    </div>

                    {/* Formspree validation errors */}
                    <ValidationError errors={formspreeState.errors} />
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="name">{t.nameLabel}</FormLabel>
                          <FormControl>
                            <Input
                              id="name"
                              placeholder={t.nameLabel}
                              {...field}
                              aria-required="true"
                              aria-describedby="name-error"
                            />
                          </FormControl>
                          <FormMessage id="name-error" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="email">{t.emailLabel}</FormLabel>
                          <FormControl>
                            <Input
                              id="email"
                              type="email"
                              placeholder="your@email.com"
                              {...field}
                              aria-required="true"
                              aria-describedby="email-error"
                            />
                          </FormControl>
                          <FormMessage id="email-error" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="serviceType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="service-type">
                            {t.serviceTypeLabel}
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger
                                id="service-type"
                                aria-describedby="service-type-error"
                              >
                                <SelectValue
                                  placeholder={t.serviceTypePlaceholder}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {serviceTypes[locale].map((service) => (
                                <SelectItem key={service} value={service}>
                                  {service}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage id="service-type-error" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel htmlFor="message">
                            {t.messageLabel}
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              id="message"
                              placeholder={t.messagePlaceholder}
                              className="min-h-[80px]"
                              {...field}
                              aria-required="true"
                              aria-describedby="message-error"
                            />
                          </FormControl>
                          <FormMessage id="message-error" />
                        </FormItem>
                      )}
                    />

                    {/* Honeypot field - hidden from users */}
                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem className="sr-only">
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              {...field}
                              tabIndex={-1}
                              autoComplete="off"
                              style={{ display: "none" }}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full py-2"
                      disabled={formspreeState.submitting}
                      aria-label={
                        formspreeState.submitting
                          ? locale === "jp"
                            ? "送信中です"
                            : "Sending message..."
                          : locale === "jp"
                          ? "メッセージを送信"
                          : "Send message"
                      }
                      aria-describedby={
                        formspreeState.submitting ? "submit-status" : undefined
                      }
                    >
                      {formspreeState.submitting ? (
                        <>
                          <Loader2
                            className="w-4 h-4 mr-2 animate-spin"
                            aria-hidden="true"
                          />
                          {locale === "jp" ? "送信中..." : "Sending..."}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                          {t.sendButton}
                        </>
                      )}
                    </Button>

                    {/* Status announcement for screen readers */}
                    {formspreeState.submitting && (
                      <div
                        id="submit-status"
                        className="sr-only"
                        aria-live="polite"
                      >
                        {locale === "jp"
                          ? "フォームを送信中です"
                          : "Submitting form..."}
                      </div>
                    )}
                  </form>
                </Form>
              </div>
            </div>

            {/* Right Section - Direct Contact */}
            <div className="lg:col-span-1 space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">
                  {t.quickContactTitle}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {t.quickContactDescription}
                </p>
              </div>

              <div className="space-y-3">
                <SmartContactHandler platform="line" locale={locale}>
                  <Button variant="outline" className="w-full">
                    <Image
                      src="/images/line.png"
                      alt="LINE"
                      width={24}
                      height={24}
                      className="mr-3"
                    />
                    {t.lineButton}
                  </Button>
                </SmartContactHandler>

                <SmartContactHandler platform="whatsapp" locale={locale}>
                  <Button variant="outline" className="w-full">
                    <Image
                      src="/images/whatsapp.png"
                      alt="WhatsApp"
                      width={24}
                      height={24}
                      className="mr-3"
                    />
                    {t.whatsappButton}
                  </Button>
                </SmartContactHandler>
              </div>

              <div className="text-center pt-4 border-t">
                <p className="text-xs text-gray-500">{t.lineSubtext}</p>
              </div>
            </div>
          </div>
        ) : (
          /* Success State */
          <div className="text-center space-y-4 py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <Mail className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold">{t.successTitle}</h3>
            <p className="text-gray-600">{t.successMessage}</p>
            <Button onClick={handleClose} className="mt-4">
              {t.closeButton}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export { ContactModal };
