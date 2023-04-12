# Tecnologias
[Next.js](https://nextjs.org/docs/getting-started)
[Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

# jest 

### _test_

A `_tests_` pasta em um projeto Next.js normalmente contém arquivos de teste que são usados ​​para testar a funcionalidade de seu aplicativo. Esses testes podem ser usados ​​para garantir que seu código esteja funcionando conforme o esperado e para detectar possíveis bugs ou erros antes de serem implantados na produção.

Next.js usa a estrutura de teste Jest por padrão, que é uma biblioteca de teste JavaScript popular. A _tests_pasta é onde você pode criar arquivos de teste e organizá-los de uma forma que faça sentido para seu aplicativo.

Em geral, é uma boa prática escrever testes para seu código para garantir que ele esteja funcionando conforme o esperado e detectar quaisquer erros no início do processo de desenvolvimento. Isso pode ajudá-lo a evitar problemas e melhorar a qualidade geral do seu aplicativo.

### .babelrc


O arquivo geral `.babelrc` uma parte importante da cadeia de ferramentas usada pelo Next.js para compilar e otimizar o código JavaScript do seu aplicativo, e é um arquivo essencial para entender se você deseja personalizar o comportamento do compilador Babel em seu projeto.

```javascript
{  
    "presets": ["next/babel"] 
}
```
Suporte para recursos JavaScript modernos: a `next/babel` predefinição inclui plug-ins que permitem usar recursos JavaScript modernos, como `async/await`, `object rest/spreade` e `dynamic imports`, mesmo que ainda não sejam totalmente suportados por todos os navegadores.

Divisão automática de código: Next.js usa importações dinâmicas para dividir automaticamente seu código em partes menores, o que pode melhorar o desempenho de seu aplicativo reduzindo a quantidade de código que precisa ser carregado pelo navegador.

Renderização automática do lado do servidor: o Next.js inclui uma estrutura de renderização integrada do lado do servidor que permite renderizar seu aplicativo no servidor e enviar o HTML pré-renderizado para o cliente. A `next/babel` predefinição inclui plug-ins que habilitam essa funcionalidade, permitindo que você use o `getInitialProps` método e outras APIs específicas do Next.js.

## Erros

 #### Jest não pode carregar o arquivo SVG
 
   
    
        yarn add jest-svg-transformer 
    
 <br >


        <!-- no arquivo jest.config.js adicionar  -->
            moduleNameMapper: {
                "^.+\\.svg$": "jest-svg-transformer",
            }
    

Referência [stack overflow](https://stackoverflow.com/questions/58603201/jest-cannot-load-svg-file)

## ERRO Image is missing required "src"
o corre quando o **src** não tem imagem 