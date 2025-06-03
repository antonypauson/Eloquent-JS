import {parse as parseINI} from "ini";

console.log(parseINI(
`name=Vasilis
[address]
city=Tessaloniki
area=suburban
phone=0000
[friend]
name=Antony
place=Russia
phone=911`
))
