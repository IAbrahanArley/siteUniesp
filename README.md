# Projeto: Site UNIESP

Este repositório contém o código-fonte do front-end do projeto **Site UNIESP**, uma aplicação desenvolvida em React com integração utilizando o `json-server`.

---

## Arquitetura do Projeto

O projeto foi estruturado para seguir boas práticas de organização de código, separando componentes reutilizáveis, páginas e serviços. Abaixo, segue a estrutura:

### Estrutura de Diretórios
- **`src/assets`**: Contém arquivos estáticos como imagens, ícones e estilos globais.
- **`src/components`**: Componentes reutilizáveis, como a `NavBar` e `BannerAd`.
- **`src/hooks`**: Local reservado para hooks personalizados.
- **`src/pages`**: Contém as páginas principais do projeto, separadas por módulos.
  - **`admin`**: Páginas administrativas, como `AdminNoticias`, `CadastroNoticias` e `EditarNoticia`.
  - Demais páginas: `Login`, `Noticias`, `DpoLgpd`, entre outras.
- **`src/services`**: Centraliza a comunicação com o backend. Contém funções para chamadas à API simulada pelo `json-server`.
- **`data/db.json`**: Simulação do backend com dados de usuários e notícias, utilizado pelo `json-server`.
- **Arquivo principal**:
  - **`App.jsx`**: Gerencia as rotas da aplicação.
  - **`index.html` e `main.jsx`**: Configurações iniciais do projeto React.

---

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- Node.js 
- NPM ou Yarn
- `json-server` (simula o backend)

---

## Como Executar o Projeto

### 1. Clonar o Repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd site_uniesp
