import React from "react";
import { Container, Section, Preview } from "./styles";

export default function Aside() {
  return (
    <Container>
      <Section>
        <em>
          <h2>Anotação</h2>
        </em>
        <Preview>
          <p>Title</p>
        </Preview>
        <hr />
      </Section>
    </Container>
  );
}
