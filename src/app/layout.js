import ReduxProviderComponent from "@/components/layout/ReduxProviderComponent";
import "./globals.css";
import localFont from "next/font/local";
const vazirMatn = localFont({
  src: "./fonts/vazir-matn/Vazirmatn[wght].woff2",
  weight: "100 900",
});
export const metadata = {
  title: "N-Ai",
  description: "N-Ai is an assistant for every moment of yours!",
  keywords: [
    "N-Ai",
    "N-Assistant",
    "Ai",
    "Assistant",
    "Ai Assistant",
    "هوش مصنوعی",
  ],
  author: "Navid Tartak",
  icons: {
    apple: "/images/logo.png",
    android: "/images/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="theme-color" content="#ededed" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <body
        className={`${vazirMatn.className} w-full min-h-[calc(100dvh)] transition-all duration-200 bg-gradient-to-br from-gray-200 via-slate-100 to-red-100 dark:from-gray-800 dark:via-slate-900 dark:to-blue-950`}
      >
        <ReduxProviderComponent>{children}</ReduxProviderComponent>
      </body>
    </html>
  );
}
