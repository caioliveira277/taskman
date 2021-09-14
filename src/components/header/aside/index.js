import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Container from "../../container";
import { Input, ColorPicker, TextArea } from "../../inputs";
import { ButtonTheme } from "../../buttons";
import { Aside, Preview, Group } from "./styles";

export default function AsideComponent() {
  const AsideDispatch = useDispatch();
  const [annotation, setAnnotation] = useState({
    colorBackground: "#dddddd",
    title: "Título",
    colorTitle: "#2e2e2e",
    description: "Descrição",
    colorDescription: "#2e2e2e",
  });

  const HandlerClick = () => {
    AsideDispatch({ type: "CLOSE_ASIDE" });
  };
  const HandlerChange = ({ target }) => {
    setAnnotation({
      ...annotation,
      [target.name]: target.value,
    });
  };

  return (
    <Container onClick={HandlerClick}>
      <Aside onClick={(event) => event.stopPropagation()}>
        <h1>Nova anotação</h1>
        <Preview
          colorBackground={annotation.colorBackground}
          colorTitle={annotation.colorTitle}
          colorDescription={annotation.colorDescription}
        >
          <span>
            <h2>{annotation.title}</h2>
            <p>{annotation.description}</p>
          </span>
        </Preview>
        <hr />
        <form>
          <Group>
            <span>
              <h2>Cor de fundo:</h2>
              <ColorPicker
                name="colorBackground"
                colorDefault={annotation.colorBackground}
                onChange={HandlerChange}
              />
            </span>
          </Group>
          <hr />
          <Group>
            <span>
              <h2>Título:</h2>
              <ColorPicker
                name="colorTitle"
                colorDefault={annotation.colorTitle}
                onChange={HandlerChange}
              />
            </span>
            <Input
              placeholder="Título da anotação"
              name="title"
              onChange={HandlerChange}
            />
          </Group>
          <Group>
            <span>
              <h2>Descrição:</h2>
              <ColorPicker
                name="colorDescription"
                colorDefault={annotation.colorDescription}
                onChange={HandlerChange}
              />
            </span>
            <TextArea
              placeholder="Descrição da anotação"
              rows={8}
              height="auto"
              name="description"
              onChange={HandlerChange}
            />
          </Group>
          <ButtonTheme type="submit">Salvar</ButtonTheme>
        </form>
      </Aside>
    </Container>
  );
}
