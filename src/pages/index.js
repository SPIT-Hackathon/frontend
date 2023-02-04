import { Inter } from "@next/font/google";
import { Container } from "react-bootstrap";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <Script src="/static/scripts.js"></Script> */}
      <Container>
        <div>Hey</div>
      </Container>
    </>
  );
}
