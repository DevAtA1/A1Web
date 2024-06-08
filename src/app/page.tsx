"use client";
import Divider from "@/components/Divider";
import Hero from "@/components/Hero";
import HomeAbout from "@/components/HomeAbout";
import HomeContact from "@/components/HomeContact";
import HomeServices from "@/components/HomeServices";
import HomeSolutions from "@/components/HomeSolutions";
export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Divider></Divider>
      <HomeAbout></HomeAbout>
      <Divider></Divider>
      <HomeServices></HomeServices>
      <Divider></Divider>
      <HomeSolutions></HomeSolutions>
      <Divider></Divider>
      <HomeContact></HomeContact>
    </>
  );
}
