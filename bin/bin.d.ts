declare namespace NSBin {
  type TOption = typeof import("./commands").options[number];

  type TCommand = {
    name: TOption;
    description: string;
    exec: () => Promise<void>;
  };
}
