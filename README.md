# Sistema de Gerenciamento de Pet Shops e Clínicas Veterinárias

## Sobre o Projeto

Este sistema foi desenvolvido para facilitar o cadastro, atualização, consulta e análise de clientes, produtos e serviços de pet shops e clínicas veterinárias. O sistema é totalmente operado por linha de comando (CLI), sem interface gráfica, e cada unidade possui sua própria base de dados em memória.

O projeto foi inspirado pelo crescimento do setor pet no Brasil, que mesmo diante de cenários econômicos adversos, segue em expansão, conforme destacado pelo Instituto Pet Brasil (IPB). O setor apresenta mudanças progressivas nos hábitos das famílias, com aumento nas vendas e destaque para o comércio eletrônico e serviços especializados para animais de estimação.

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
- [Funcionalidades do Sistema](#funcionalidades-do-sistema)
- [Contribuição](#contribuição)
- [Contato](#contato)

---

## Visão Geral

O Sistema de Gerenciamento de Pet Shops e Clínicas Veterinárias foi criado para otimizar o controle de informações essenciais do setor pet, permitindo que cada unidade gerencie seus próprios dados de forma independente e eficiente. O sistema opera via linha de comando, proporcionando simplicidade, leveza e fácil adaptação a diferentes ambientes.

---

## Tecnologias Utilizadas

- Node.js (CLI)
- TypeScript
- Jest (testes unitários)

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
````
---

## Execução
```sh
npm start
# ou
yarn start
```

---

# Acesso:
Abra o navegador e acesse http://localhost:3000

---

# Estrutura do Projeto
```sh
petshop-cli/
  src/
    clientes/
    produtos/
    servicos/
    main.ts
  tests/
  [package.json](http://_vscodecontentref_/0)
  tsconfig.json
```

---

## Estrutura do Projeto

- **clientes/**: Gerenciamento de clientes.
- **produtos/**: Gerenciamento de produtos.
- **servicos/**: Gerenciamento de serviços.
- **main.ts**: Ponto de entrada do sistema.

---

## Padrões de Desenvolvimento

- **CLI:** Todo o sistema é operado por linha de comando, sem interface gráfica.
- **Banco de Dados em Memória:** Cada unidade possui sua própria base de dados, garantindo independência e segurança dos dados.
- **Testes:** Utilização de Jest para testes unitários das principais funcionalidades.

---

## Funcionalidades do Sistema

- Cadastro, atualização e consulta de clientes
- Cadastro, atualização e consulta de produtos
- Cadastro, atualização e consulta de serviços
- Relatórios e análises básicas do perfil de consumo

---

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome`)
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Push para o branch (`git push origin feature/nome`)
5. Abra um Pull Request

---

Desenvolvido para o setor pet brasileiro - 2025  
Documentação criada para uso interno e treinamento de colaboradores.
