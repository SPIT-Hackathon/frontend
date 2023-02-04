import Layout from "@/components/common/Layout";
import AuthState from "@/hooks/AuthContext/AuthState";
import DataState from "@/hooks/DataContext/DataState";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Head from "next/head";
import React from "react";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>StudyPat</title>
        <meta name="description" content="StudyPat by TechBytes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AuthState>
        <DataState>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ToastContainer />
        </DataState>
      </AuthState>
    </React.Fragment>
  );
}
