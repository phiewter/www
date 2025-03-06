"use client";

import * as React from "react";

import clsx from "clsx";

import Image from "next/image";

import styles from "@/app/components/feature-card/feature-card.module.css";

import { sideQuests } from "@/app/lib/data";

interface FeatureCardProps {
  children: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> & {
  Image: React.FC<FeatureCardImageProps>;
  Title: React.FC<FeatureCardTitleProps>;
  Description: React.FC<FeatureCardDescriptionProps>;
} = ({ children }) => {
  return <div className={clsx(styles["feature-card"])}>{children}</div>;
};
FeatureCard.displayName = "FeatureCard";

interface FeatureCardImageProps {
  src: string;
  alt: string;
}

FeatureCard.Image = ({ src, alt }) => {
  return (
    <Image
      priority
      className={styles.image}
      width={56}
      height={56}
      src={src}
      alt={alt}
    />
  );
};
FeatureCard.Image.displayName = "FeatureCardImage";

interface FeatureCardTitleProps {
  children: React.ReactNode;
}

FeatureCard.Title = ({ children }) => {
  return <h2 className={clsx(styles.title)}>{children}</h2>;
};
FeatureCard.Title.displayName = "FeatureCardTitle";

interface FeatureCardDescriptionProps {
  children: React.ReactNode;
}

FeatureCard.Description = ({ children }) => {
  return <p className={clsx(styles.description)}>{children}</p>;
};
FeatureCard.Description.displayName = "FeatureCardDescription";

// Pre-defined function [Derivative of <FeatureCard>]
const _FeatureCard: React.FC = () => {
  return (
    <>
      {sideQuests.map((item) => (
        <FeatureCard key={item.title}>
          <item.src aria-label={item.title} />
          <div className={styles["text-wrapper"]}>
            <FeatureCard.Title>{item.title}</FeatureCard.Title>
            <FeatureCard.Description>
              {item.description}
            </FeatureCard.Description>
          </div>
        </FeatureCard>
      ))}
    </>
  );
};
export { _FeatureCard };
