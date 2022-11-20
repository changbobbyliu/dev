import e from "enquirer";
import { options, commandMap } from "./commands";

async function main() {
  const answers = await e.prompt<{ choice: NSBin.TOption }>({
    type: "autocomplete",
    name: "choice",
    message: "What do you want to do?",
    choices: Array.from(options),
  });

  const command = commandMap.get(answers.choice);
  if (!command) throw new Error("Invalid command");
  await command.exec();
  console.log("");
}

(async () => {
  while (true) await main();
})().catch((error) => console.log("error:", error));
