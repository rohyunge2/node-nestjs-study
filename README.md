<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

==================== nest js ====================

1. nestjs 설치
npm i -g @nestjs/cli

2. nest 프로젝트 생성
nest new [프로젝트명]

3. npm 선택

4. tsconfig.json 편집
"esModuleInterop": true 추가 = ES6 모듈 사양을 준수하여 CommonJS 모듈을 가져올 수 있게

5. hot reload 설정

# package.json

"scripts": {
  "start:dev-backup": "nest start --watch",
  "start:dev": "nest build --webpack --webpackPath webpack-hmr.config.js --watch",    
  ...
},

6. Configuration 설정
 - ConfigModule 사용
npm i --save @nestjs/config
 - app.module.ts 에서 사용할 모듈 가져오기 
import { ConfigModule } from '@nestjs/config';
AppModul 에서 사용할 모듈 가져오기: ConfigModule.forRoot({ isGlobal: true }) 를 imports: [] 배열 안에 입력
 - .env, .env.development, .env.production 파일 생성
    ㄴ 환경 별로 파일을 만들어두면 애플리케이션 nest.js에서 환경(development, production)에 맞춰 알맞은 변수 파일을 읽어준다.
    ㄴ 배포할 때 .env파일들을 포함하고 싶다면 nest-cli.json파일에 option을 추가해줘야 한다.

7. ConfigService 설정
 - app.module.ts 에서 사용할 모듈 가져오기 
import { ConfigModule, ConfigService } from '@nestjs/config';
providers: [AppService, ConfigService],

8. Logger(미들웨어)는 일단 스킵

9. module, service, controller 생성 (명령어 입력하니 Import에 Update까지 알아서됨)
module 생성: nest generate module users(모듈 이름) -> 생성 모듈은 app.module.ts에 import해줘야 한다.
service 생성: nest generate service users(서비스 이름) -> 생성 서비스는 생성한 모듈(users.module.ts)에 import 해줘야 한다.
controller 생성: nest generate controller users(컨트롤러 이름) -> 생성 컨트롤러는 생성한 모듈(users.module.ts)에 import 해줘야 한다.

10. controller 세팅
get, post, req, res 등 필요한 데코레이터(ex. @Get @Post)를 가져와서 import.
service를 사용하려면 constructor(private usersService: UsersService) {} 처럼 의존성 주입을 해야 한다.

11. dto 생성
주로 생성 모듈(users) 하위 경로에 DTO 폴더를 생성하여 관리한다.
파일 이름 예시: join.request.dto.ts
nest.js에선 DTO 생성 시 interface 보다 class 사용을 선호한다. class의 경우 컴파일 이후에도 사라지지 않아 type 검증에 활용할 수 있기 때문이다.

12. swagger 설정
npm install --save @nestjs/swagger
추후 서술

13. 

==================== MongoDB 세팅 ====================
1. MongoDB 설치
( GUI : Mongo Compass 사용 )

2. nodejs 연동
npm install mongodb
npm install mongoose
npm install --save @nestjs/mongoose
 - mongoose = mongoDB ORM( NoSQL에서는 ODM 이라고 함 )