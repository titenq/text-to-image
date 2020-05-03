import React from 'react';
import { FaGithub, FaRegCopyright } from 'react-icons/fa';

import { Container, FormGroup, ButtonSubmit, Footer } from './styles';

export default function Home() {
  return (
    <>
    <Container>
      <h1>Text to Image</h1>
      <form>
        <FormGroup>
          <span>Envie a Imagem:</span>
          <input type="file" name="file" id="file" accept="image/*" />
        </FormGroup>
        <FormGroup>
          <span>Envie o Texto:</span>
          <span className="max-chars">Não pule linha nem parágrafo para uma melhor visualização.</span>
          <span className="chars-repeat">Se o texto não tiver o número mínimo de caracteres, ele será repetido automaticamente.</span>
          <textarea name="text" id="text" cols="100" rows="10"></textarea>
        </FormGroup>
        <ButtonSubmit>
          <button type="button" id="submit" onclick="generateImage()">Gerar Imagem</button>
        </ButtonSubmit>
      </form>
    </Container>
    <Footer>
      <span><FaRegCopyright /> TitenQ</span>
      <a href="https://github.com/titenq/text-to-image" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </Footer>
    </>
  );
}
