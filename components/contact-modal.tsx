"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MessageCircle, Send, Loader2 } from "lucide-react";
import { useForm as useFormspreeForm, ValidationError } from "@formspree/react";
import {
  contactConfig,
  directMessages,
  serviceTypes,
} from "@/lib/contact-config";
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

// Zod schema for form validation
const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  website: z.string().optional(),
  serviceType: z.string().min(1, "Please select a service type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: "en" | "jp";
}

const ContactModal = ({ isOpen, onClose, locale }: ContactModalProps) => {
  const [isSuccess, setIsSuccess] = useState(false);

  // Formspree form hook
  const [formspreeState, formspreeHandleSubmit] = useFormspreeForm("manogljy");

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      website: "",
      serviceType: "",
      message: "",
    },
  });

  const content = {
    en: {
      title: "Let's Make It Happen",
      subtitle: "Choose your preferred way to get in touch",
      formTitle: "Quick Contact Form",
      nameLabel: "Name",
      emailLabel: "Email",
      websiteLabel: "Website URL (optional)",
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
      websiteLabel: "ウェブサイトURL（任意）",
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
    // Use Formspree's handleSubmit with our form data
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("website", data.website || "");
    formData.append("serviceType", data.serviceType);
    formData.append("message", data.message);
    formData.append("locale", locale);

    // Submit using Formspree's handleSubmit
    await formspreeHandleSubmit(formData);
  };

  // Handle success state from Formspree
  React.useEffect(() => {
    if (formspreeState.succeeded) {
      setIsSuccess(true);
      form.reset();
    }
  }, [formspreeState.succeeded, form]);

  const handleDirectContact = (platform: "line" | "whatsapp") => {
    const encodedMessage = encodeURIComponent(directMessages[locale]);

    const urls = {
      line: `${contactConfig.line.url}?text=${encodedMessage}`,
      whatsapp: `${contactConfig.whatsapp.url}?text=${encodedMessage}`,
    };

    window.open(urls[platform], "_blank");
  };

  const handleClose = () => {
    if (isSuccess) {
      setIsSuccess(false);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] overflow-y-auto">
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
                  <p className="text-sm text-muted-foreground">
                    {t.profileTitle}
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-yellow-400">👋</span>
                  <span>{t.consultationTitle}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {t.consultationDescription}
                </p>
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">⏱️</span>
                  <span>{t.availability}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-muted-foreground">🌐</span>
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
                  >
                    {/* Formspree validation errors */}
                    <ValidationError errors={formspreeState.errors} />
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.nameLabel}</FormLabel>
                          <FormControl>
                            <Input placeholder={t.nameLabel} {...field} />
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
                          <FormLabel>{t.emailLabel}</FormLabel>
                          <FormControl>
                            <Input
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
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t.websiteLabel}</FormLabel>
                          <FormControl>
                            <Input
                              type="url"
                              placeholder="https://yourwebsite.com"
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
                          <FormLabel>{t.serviceTypeLabel}</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
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
                          <FormLabel>{t.messageLabel}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t.messagePlaceholder}
                              className="min-h-[80px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full py-2"
                      disabled={formspreeState.submitting}
                    >
                      {formspreeState.submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          {locale === "jp" ? "送信中..." : "Sending..."}
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          {t.sendButton}
                        </>
                      )}
                    </Button>
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
                <p className="text-sm text-muted-foreground mb-4">
                  {t.quickContactDescription}
                </p>
              </div>

              <div className="space-y-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleDirectContact("line")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t.lineButton}
                </Button>

                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => handleDirectContact("whatsapp")}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  {t.whatsappButton}
                </Button>
              </div>

              <div className="text-center pt-4 border-t">
                <p className="text-xs text-muted-foreground">{t.lineSubtext}</p>
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
            <p className="text-muted-foreground">{t.successMessage}</p>
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
