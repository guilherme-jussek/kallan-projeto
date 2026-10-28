# Projeto Kallan | Desenvolvimento Front-End para Web

## Integrantes

- Guilherme Jussek Nogueira | RGM: 47392657
- Henry Soave Bailer | RGM: 46977244
- Matheus Augusto Assunção Novaes | RGM: 47714638
- Nicolas Gabriel Parris Reis | RGM: 47646691
- Sander Lima Alves | RGM: 47673621

## 1. Introdução

Este projeto acadêmico foi desenvolvido para a disciplina de Desenvolvimento Front-End para Web, utilizando a Kallan Calçados como organização real de referência.

O objetivo é desenvolver um site com páginas interligadas, utilizando HTML5 semântico, CSS e JavaScript. O projeto conta com páginas de conteúdo, formulários, recursos multimídia e elementos visuais que buscam proporcionar uma navegação organizada e uma experiência adequada ao segmento de calçados.


### 1.1 Contato com a organização real

O contato com a organização foi realizado presencialmente pelo integrante Sander Lima Alves, que trabalha na unidade Kallan K44. Durante o contato, foi obtida autorização da gestão para a utilização do nome e do logotipo da unidade para fins acadêmicos relacionados ao desenvolvimento deste projeto.

### 1.2 Comprovação do contato

Como complemento à comprovação do contato presencial com a unidade Kallan K44, foram adicionadas à pasta `docs/` três fotografias relacionadas à unidade, mostrando o interior da loja e a identificação da marca.

[Ver fotos da unidade Kallan K44](./docs/)

## 2. Processo de desenvolvimento

O projeto foi desenvolvido utilizando HTML5, CSS e JavaScript, com o Visual Studio Code como ambiente de programação. O grupo trabalhou em conjunto durante as etapas de planejamento, implementação, revisão e testes.

As páginas foram organizadas no diretório `paginas/`, enquanto os arquivos de estilo, scripts, imagens e recursos multimídia foram separados em seus respectivos diretórios. Essa organização facilitou a manutenção do projeto e a localização dos arquivos.

O Git e o GitHub foram utilizados para controlar as versões do código e acompanhar as alterações realizadas durante o desenvolvimento.

### 2.1 Pesquisa de referências visuais

Durante o desenvolvimento, pesquisamos sites de marcas conhecidas do segmento esportivo, como Nike, Adidas e New Balance, para observar referências de cores, tipografia, organização dos elementos e apresentação dos calçados.

Essa pesquisa ajudou o grupo a definir uma identidade visual para o site da Kallan, buscando uma aparência moderna, organizada e adequada ao setor de calçados. As referências foram utilizadas como inspiração para as decisões de design, sem a intenção de reproduzir integralmente o layout de outras marcas.

### 2.2 Estrutura e recursos implementados

O site possui páginas para diferentes categorias e funcionalidades, incluindo feminino, masculino, infantil, acessórios, marcas, lojas, tênis esportivos, contato, orçamento e confirmação de envio.

Durante a implementação, foram utilizados elementos semânticos do HTML5, links para navegação entre as páginas, formulários com validação nativa, recursos de áudio e vídeo e um elemento gráfico em SVG.

O CSS foi utilizado para definir a identidade visual, a organização dos conteúdos, a tipografia, as cores e a apresentação dos elementos da interface. O JavaScript foi empregado para adicionar interatividade à página por meio de eventos e alterações visuais.

Os formulários de contato e orçamento utilizam o Netlify Forms para o recebimento das informações enviadas pelos usuários.

## 3. Desafios técnicos

Durante o desenvolvimento, tivemos desafios relacionados à organização da navegação entre as páginas, aos caminhos dos arquivos e à configuração dos formulários e recursos multimídia.

Também foi necessário revisar o código para corrigir problemas identificados durante a validação. Após os ajustes, realizamos testes para verificar o funcionamento dos links, dos formulários e dos recursos presentes no site publicado.

Essas etapas ajudaram o grupo a compreender melhor a importância de testar o projeto durante o desenvolvimento, em vez de verificar apenas sua aparência final.

## 4. Uso de Inteligência Artificial

Durante o desenvolvimento do projeto, utilizamos o ChatGPT como apoio para esclarecer dúvidas sobre HTML, CSS e JavaScript, compreender o funcionamento de alguns elementos, identificar possíveis erros e revisar trechos do código.

Também utilizamos o Gemini como ferramenta de apoio à geração de imagens para o projeto. As imagens geradas foram utilizadas como recursos visuais, considerando a proposta e a identidade do site.

As ferramentas de Inteligência Artificial foram utilizadas para auxiliar o processo de desenvolvimento e a produção de materiais visuais. As sugestões de código foram analisadas pelo grupo, e os ajustes foram verificados por meio da leitura do código e de testes no navegador.

A IA foi utilizada como apoio ao aprendizado e à resolução de problemas, sem substituir a participação do grupo nas decisões, na implementação e na verificação dos resultados.

### 4.1 Como um site semelhante poderia ser desenvolvido com IA

Uma ferramenta de Inteligência Artificial poderia auxiliar na criação de um site semelhante a partir de uma descrição dos requisitos, das páginas necessárias e da identidade visual desejada. Ela poderia sugerir estruturas HTML, estilos CSS, funcionalidades em JavaScript e formas de organizar os arquivos. Também poderia gerar imagens para compor as páginas.

Mesmo com esse apoio, seria necessário revisar o código gerado, verificar a semântica e a acessibilidade, testar os formulários, confirmar os caminhos dos arquivos e validar o HTML e o CSS. Também seria importante conferir se o resultado atende aos requisitos da atividade e se os recursos implementados realmente funcionam, além de que a IA não gera sites muito originais então mesmo que ela ajude, ainda é necessário dar atenção no quesito design.

A utilização da IA pode facilitar algumas etapas do desenvolvimento, mas não elimina a necessidade de compreender, testar e revisar o resultado produzido.

## 5. Estrutura do projeto

A estrutura principal do repositório está organizada da seguinte forma:

kallan-projeto/
├── assets/
│   ├── img/
│   │   └── sacola.svg
│   ├── audio/
│   └── video/
├── css/
│   └── style.css
├── docs/
│   ├── validacao-css/
│   ├── validacao-html/
│   ├── kallan_interior-1.jpg
│   ├── kallan_interior_2.jpg
│   └── kallan_loja.jpg
├── js/
│   └── script.js
├── paginas/
│   ├── acessorios.html
│   ├── contato.html
│   ├── feminino.html
│   ├── index.html
│   ├── infantil.html
│   ├── lojas.html
│   ├── marcas.html
│   ├── masculino.html
│   ├── obrigado.html
│   ├── orcamento.html
│   └── tenis-esportivo.html
└── README.md

## 6. Validação e testes

Todas as páginas HTML do projeto foram validadas utilizando o W3C Validator. Durante esse processo, os erros identificados foram analisados e corrigidos, e as páginas foram verificadas novamente após os ajustes.

A folha de estilo CSS também foi verificada utilizando o validador do W3C. As evidências das validações foram organizadas na pasta `docs/`, nas subpastas `validacao-html/` e `validacao-css/`.

Além da validação do código, foram realizados testes no navegador para verificar a navegação entre as páginas, o funcionamento dos formulários e a reprodução dos recursos multimídia.

Essas verificações contribuíram para melhorar a qualidade do código e reduzir problemas de funcionamento no site publicado.

## 7. Hospedagem

O projeto está publicado gratuitamente no Netlify e pode ser acessado pelo endereço:

[https://kallan-projeto.netlify.app/](https://kallan-projeto.netlify.app/)

A hospedagem está conectada ao repositório do GitHub, permitindo atualizar o site quando as alterações são enviadas ao branch principal configurado para a publicação.

### 7.1 Pesquisa e escolha do domínio

Para este projeto acadêmico, o grupo optou por continuar utilizando o endereço disponibilizado pelo Netlify, em vez de adquirir um domínio próprio.

Essa decisão permite manter o site acessível pela internet sem a necessidade de contratar um domínio separado. O endereço atual atende à finalidade de apresentar e demonstrar o funcionamento do projeto durante a disciplina.

## 8. Conclusão

## 8. Conclusão

Desenvolver esse projeto foi uma experiência de aprendizado para o grupo. Ao longo do trabalho, tivemos que resolver problemas com os caminhos dos arquivos, a navegação entre as páginas e o funcionamento de alguns recursos. Nem tudo funcionou de primeira, então precisamos revisar o código, fazer testes e corrigir os erros até chegar ao resultado esperado.

Também tivemos a oportunidade de colocar em prática o que aprendemos sobre HTML, CSS e JavaScript, além de conhecer melhor o processo de publicação de um site. O uso do ChatGPT e do Gemini nos ajudou em algumas etapas, mas foi importante conferir os resultados e fazer os ajustes necessários para que o projeto funcionasse como planejado.

No final, conseguimos construir um site com diferentes páginas e funcionalidades, e entendemos melhor o trabalho que existe por trás de um projeto web. Ainda temos muito a aprender, mas essa experiência nos ajudou a ganhar prática e a perceber como o conhecimento adquirido em aula pode ser aplicado em um projeto real.