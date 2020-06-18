# Protractor
Projeto para a linguagem Protractor

![Lint and tests](https://github.com/WilliamMega/curso-protractor-tat/workflows/Lint%20and%20tests/badge.svg)

## Pré-requisitos

É necessário que os seguintes sistemas estejam instalados para a execução do projeto.

- Node.js - (`12.16.3`) e NPM (`6.14.5`)
- Navegadores Google Chrome (`81.0.4044.138`) e Firefox (`76.0.1`)

## Instalação

Após clonar o projeto, acesse o diretório do mesmo e execute `npm install` para instalar as 
dependecências de desenvolvimento

## Executando os testes

Execute `npm run preteste:local && npm test` para executar os testes em modo _headless_ 
em ambos os navegadores Chrome e Firefox

### Executando os testes em um navegador específico

#### Chrome

Execute `npm run preteste:local && npm run teste:chrome` para executar os teste em modo _headless_
somente no navegador Chrome.

#### Firefox

Execute `npm run preteste:local && npm run teste:firefox` para executar os teste em modo _headless_
somente no navegador Firefox.

