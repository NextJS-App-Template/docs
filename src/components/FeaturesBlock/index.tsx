import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import Link from "@docusaurus/Link";

type TextBlockParams = {
  title: string;
  description: JSX.Element;
};

const Features: TextBlockParams[] = [
  {
    title: "Components Library",
    description: (
      <>
        Built-in components for various use cases (header, footer, CTA button, table of contents, etc.)
      </>
    ),
  },
  {
    title: "Configuration Based",
    description: (
      <>
        Customizable using configuration and reusable components (reuse for different projects)
      </>
    ),
  },
  {
    title: "Extensible",
    description: (
      <>
        Extensible with custom components and plugins
      </>
    ),
  },
  {
    title: "Tailwind CSS and TypeScript",
    description: (
      <>
        Built with Next.js, Tailwind CSS, and TypeScript
      </>
    ),
  }
];

function TextBlock({ title, description }: TextBlockParams) {
  return (
    <div className={clsx("col col--6")}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function FeaturesBlock({ title }: { title: string }): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--center">
          <h2>{title}</h2>
        </div>
        <div className="row">
          {Features.map((props, idx) => (
            <TextBlock key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
