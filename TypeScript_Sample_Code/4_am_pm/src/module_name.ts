//Mainモジュールをインポート
import { helloMessage as message, TsVersion as version } from "./Main";
message(); //結果：hello,TypeScript!
console.log(version.getVersion()); //結果：4.9.5
