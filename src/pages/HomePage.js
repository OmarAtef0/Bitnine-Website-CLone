import DropdownMenu from "../components/DropdownMenu";
import Footer from "../components/Footer";
import FooterLinks from "../components/FooterLinks";
import HiddenNav from "../components/HiddenNav";
import Main from "../components/Main";
import TopHeader from "../components/TopHeader";

export default function HomePage() {
  return (
    <main>
      <DropdownMenu />
      <HiddenNav />
      <TopHeader />
      <Main />
      <FooterLinks />
      <Footer />
    </main>
  );
}
