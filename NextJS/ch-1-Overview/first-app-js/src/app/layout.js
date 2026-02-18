import "./globals.css";
import Footer from "@/components/common/Footer"
import Header from "@/components/common/Header";


export const metadata = {
  title: "Dravinanshu Portfolio",
  description: "Welcome to Dravinanshu Mishra Portfolio",
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-linear-to-br from-blue-50 via-white to-gray-100 ">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
