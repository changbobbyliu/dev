import { execSync } from "child_process";
import { command as jweCommand } from "./jwe";

export const options = ["jwe", "run", "exit"] as const;

export const commands: NSBin.TCommand[] = [
  jweCommand,
  {
    name: "run",
    description: "Run a command",
    exec: async () => {
      const stdout = execSync("ls -la", { encoding: "utf-8" });
      console.log(stdout);
    },
  },
  {
    name: "exit",
    description: "Exit",
    exec: async () => {
      process.exit(0);
    },
  },
];

export const commandMap = commands.reduce((acc, command) => {
  acc.set(command.name, command);
  return acc;
}, new Map<NSBin.TOption, NSBin.TCommand>());
