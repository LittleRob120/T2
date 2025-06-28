# Sistema WB - Interface Gráfica (Frontend)

Bem-vindo à documentação oficial do projeto de interface gráfica do Sistema WB. Este projeto foi desenvolvido para o Grupo World Beauty (WB) com o objetivo de modernizar e facilitar o uso do sistema por meio de uma interface web responsiva, intuitiva e acessível em qualquer dispositivo.

---

## 📋 Sumário

- [Visão Geral](#visão-geral)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Executar o Projeto](#como-executar-o-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Padrões de Desenvolvimento](#padrões-de-desenvolvimento)
- [Funcionalidades das Telas](#funcionalidades-das-telas)
- [Customização e Temas](#customização-e-temas)
- [Contribuição](#contribuição)
- [Contato](#contato)

---

## Visão Geral

O Sistema WB foi projetado para atender todas as franquias do Grupo World Beauty, proporcionando uma experiência moderna e eficiente para os usuários. A interface gráfica (GUI) foi construída com foco em usabilidade, responsividade e facilidade de navegação, garantindo que qualquer colaborador, independente do dispositivo, consiga operar o sistema sem dificuldades.

---

## Tecnologias Utilizadas

- React 18 (componentes de classe)
- TypeScript
- Bootstrap 5 (responsividade e design moderno)
- Jest + Testing Library (testes unitários)

> **Observação:** O projeto utiliza Bootstrap para estilização e responsividade.

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

**Acesso:**  
Abra o navegador e acesse [http://localhost:3000](http://localhost:3000)

---

## Estrutura do Projeto

```
T2/
  .gitignore
  package.json
  tsconfig.json
  README.md
  public/
    favicon.ico
    index.html
    logo192.png
    logo512.png
    manifest.json
    robots.txt
  src/
    index.css
    index.tsx
    logo.svg
    react-app-env.d.ts
    reportWebVitals.ts
    setupTests.ts
    componentes/
      barraNavegacao.tsx
      formularioCadastroCliente.tsx
      listaCliente.tsx
      roteador.tsx
```

- **componentes/**: Todos os componentes React de cada tela e funcionalidade.
- **index.tsx**: Ponto de entrada da aplicação.
- **index.css**: Estilos globais e configuração do Bootstrap.
- **public/**: Arquivos estáticos e HTML base.

---

## Padrões de Desenvolvimento

- **Componentes de Classe:**  
  Todos os componentes React são implementados como classes, conforme padrão definido pela equipe WB.
- **Responsividade:**  
  Layout adaptável para desktop, tablets e celulares usando Bootstrap.
- **Design Moderno:**  
  Uso de cores, gradientes e ícones para uma experiência agradável.
- **Sem Backend:**  
  Este projeto é um pré-projeto de interface, sem integração com banco de dados ou APIs.

---

## Funcionalidades das Telas

- **Home:**  
  Tela inicial com navegação para Clientes e Cadastros.

- **Clientes:**
  - Atualizar dados do cliente
  - Excluir cliente (em desenvolvimento)
  - Listagens especiais (em desenvolvimento)

- **Cadastros:**
  - Cadastro de Cliente (formulário)

---

## Customização e Temas

O tema principal utiliza tons claros, podendo ser facilmente alterado no arquivo `index.css` ou diretamente nos componentes usando as propriedades de tema do Bootstrap.

---

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nome`)
3. Commit suas alterações (`git commit -am 'Adiciona nova feature'`)
4. Push para o branch (`git push origin feature/nome`)
5. Abra um Pull Request

---

Desenvolvido para o Grupo World Beauty (WB) - 2025  
Documentação criada para uso interno e treinamento de colaboradores.
