import Cards from "@/components/Cards";
import Groups from "@/components/Groups";
import Header from "@/components/Header";
import Payment from "@/components/Payment";

export default function Home() {
    return (
        <>
            <Header />
            <Payment />
            <Cards/>
            <Groups/>
        </>
    );
}
