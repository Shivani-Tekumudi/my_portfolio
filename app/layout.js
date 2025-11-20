import { Geist, Geist_Mono,IBM_Plex_Sans_JP } from "next/font/google";
import "./globals.css";
import ScrollTrigger from "./components/ScrollTrigger";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ibmPlexSansJP = IBM_Plex_Sans_JP({
  variable: "--font-ibm-plex-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // you can add more weights if you use them
});

export const metadata = {
  title: "Shivani-Tekumudi-Portfolio",
  description: "My site ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   <body className={`${ibmPlexSansJP.variable} ${geistSans.variable} antialiased`}>
  {/* <ScrollTrigger /> */}
   <div id="page-spinner" className="spinner-overlay">
          <div className="spinner"></div>
        </div>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('load', function() {
                const spinner = document.getElementById('page-spinner');
                if (spinner) spinner.style.display = 'none';
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
