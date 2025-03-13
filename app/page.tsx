import { Metadata } from "next";

import { blocks } from "@/app/lib/data";

import { Block } from "@/app/components/block/block";
import { Container } from "@/app/components/container/container";
import { _FeatureCard } from "@/app/components/feature-card/feature-card";
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
        <main>
          {blocks.map((item) => (
            <Block key={item.title}>
              <_FeatureCard />
            </Block>
          ))}
        </main>
      </Container>
    </Page>
  );
}
