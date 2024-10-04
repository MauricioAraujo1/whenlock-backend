<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

<p align="center" dir="auto">⚔Bem-Vindo ao Whenlock-API⚔</p>

<h2>💻 Descrição do Projeto</h2>

Nesta aplicação, teremos o back-end de um serviço que gerencia a cadastro, edição e exclusão de usuários.
<h2>🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas na construção do projeto:

- [ ] [NestJS]
- [ ] [PrismaIO]
- [ ] [PostgreSQL]
- [ ] [TypeScript]
- [ ] [NodeJS]

<h2>🚀 Como executar o projeto</h2>

<span class="pl-c"><span class="pl-c">#</span> Clone este repositório</span>

```
https://github.com/MauricioAraujo1/whenlock-backend.git
```

<h2>🧭 Instalação</h2>

<span class="pl-c"><span class="pl-c">#</span>Nessa aplicação tá sendo o utilizado o PNPM, instale ele globalmente no Powershell de administrador da sua máquina com o seguinte comando:</span>

```
$ npm install -g pnpm
```

<span class="pl-c"><span class="pl-c">#</span>Após instalado o pnpm, acesse a pasta do projeto no terminal/cmd e execute os seguintes comandos:</span>

```
$ cd whenlock-backend
$ pnpm install
```
<span class="pl-c"><span class="pl-c">#</span>Após instalado das dependencias pnpm, gere um arquivo .env e passe o caminho do banco postgresql, crie ele no pgAdmin4, segue ai o exemplo do .env</span>
<span class="pl-c"><span class="pl-c">#</span>se precisar, só apague a migration sql, e crie novamente usando: pnpm prisma migrate dev, ou faça da sua vontade :)</span>

```
$ DATABASE_URL="postgresql://name_user:password@localhost:5432/nome_do_banco?schema=public"
```

<span class="pl-c"><span class="pl-c">#</span>Após instalado o pnpm, acesse a pasta do projeto no terminal/cmd e execute os seguintes comandos:</span>

```
$ cd whenlock-backend
$ pnpm install
```

<h2>Rodando a Aplicação Back-End</h2>

```bash

$ pnpm run start

# development
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

<h2>Rodando o Swagger na seguinte url:</h2>

```bash

$ http://localhost:3000/api
```

<h2>🤝 Suporte</h2> 
Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/MauricioAraujo1/whenlock-backend/issues).

---

## 👨‍💻 Autor

 <br>
<table>
  <tr>
    <td align="center">
      <a href="https://github.com/MauricioAraujo1">
        <img src="https://github.com/MauricioAraujo1.png" width="100px;" height="100px" alt="Foto do Mauricio no GitHub"/><br>
        <sub>
          <b>MAURICIO ARAUJO</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
</table>
<hr>

* LinkedIn: [@mauricioarj1](https://linkedin.com/in/mauricioarj1)

