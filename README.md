# Sistema de Gerenciamento de Pet Shops e Clínicas Veterinárias

Bem-vindo à documentação oficial do Sistema de Gerenciamento de Pet Shops e Clínicas Veterinárias. Este projeto foi desenvolvido para facilitar o cadastro, atualização, consulta e análise de clientes, produtos e serviços em pet shops e clínicas veterinárias. O sistema é totalmente operado por linha de comando (CLI), sem interface gráfica, e cada unidade possui sua própria base de dados em memória.

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
- [Funcionalidades](#funcionalidades)
- [Customização](#customização)
- [Contribuição](#contribuição)
- [Contato](#contato)

---

## Sobre o Projeto

O sistema foi inspirado pelo crescimento do setor pet no Brasil, que mesmo diante de cenários econômicos adversos, segue em expansão, conforme destacado pelo Instituto Pet Brasil (IPB). O setor apresenta mudanças progressivas nos hábitos das famílias, com aumento nas vendas e destaque para o comércio eletrônico e serviços especializados para animais de estimação.

O objetivo é oferecer uma solução simples, eficiente e acessível para a gestão de informações essenciais em pet shops e clínicas veterinárias, permitindo o controle de clientes, produtos e serviços de forma rápida e segura.

---

## Tecnologias Utilizadas

- Node.js (CLI)
- TypeScript
- Jest (testes unitários)

> **Observação:** O sistema não possui interface gráfica e não utiliza banco de dados externo; todas as informações são mantidas em memória durante a execução.

---

## Como Executar o Projeto

**Pré-requisitos:**
- Node.js (versão 14 ou superior)
- npm ou yarn

**Instalação:**
```sh
npm install
# ou
yarn install
```

**Execução:**
```sh
npm start
# ou
yarn start
```

---

## Estrutura do Projeto

```
T2/
  .gitignore
  package.json
  tsconfig.json
  README.md
  src/
    index.ts
    clientes/
    produtos/
    servicos/
    utils/
    tests/
```

- **clientes/**: Lógica de cadastro, atualização e consulta de clientes.
- **produtos/**: Gerenciamento de produtos.
- **servicos/**: Gerenciamento de serviços.
- **utils/**: Utilitários e funções auxiliares.
- **tests/**: Testes unitários.

---

## Padrões de Desenvolvimento

- **CLI:**  
  Todas as interações são feitas via linha de comando, sem interface gráfica.
- **Base de Dados em Memória:**  
  Cada execução mantém os dados apenas em memória, sem persistência após o encerramento.
- **Código Modular:**  
  Separação clara entre clientes, produtos, serviços e utilitários.
- **Testes# Sistema de Gerenciamento de Pet Shops e Clínicas Veterinárias

Bem-vindo à documentação oficial do Sistema de Gerenciamento de Pet Shops e Clínicas Veterinárias. Este projeto foi desenvolvido para facilitar o cadastro, atualização, consulta e análise de clientes, produtos e serviços em pet shops e clínicas veterinárias. O sistema é totalmente operado por linha de comando (CLI), sem interface gráfica, e cada unidade possui sua própria base de dados em memória.

---

## 📋 Sumário

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
- [Funcionalidades](#funcionalidades)
- [Customização](#customização)
- [Contribuição](#contribuição)
- [Contato](#contato)

---

## Sobre o Projeto

O sistema foi inspirado pelo crescimento do setor pet no Brasil, que mesmo diante de cenários econômicos adversos, segue em expansão, conforme destacado pelo Instituto Pet Brasil (IPB). O setor apresenta mudanças progressivas nos hábitos das famílias, com aumento nas vendas e destaque para o comércio eletrônico e serviços especializados para animais de estimação.

O objetivo é oferecer uma solução simples, eficiente e acessível para a gestão
