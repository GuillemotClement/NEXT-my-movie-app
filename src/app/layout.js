import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css'
import Header from "./components/Header/Header";
import Footer from './components/Footer/Footer';

export const metadata = {
  title: "My Movie App",
  // description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-auto mn-hi-full container mx-auto">
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
