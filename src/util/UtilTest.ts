import { Flow, run } from "./System";
import { Log } from "./Log";

export function utilTest() {
   var flowList: (Flow | string)[] = []
   flowList.push(new Log())
   flowList.push("sleep")
   flowList.push(new Log())
   run(flowList)
}