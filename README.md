// need to check product tag issue . issue is the size and colors all tags retrun

npm run migration:generate -- src/database/migrations/social

npm run migration:run

design pattern

//MiddlewareConsumer

//Singleton Pattern
@Injectable()
export class SingletonService {
private readonly config: ConfigService;

constructor(configService: ConfigService) {
this.config = configService;
}

getConfigValue(key: string): string {
return this.config.get(key);
}
}

//Dependency Injection Pattern
@Injectable()
export class SomeService {
  constructor(private readonly otherService: OtherService) {}
  
  async doSomething() {
    return this.otherService.someMethod();
  }
}
