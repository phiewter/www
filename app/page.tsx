import { Metadata } from "next";

import { Container } from "@/app/components/container/container";
import { Header } from "@/app/components/header/header";
import { Page } from "@/app//components/page/page";

export const metadata: Metadata = {
  title: "Pieter van Arend's blog",
  description:
    "This is my personal website, where I share projects, ideas, and things I'm exploring. Feel free to look around and see what I'm working on.",
};

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
