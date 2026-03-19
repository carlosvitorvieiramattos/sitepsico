# Configuração de Produção - Site Psicologia

## 📋 O que foi configurado

1. **Build de Produção** ✅
   - Arquivos otimizados gerados em: `dist/site-psicologia/`
   - Tamanho: ~58KB (comprimido)

2. **Servidor Node.js** ✅
   - Arquivo `server.js` criado
   - Express configurado para servir arquivos estáticos
   - Roteamento Angular funcionando corretamente

3. **Scripts NPM** ✅
   - `npm run prod` - Build + Servidor (tudo em um comando)
   - `npm run server` - Apenas roda o servidor (após build)
   - `npm run build` - Apenas gera o build

## 🚀 Como usar

### Desenvolvimento (com reloading automático):
```bash
npm start
```

### Produção (servidor na web):
```bash
npm run prod
```
Abre automaticamente em: `http://localhost:3000`

Ou apenas reiniciar o servidor se já tem o build:
```bash
npm run server
```

## 🌐 Deploy na Web

Para colocar em produção real:

1. **Fazer o build:**
   ```bash
   npm run build
   ```

2. **Usar um serviço de hosting:**
   - **Vercel**: Conecte seu GitHub e faça deploy automático
   - **Netlify**: Arraste a pasta `dist/` ou conecte GitHub
   - **Heroku**: Use o `server.js` fornecido
   - **AWS/Azure**: Configure com Node.js

3. **Variável de ambiente (PORT):**
   ```bash
   PORT=8080 npm run server
   ```

## 📁 Estrutura de produção

```
dist/site-psicologia/
├── index.html
├── main-*.js         (Bundle compilado)
├── styles-*.css      (Estilos compilados)
└── assets/           (Imagens e recursos)
```

## ✅ Status

- ✅ Build de produção concluído
- ✅ Servidor Express configurado
- ✅ Roteamento Angular funcionando
- ✅ Pronto para deployment

Próximo passo: Execute `npm run prod` para ver o sistema funcionando em modo produção!
