import e from "enquirer";
import { decryptJWE } from "./jwe";

const options = ["jwe", "exit"] as const;
type TOption = typeof options[number];

class Command {
  constructor(
    public name: TOption,
    public description: string,
    public exec: () => Promise<void>
  ) {}
}

const commandMap: { [key: string]: Command } = {
  jwe: new Command("jwe", "Decrypt a JWE token", async () => {
    const { jweToken } = await e.prompt<{ jweToken: string }>({
      type: "input",
      name: "jweToken",
      message: "Enter a JWE token to decrypt",
    });
    await decryptJWE(jweToken);
  }),
  exit: new Command("exit", "Exit the program", async () => {
    process.exit(0);
  }),
};

async function main() {
  console.table(Object.values(commandMap), ["name", "description"]);

  const answers: { choice: TOption } = await e.prompt({
    type: "autocomplete",
    name: "choice",
    message: "What do you want to do?",
    choices: Array.from(options),
  });

  const command = commandMap[answers.choice];
  await command.exec();
  console.log("\n\n");
}

(async () => {
  while (true) {
    await main();
  }
})().catch((error) => console.log("error:", error));
