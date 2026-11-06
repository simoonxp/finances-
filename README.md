# Casal Finanças

Orçamento a dois, em português, com tema preto e branco e layout pensado para iPhone.
Duas pessoas entram com e-mail e senha e veem o mesmo orçamento no computador e no celular,
com atualização ao vivo, aba **Pessoas** (quem está conectado, última entrada e registro de atividades)
e backup em JSON.

## Como funciona

- **Site estático** em JavaScript puro (sem framework e sem etapa de build): `index.html`, `app.js`, `styles.css`.
- **Supabase** guarda os dados (Postgres), cuida do login (e-mail e senha) e envia as mudanças ao vivo (Realtime).
- **Acesso restrito**: as regras do banco (RLS, em `supabase/schema.sql`) só deixam entrar as contas
  listadas na tabela `allowed_people`. Cadastros novos ficam desligados no painel do Supabase.
- `config.js` tem a URL do projeto e a chave *publishable*, que foi feita para ficar no navegador.
  Nenhuma chave secreta fica neste repositório.

## Montar o seu

1. Crie um projeto no [Supabase](https://supabase.com) (plano gratuito).
2. No *SQL Editor*, rode `supabase/schema.sql` depois de trocar os dois e-mails de exemplo pelos reais.
3. Em *Authentication → Users*, crie os dois usuários com e-mail e senha (marque *Auto Confirm User*).
   Em *Authentication → Sign In / Providers*, desligue *Allow new users to sign up*.
4. Coloque a URL e a chave *publishable* do projeto em `config.js`.
5. Publique a pasta como site estático (por exemplo, Cloudflare Pages ligado a este repositório,
   sem comando de build e com a raiz como diretório de saída).

## Backup e importação

O botão **Backup** baixa um JSON. A importação só **adiciona** o que falta, preserva os IDs
e nunca apaga nem altera um registro que já exista.

## Privacidade

Não coloque neste repositório e-mails de pessoas, backups com dados reais nem chaves secretas
(`service_role` ou `secret`).

<!-- Pequena atualização do projeto -->
