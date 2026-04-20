"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, Send, Loader2 } from "lucide-react";
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

type ContactFormData = {
  name: string;
  email: string;
  serviceType: string;
  message: string;
  website: string;
};

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: "en" | "jp";
}

const content = {
  en: {
    title: "Let's Talk About Your Project",
    profileTitle: "Shopify Development & Performance Marketing",
    consultationTitle: "Project consultation",
    consultationDescription:
      "Tell me what you are building, what you want to improve, or where you are stuck. I will review it and come back with the next best step.",
    availability: "Based in Tokyo, supporting clients in Japan and abroad",
    location: "Tokyo, Japan",
    contactInfoTitle: "Project details",
    nameLabel: "Name",
    emailLabel: "Email",
    serviceTypeLabel: "Service type",
    serviceTypePlaceholder: "Select a service...",
    messageLabel: "Message",
    messagePlaceholder:
      "Tell me about your website, ads, market, or the challenge you want to solve...",
    sendButton: "Send Message",
    quickContactTitle: "Prefer direct contact?",
    quickContactDescription:
      "If messaging is easier, you can also reach out on LINE or WhatsApp.",
    lineButton: "LINE",
    whatsappButton: "WhatsApp",
    lineSubtext:
      "Useful for a first message, quick questions, or follow-ups during a project.",
    successTitle: "Message sent",
    successMessage:
      "Thanks for reaching out. I received your message and will get back to you soon.",
    closeButton: "Close",
    tooFast: "Submission was too fast. Please try again.",
    submitting: "Sending...",
    submitAria: "Send message",
    formDescription:
      "Project inquiry form. Please complete the required fields before submitting.",
    validation: {
      name: "Name must be at least 2 characters.",
      email: "Please enter a valid email address.",
      serviceType: "Please select a service type.",
      message: "Message must be at least 10 characters.",
      website: "Invalid submission.",
    },
  },
  jp: {
    title: "プロジェクトについて相談する",
    profileTitle: "Shopify構築・広告運用支援",
    consultationTitle: "ご相談内容",
    consultationDescription:
      "新規制作、改善したい点、今つまずいていることなどをお知らせください。内容を確認したうえで、次の進め方をご提案します。",
    availability: "東京を拠点に、日本国内・海外向けの案件を支援しています",
    location: "東京, 日本",
    contactInfoTitle: "お問い合わせ内容",
    nameLabel: "お名前",
    emailLabel: "メールアドレス",
    serviceTypeLabel: "ご相談内容",
    serviceTypePlaceholder: "サービスを選択してください",
    messageLabel: "メッセージ",
    messagePlaceholder:
      "Webサイト、広告運用、対象市場、今の課題などをお知らせください...",
    sendButton: "送信する",
    quickContactTitle: "LINE / WhatsAppで連絡する",
    quickContactDescription:
      "メールより気軽に相談したい場合は、LINEまたはWhatsAppでもご連絡いただけます。",
    lineButton: "LINE",
    whatsappButton: "WhatsApp",
    lineSubtext:
      "初回のご相談、簡単な質問、進行中のやり取りにも使いやすい連絡方法です。",
    successTitle: "送信が完了しました",
    successMessage:
      "お問い合わせありがとうございます。内容を確認のうえ、順次ご返信します。",
    closeButton: "閉じる",
    tooFast: "送信が早すぎました。少し時間をおいて再度お試しください。",
    submitting: "送信中...",
    submitAria: "メッセージを送信",
    formDescription:
      "お問い合わせフォームです。必須項目を入力してから送信してください。",
    validation: {
      name: "お名前を2文字以上で入力してください。",
      email: "有効なメールアドレスを入力してください。",
      serviceType: "ご相談内容を選択してください。",
      message: "メッセージを10文字以上で入力してください。",
      website: "無効な送信です。",
    },
  },
} as const;

const getContactFormSchema = (locale: "en" | "jp") => {
  const t = content[locale].validation;

  return z.object({
    name: z.string().min(2, t.name),
    email: z.string().email(t.email),
    serviceType: z.string().min(1, t.serviceType),
    message: z.string().min(10, t.message),
    website: z.string().max(0, t.website),
  });
};

const ContactModal = ({ isOpen, onClose, locale }: ContactModalProps) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitTime, setSubmitTime] = useState<number | null>(null);
  const [formspreeState, formspreeHandleSubmit] = useFormspreeForm("manogljy");
  const t = content[locale];
  const schema = useMemo(() => getContactFormSchema(locale), [locale]);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      serviceType: "",
      message: "",
      website: "",
    },
  });

  const handleSubmit = async (data: ContactFormData) => {
    const now = Date.now();

    if (submitTime && now - submitTime < 3000) {
      toast.error(t.tooFast);
      return;
    }

    if (data.website) {
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("serviceType", data.serviceType);
    formData.append("message", data.message);
    formData.append("locale", locale);

    await formspreeHandleSubmit(formData);
  };

  useEffect(() => {
    if (isOpen) {
      setSubmitTime(Date.now());
    }
  }, [isOpen]);

  useEffect(() => {
    if (formspreeState.succeeded) {
      setIsSuccess(true);
      form.reset();
    }
  }, [formspreeState.succeeded, form]);

  const handleClose = () => {
    if (isSuccess) {
      setIsSuccess(false);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto border border-gray-200 bg-white text-gray-900 shadow-2xl sm:max-w-4xl">
        <DialogTitle className="sr-only">{t.title}</DialogTitle>
        {!isSuccess ? (
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-1">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Ryan</h3>
                  <p className="text-sm text-gray-600">{t.profileTitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span>{t.consultationTitle}</span>
                </div>
                <p className="text-sm text-gray-600">
                  {t.consultationDescription}
                </p>
              </div>

              <div className="space-y-2 border-t pt-4 text-sm">
                <div className="text-gray-700">{t.availability}</div>
                <div className="text-gray-700">{t.location}</div>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="text-gray-600 underline underline-offset-2"
                >
                  {contactConfig.email}
                </a>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-1">
              <div>
                <h3 className="mb-3 text-lg font-semibold">
                  {t.contactInfoTitle}
                </h3>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(handleSubmit)}
                    className="space-y-3"
                    aria-describedby="form-description"
                    noValidate
                  >
                    <div id="form-description" className="sr-only">
                      {t.formDescription}
                    </div>

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
                            />
                          </FormControl>
                          <FormMessage />
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
                            />
                          </FormControl>
                          <FormMessage />
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
                              <SelectTrigger id="service-type">
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
                          <FormMessage />
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
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

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
                      aria-label={t.submitAria}
                    >
                      {formspreeState.submitting ? (
                        <>
                          <Loader2
                            className="mr-2 h-4 w-4 animate-spin"
                            aria-hidden="true"
                          />
                          {t.submitting}
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" aria-hidden="true" />
                          {t.sendButton}
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            <div className="space-y-4 lg:col-span-1">
              <div>
                <h3 className="mb-3 text-lg font-semibold">
                  {t.quickContactTitle}
                </h3>
                <p className="mb-4 text-sm text-gray-600">
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

              <div className="border-t pt-4 text-center">
                <p className="text-xs text-gray-500">{t.lineSubtext}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-4 py-8 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
              <Mail className="h-8 w-8 text-green-600" />
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
