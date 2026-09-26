import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "../styles/globals.css"
import PageLoader from "@/components/PageLoader"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "https://ryhar.my.id"),
  title: {
    default: "Novan | Portfolio",
    template: "%s | Novan Portfolio",
  },
  description: "Personal portfolio of Nathanael Novan.",
  keywords: ["Nathanael Novan", "Novan", "Portfolio", "Web Developer", "Software Developer"],
  authors: [{ name: "Nathanael Novan" }],
  creator: "Nathanael Novan",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "/",
    title: "Novan | Portfolio",
    description: "Personal portfolio of Nathanael Novan.",
    siteName: "Novan Portfolio",
    images: [
      {
        url: "/images/novan.jpg",
        width: 1200,
        height: 630,
        alt: "Novan Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Novan | Portfolio",
    description: "Personal portfolio of Nathanael Novan.",
    images: ["/images/novan.jpg"],
    creator: "@Novan",
  },
  icons: {
    icon: "/images/novan.jpg",
    shortcut: "/images/novan.jpg",
    apple: "/images/novan.jpg",
  },
  alternates: {
    canonical: "/",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <PageLoader />
        {children}
      </body>
    </html>
  )
}

