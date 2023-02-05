import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import SideHug from "@/components/Home/SideHug";
import Category from "@/components/Home/Category";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import authContext from "@/hooks/AuthContext/authContext";

const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  const { user } = useContext(authContext);
  return (
    <>
      <SideHug />

      {user && <Category />}
    </>
  );
}
