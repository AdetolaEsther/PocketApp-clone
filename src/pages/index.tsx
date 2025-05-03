import Cards from "@/components/Cards";
import FooterFaq from "@/components/FooterFaq";
import Groups from "@/components/Groups";
import Header from "@/components/Header";
import Payment from "@/components/Payment";
import Shops from "@/components/Shops";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <>
            <Header />
            <Payment />
            <Cards/>
            <Groups/>
            <Shops/>
            <Testimonials/>
            <FooterFaq/>
        </>
    );
}
