# FSW Trips
### Sistema de reserva de viagens

**FSW Trips** é um sistema de reserva de viagens que oferece uma interface amigável para procurar e reservar acomodações, como hotéis e pousadas, além de realizar pagamentos seguros com Stripe e autenticar usuários via Google.

## Funcionalidades

- **Navegação de Acomodações**: Explore uma variedade de hotéis e pousadas, com possibilidade de filtragem por categorias.
- **Carrinho de Compras**: Adicione hospedagens ao carrinho e gerencie suas preferências de viagem antes de confirmar a reserva.
- **Gerenciamento de Pedidos**: Visualize e acompanhe o status dos seus pedidos de reserva diretamente no sistema.
- **Pagamentos Seguros**: Integração com Stripe para uma experiência de pagamento rápida e segura.
- **Autenticação Simplificada**: Login com Google para maior comodidade e segurança dos usuários.

## Tecnologias Utilizadas

- **Linguagem**: TypeScript
- **Front-end**: React.js, Next.js
- **Back-end**: Node.js com Next.js API routes
- **Banco de Dados**: PostgreSQL
- **ORM**: Prisma ORM
- **Estilização**: Tailwind CSS
- **Pagamentos**: Stripe API
- **Autenticação**: Google OAuth

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Joclelsonr/fsw-trips-nextjs.git
   cd fsw-trips-nextjs

2. Instale as dependências do projeto:
   ```bash
   npm install

3. Configure as variáveis de ambiente:
   - **Stripe**: Configuração para chaves da API.
   - **Google OAuth**: Configuração das credenciais para autenticação.
   - **Banco de Dados**: Configure a URL de conexão do PostgreSQL.

4. Execute as migrações do banco de dados com Prisma:
   ```bash
   npx prisma migrate dev

5. Inicie o servidor:
   ```bash
   npm run dev

## Como Usar

1. **Navegue pelas Acomodações**: Utilize a tela inicial para explorar as opções de hotéis e pousadas.
2. **Adicionar ao Carrinho**: Escolha os quartos e datas desejados, adicionando-os ao seu carrinho de compras.
3. **Gerenciar Pedidos**: Após a compra, acompanhe o status dos seus pedidos de reserva.
4. **Pagamento Seguro**: Utilize Stripe para realizar o pagamento de maneira rápida e confiável.
5. **Autenticação com Google**: Faça login usando sua conta do Google para uma experiência personalizada e segura.
