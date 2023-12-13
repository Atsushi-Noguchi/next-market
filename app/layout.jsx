import "./globals.css";
import Headers from "./components/header";
import Footer from "./components/footer";

const RootLayout = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <Headers />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
