import { say, request } from "./util";
import answer from "the-answer";

const opt = {
    greet: say,
    request,
    logger: (info) => console.log(`the output: ${answer}`)
  };

export default opt;
