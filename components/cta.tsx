import Image from "next/image";
import { CTAScrollLinks } from "@/components/cta-scroll-links";

interface CTAProps {
  locale?: string;
}

export const CTA = ({ locale = "en" }: CTAProps) => {
  const content = {
    en: {
      title: "Got a project in mind or just a few questions?",
      subtitle: "Let's chat about how we can help bring your vision to life.",
      primaryButton: "Let's Chat →",
      secondaryButton: "View Projects →",
    },
    jp: {
      title: "お悩みやご相談、いつでもお気軽に！",
      subtitle: "あなたのビジョンを実現するお手伝いをします。",
      primaryButton: "今すぐ相談する →",
      secondaryButton: "プロジェクトを見る →",
    },
  };

  const currentContent = content[locale as keyof typeof content] || content.en;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden -mt-10">
      {/* Multi-directional fade system */}
      <div className="absolute inset-0 bg-gradient-to-br from-background to-black/90"></div>

      {/* Edge masking with diagonal gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(135deg, transparent 0px, var(--background) 32px),
            linear-gradient(45deg, transparent 0px, var(--background) 32px),
            linear-gradient(to bottom, var(--background) 0px, transparent 32px),
            linear-gradient(to right, var(--background) 0px, transparent 32px),
            linear-gradient(to left, var(--background) 0px, transparent 32px)
          `,
        }}
      ></div>

      {/* Grid pattern with reduced opacity */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                {currentContent.title}
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                {currentContent.subtitle}
              </p>
            </div>

            {/* Buttons with scroll functionality */}
            <CTAScrollLinks
              primaryText={currentContent.primaryButton}
              secondaryText={currentContent.secondaryButton}
            />
          </div>

          {/* Right side - Globe Image with Effects */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Glow halos */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-60 h-60 bg-blue-400/30 rounded-full blur-2xl"></div>
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full absolute top-20 left-10 animate-pulse"></div>
              <div className="w-1 h-1 bg-blue-300 rounded-full absolute top-32 right-16 animate-ping"></div>
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full absolute bottom-24 left-20 animate-pulse"></div>
              <div className="w-1 h-1 bg-blue-200 rounded-full absolute bottom-16 right-12 animate-ping"></div>
            </div>

            {/* Globe Image */}
            <div className="relative z-10">
              <Image
                src="/images/cta-section-image.png"
                alt="Futuristic Globe"
                width={320}
                height={320}
                priority
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
