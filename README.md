# 🥤 Gulp boilerplate com Sass 

![sass logo](https://user-images.githubusercontent.com/10498583/31125541-e2a732e6-a848-11e7-959d-7d7b0c138124.jpg)
![gulp logo](https://user-images.githubusercontent.com/10498583/31125542-e2a78b88-a848-11e7-8ac5-c396f46e811f.jpg)

## Sumário

- [Sobre](#sobre-o-projeto)
   - [Recursos](#recursos)    
- [Como executar o projeto](#como-executar-o-projeto)
   - [Pré-requisitos](#pre-requisitos)
   - [Instalação](#instalacao) 
   - [Estruturas dos arquivos](#estruturas-dos-arquivos)
   - [Tarefas](#tarefas)          
- [Contribuição](#contribuicao)
  - [Como contribuir para o projeto](#como-contribuir-para-o-projeto) 
- [Licença](#licenca)
- [Changelog](#changelog) 

## :green_book: Sobre o projeto <a name = "sobre-o-projeto"></a>

Boilerplate do Gulp 4 para desenvolvimento local com algumas ferramentas já configuradas. Fornece estrutura de diretórios e arquivos para auxiliar os desenvolvedores
front-end a iniciarem seus projetos.

### Recursos <a name = "recursos"></a> :wrench:

- Estrutura de pastas baseada na [7-1 architecture pattern](https://github.com/KittyGiraudel/sass-boilerplate).
- Mixins para consultas de mídia e outros estilos, tais como: reset, tipografia, grid.
- Compilar arquivos SASS com a dependência [gulp-sass](https://www.npmjs.com/package/gulp-sass)
- Adicionar prefixos proprietários aos arquivos CSS com [autoprefixer](https://www.npmjs.com/package/autoprefixer)
- Minificar arquivos CSS com [cssnano](https://www.npmjs.com/package/cssnano)
- Otimizar imagens .jpg e .png com [gulp-imagemin](https://www.npmjs.com/package/gulp-imagemin)
- Gerar imagens no formato .avif com [gulp-avif](https://www.npmjs.com/package/gulp-avif)
- Gerar imagens no formato .webp com [gulp-webp](https://www.npmjs.com/package/gulp-webp)
- Adicionar mais mémoria ao processo de compilação no Gulp com [gulp-cache](https://www.npmjs.com/package/gulp-cache)
- Previnir o encerramento da execução por causa de erros das dependências com [gulp-plumber](https://www.npmjs.com/package/gulp-plumber) 
- Adicionar Sourcemaps aos arquivos SASS e Javascript com [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps)
- Minificar arquivos Javascript com [gulp-terser](https://www.npmjs.com/package/gulp-terser)
- Transpila arquivos Javascript para maior compatibilidade com navegadores antigos com [gulp-babel](https://www.npmjs.com/package/gulp-babel)
- Sincroniza o navegador com as mudanças que ocorrem no projeto com [browser-sync](https://www.npmjs.com/package/browser-sync)
- Junta arquivos Javascript em um só com [gulp-concat](https://www.npmjs.com/package/gulp-concat)

---

## :computer: Como executar o projeto <a name = "como-executar-o-projeto"></a>

Para Iniciar o projeto, faça o clone desse repositório ou baixe de forma local em seu sistema.

### Pré-requisitos <a name = "pre-requisitos"></a>

Antes de começar, você precisa instalar, em sua máquina, as seguintes ferramentas: [Git](https://git-scm.com/), [Node.js](https://nodejs.org/en/) 
e um editor de código, como [VSCode](https://code.visualstudio.com/).

### Instalação <a name = "instalacao"></a>

No terminal do git bash ou no terminal integrado do Visual Studio Code use os seguintes comandos:

```bash

# Verifique se o Nodejs foi instalado corretamente.
$ node -v 

# Verifique se o NPM foi instalado corretamente.
$ npm -v

# Instale o Gulp Cli globalmente para que esteja disponível em todos os projetos, para todos os usuários do computador.
$ npm i -g gulp-cli

# Verifique se o Gulp foi instalado globalmente.
$ gulp -v

# Entre no seu diretório de projeto
$ cd pasta-projeto

# Clone este repositório.
$ git clone https://github.com/carla-santos/gulp-boilerplate-sass.git

# Instale as dependências.
$ npm install

# Execute a aplicação.
$ gulp dev

```

### Estruturas dos arquivos <a name = "estruturas-dos-arquivos"></a>

Comece o desenvolvimento no diretório **src**. Ao salvar automaticamente, irá gerar o diretório build contendo todos os seus arquivos (CSS, JS, HTML e imagens) 
otimizados e prontos para produção.

### Tarefas <a name = "tarefas"></a>

Você pode executar as tarefas abaixo:

- `gulp dev` (tarefa padrão): Cria no diretório **build** todos os arquivos otimizados e é iniciado um servidor local para execução do projeto.
- `gulp img`: Otimiza de forma paralela todos os formatos de imagens.
- `gulp js`: Adiciona sourcemaps, concatena, transpila e minifica arquivos Javascript.
- `gulp css`: Compila SASS, adiciona sourcemaps, autoprefixer e minifica arquivos CSS.
- `gulp images`: Otimiza imagens .jpg e .png.
- `gulp versionWebp`: Converte imagens para o formato .webp.
- `gulp versionAvif`: Converte imagens para o formato .avif.

---

## 👨‍💻 Contribuição <a name = "contribuicao"></a>

Primeiramente, agradeço a sua visita, qualquer contribuição que você fizer é muito bem-vindo :D.

### 💪 Como contribuir para o projeto <a name = "como-contribuir-para-o-projeto"></a>

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b meu-recurso`.
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "Recurso: meu novo recurso"`.
4. Envie as suas alterações: `git push -u origin meu-recurso`.

---

## :pencil: Licença <a name = "licenca"></a>  
 
O projeto está sob a licença MIT. Para saber mais, acesse o arquivo [LICENÇA](https://github.com/carla-santos/gulp-boilerplate-sass/blob/main/LICENSE).

---

## :dizzy: Changelog <a name = "changelog"></a>  

### 1.1.0
- Lançamento inicial<br>
15.09.2022
