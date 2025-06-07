export default function skipSpace(string) {
  let skippable = string.match();
  return string.slice(skippable[0].length);
}


console.log(skipSpace("a # one\n   # two\n()"));
