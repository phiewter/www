import { Container } from "@/app/components/container/container";
import { Header } from "@/app/components/header/header";
import { Page } from "@/app//components/page/page";

export default function Home() {
  return (
    <Page>
      <Container>
        <Header />
        <main></main>
      </Container>
    </Page>
  );
}
