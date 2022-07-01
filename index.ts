import { AnalysisTools } from "./src/AnalysisTools";
import { AnalysisToolsEventConsumer } from "./src/AnalysisToolsEventConsumer";
import { BankAccountService } from "./src/BankAccountService";
import { ConcreteEventBus } from "./src/ConcreteEventBus";

const eventBus = new ConcreteEventBus();
const bankService = new BankAccountService(eventBus);
const tool1 = new AnalysisToolsEventConsumer(new AnalysisTools());
eventBus.subscribeTo("charge" ,tool1);
eventBus.subscribeTo("withdraw", tool1);
eventBus.subscribeTo("create", tool1);

bankService.create();
bankService.charge(1, 10);
bankService.create();
bankService.withdraw(1, 14);
