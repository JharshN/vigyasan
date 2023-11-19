import Head from "next/head";
// import { Inter } from "next/font/google";
import Hero from "../components/hero";
import Waitlist from "../components/Waitlist";
import Aboutus from "../components/aboutus";
// import supabase from "../../supabase";

// import Parentscontent from "./components/Parentscontent";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // console.log(data.data);
  return (
    <>
      <Head>
        <title>ShikshaFinder</title>
        <meta
          name="ShikshaFinder"
          content="Choose Right to make your future bright,schools,how to find best schools for your child?,what is the best way of marketing your educational platform?,ShikshaFinder"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Hero />
      <Waitlist />
      <Aboutus />
    </>
  );
}

// export async function getStaticProps() {
//   const data = await supabase.from("school").select("*");
//   return {
//     props: { data },
//   };
