import { Subject } from "rxjs";
import { scan } from "rxjs/operators";
import { Item } from "../protos/action";

export const messageItem$ = new Subject<Item>();
export const messageList$ = messageItem$.pipe(
    scan((current: Item[], newItem: Item) => [...current, newItem], [])
);
