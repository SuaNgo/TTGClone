import "./globals.css";

export const metadata = {
  title: "TTGShop-Clone",
  description: "Personal Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
