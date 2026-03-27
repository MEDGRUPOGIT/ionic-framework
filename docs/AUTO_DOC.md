# Documentação de Manutenção — Fork do Ionic Framework (MEDGRUPOGIT)

Este repositório é um fork do Ionic Framework adaptado e mantido pelo MEDGRUPO, com integrações, estilos e processos internos. Ele serve como base para o design system e componentes usados em aplicações da organização (ex.: med-components), preservando compatibilidade com os frameworks Angular, React e Vue.

## Propósito e Escopo
- Fornecer um conjunto de Web Components (Ionic Core) e bindings para frameworks (Angular, React, Vue) com customizações do MEDGRUPO.
- Manter um design system interno (Templários) com temas, tokens, guidelines e Storybook.
- Sincronizar periodicamente com o repositório oficial `ionic-team/ionic-framework`, aplicando um fluxo de validação e liberação controlado.
- Entregar pacotes prontos para consumo interno, com pipeline de build, testes e validação visual.

## Regras de Negócio e Governança
- Branches principais (README.md):
  - `master`: branch de destino final; contém a versão usada por `med-components`.
  - `Release-Branch`: ramificação de estabilização para alterações internas antes de irem à `master`.
  - Branch de sincronização com o Ionic Team: atualizada automaticamente 2x ao dia (workflow `.github/workflows/repo-sync.yml`). O nome pode variar (ex.: `sync`, `sync-new`).
- Sincronização automática (repo-sync.yml):
  - Agenda: cron `00 00,12 * * *` (duas vezes por dia, 00h e 12h UTC).
  - Fonte: `ionic-team/ionic-framework` (branch `main`) → branch de sync neste fork.
- Política de atualização (ADRs em `core/@templarios/docs`):
  - ADR-01: Não dar suporte completo aos Web Components no contexto Ionic 1, devido a restrições de estilo/host; correções em legado devem ocorrer localmente nas páginas do Ionic 1.
  - ADR-02: Atualizações do Ionic Framework serão sazonais (janela entre novembro e março), visando reduzir regressões recorrentes em mudanças superficiais do upstream; exceções para casos emergenciais.

## Arquitetura e Estrutura
- Monorepo gerenciado por Lerna (`lerna.json`), com pacotes sob `packages/*` e módulos de alto nível em `core/` e `angular/`.
- Módulos principais:
  - `core/` (Stencil + Web Components): Base do Ionic (`@ionic/core@5.6.3`) com fontes TypeScript, SCSS, temas, utilitários e testes. Inclui o design system interno “Templários”.
  - `angular/`: Integração Angular (módulos, providers, controladores e schematics).
  - `packages/angular-server/`: Suporte a SSR/Universal para Angular (`@ionic/angular-server`).
  - `packages/react/`, `packages/react-router/`: Binding para React e integração com React Router.
  - `packages/vue/`, `packages/vue-router/`: Binding para Vue e integração com Vue Router.
- Design System “Templários” (diretório `core/src/@templarios` e `core/@templarios`):
  - Styles (tokens, mixins, temas, páginas), enums, interfaces, ícones, utilitários.
  - Storybook (scripts `tp:*`), site e documentação próprios (`core/@templarios/website`, `core/@templarios/docs`).
- Theming e CSS:
  - Temas e funções SCSS em `core/src/themes/*` e `core/src/@templarios/styles/*`.
  - Uso intenso de CSS Variables e mixins do Ionic, com camadas para sobreposições de tema.
- Roteamento e bindings:
  - Router e utilitários em `core/src/components/router/*`.
  - Adaptações específicas para cada framework em seus respectivos pacotes (React/Vue/Angular).

Estrutura de diretórios (alto nível):
- `core/`: Stencil, testes, build, Storybook, Templários.
- `angular/`: código-fonte, scripts e schematics para Angular.
- `packages/`: bindings e integrações (SSR, React, Vue e roteadores).
- `docs/`: pacote de dados de documentação de API (não confundir com este arquivo).
- `.github/`, `.circleci/`: automações de CI/CD e sincronização com upstream.

## Tecnologias e Ferramentas
- Linguagens e build: TypeScript, Stencil (`@stencil/core`), Rollup, Sass/SCSS.
- Frameworks suportados: Angular, React, Vue (bindings dedicados).
- Testes: Jest, `stencil test` (spec/e2e), Puppeteer, testes de screenshot; Loki para regressão visual.
- Lint/Qualidade: TSLint, Stylelint.
- Monorepo e releases: Lerna, Conventional Changelog.
- Outras dependências relevantes: Ionicons, Resize Observer polyfill, RxJS/Zone.js (peer no Angular Server), Storybook.

## Banco de Dados
- Não se aplica. Este projeto é um conjunto de bibliotecas de UI e bindings. Não há persistência local.

## Fluxos de Build, Testes e CI/CD
- Raiz do monorepo (`package.json`):
  - `npm run build`: orquestra builds via `.scripts/build.js`.
  - Scripts de release: `release.dev`, `release.prepare`, `release` e `changelog` (conventional-changelog).
- Core (`core/package.json`):
  - `npm run build`: limpa, compila CSS, vendors (ex.: Swiper), executa `stencil build` com geração de docs (`dist/docs.json`) e copia loaders.
  - `npm run start`: build CSS + `stencil build --dev --watch --serve`.
  - `npm run test`, `test.spec`, `test.e2e`, `test.screenshot`, `test.screenshot.ci`.
  - Storybook/Templários: scripts `tp:*` para iniciar, construir e publicar site e estilos (exigem Node específico via NVM, ver scripts `tp:*`).
- Pacotes de bindings (`packages/*`, `angular/`):
  - Builds individuais com `npm run build`. Em desenvolvimento, usam `npm link` do `@ionic/core` (vide CircleCI).
- CI (CircleCI em `.circleci/config.yml`):
  - Jobs de build por módulo (core, angular, react, vue e roteadores), com cache e `npm link` entre pacotes.
  - Testes: lint, unit/spec, e2e (incluindo Angular test-app), screenshot/visual regression.
  - Atualização de screenshots apenas em `master` (job dedicado); em outras branches, rodagem sem atualizar base.
- Sincronização Upstream (GitHub Actions):
  - `.github/workflows/repo-sync.yml`: sincroniza 2x ao dia da `main` do Ionic Team para uma branch de sync neste fork.

## Como Rodar Localmente (resumo)
Pré-requisitos gerais: Node LTS, NPM, e NVM para alternar versões conforme scripts Templários.

- Build do monorepo (nível raiz):
  - `npm install`
  - `npm run build`

- Desenvolver em `core/`:
  - `cd core`
  - `npm install`
  - `npm run start` (serve/watch do Stencil)

- Executar Storybook e assets do Templários (core):
  - Necessita versões de Node específicas (ver `core/package.json` em scripts `tp:*`). Exemplos:
    - `npm run tp:start` (orquestra watch Stencil + Storybook + Sass)
    - `npm run tp:build` (constrói CSS/SCSS e core)

- Desenvolver bindings (ex.: React):
  - `cd core && npm install && sudo npm link`
  - `cd ../packages/react && npm install && sudo npm link @ionic/core && npm run build`
  - Fluxo semelhante para `react-router`, `vue`, `vue-router` e `angular` (vide comandos do pipeline no `.circleci/config.yml`).

## Padrões de Código e Estilo
- TypeScript: TSLint (regras em `tslint.json`, `tslint-ionic-rules`).
- SCSS/CSS: Stylelint (config em `core/.stylelintrc.yml`).
- Convenções de commit: Conventional Changelog (script `changelog` e CHANGELOG.md).
- Componentes Stencil: seguir padrões e estruturas de `core/src/components/*` e documentação do Ionic.
- Temas/Design System: reutilizar tokens, mixins e variáveis de `core/src/@templarios/styles/*` e `core/src/themes/*`.

## Processo de Sincronização Manual (resumo do README.md)
1. `git fetch upstream` (onde `upstream` aponta para `ionic-team/ionic-framework`).
2. `git checkout master` e `git pull`.
3. `git merge upstream/master --squash`.
4. `git commit -m "atualização da master"` e `git push --set-upstream origin master`.

Recomenda-se validar compatibilidade em `Release-Branch` antes de levar à `master`.

## Publicação e Versionamento
- Versionamento SemVer alinhado ao Ionic 5.x dos pacotes (`5.6.3` em `core`, `angular-server` etc.).
- Geração de changelog: `npm run changelog` (conventional-changelog perfil Angular).
- Scripts `release.*` no nível raiz apoiam o fluxo de release. A publicação pode envolver registries internos; alinhar com a guilda/DevOps.

## Riscos e Pontos de Atenção
- Convivência Ionic 1 e 5: estilos do Ionic 1 podem sobrescrever o host do Ionic 5 (ver ADR-01). Não suportar Web Components no Ionic 1 evita retrabalho/instabilidade.
- Atualizações frequentes do upstream podem introduzir mudanças estruturais em componentes com baixo ganho (ver ADR-02). Siga a janela sazonal e avalie impacto/regressões.
- Visual Regression: sempre validar screenshots e diferenças intencionais; atualizações de base apenas em `master` via job dedicado.
- Node versions: scripts Templários requerem versões específicas via NVM (ver `tp:*`).

## Referências Internas Úteis
- Fluxo de sincronização: `.github/workflows/repo-sync.yml`.
- Pipeline CI: `.circleci/config.yml`.
- Regras de contribuição: `.github/CONTRIBUTING.md`, `.github/PROCESS.md`, `.github/COMPONENT-GUIDE.md`.
- Design System: `core/src/@templarios/*`, `core/@templarios/*` (docs, website, scripts).
- Theming e estilos: `core/src/themes/*`, `core/src/css/*`, `core/src/@templarios/styles/*`.
- Router e navegação: `core/src/components/router/*`.
- Bindings por framework: `angular/src/*`, `packages/react*`, `packages/vue*`.

---
Dúvidas ou propostas de mudança de processo/arquitetura devem ser discutidas via PR e registradas em ADRs no diretório `core/@templarios/docs`.

