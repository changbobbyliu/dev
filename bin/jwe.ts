import fs from "fs";
import * as jose from "jose";
import hkdf from "@panva/hkdf";

const sampleJWE =
  "eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..lgz-_7jik1q-ZIRg._W3EIEr5dQgUYFWY5XaoPeQ2uuUD9aF2jVVu8dQisuex6SjdsKanmEO0gosaXcCGHqnq9HuKeeixetAjGSFDjWcVS-J-kvWtp82kJ37tDD2mEmV5B2Yekt6EHc1YhaVFLF0b7VSXj0lw4rps-Um0wvUilb1Om7fw3KWiEoSeimECYeRAC_90V0_VHi-1rmayyi-tqAuaUWO8hJmNQHRv6A5WcSW17PvIs5srPwPmmfTiw61knAaCrdbB-YksrKiYL2f1SQLO6L37mopsiYveOt2WqLGjpgYOYOFONaeFvga4Y62aatNgBoJ4L93JzNZBE0D4dtM0XakCj0PU5CJ0XSTZSGoEd9P2E6k.Kc1cg-YAmIKDdTL6f6vp_w";

export async function decryptJWE(jweToken: string) {
  const secretRaw = fs
    .readFileSync(".env", "utf8")
    .split("\n")
    .find((line) => line.startsWith("NEXTAUTH_SECRET="))
    ?.split("NEXTAUTH_SECRET=")[1];
  if (!secretRaw) {
    throw new Error("Could not find NEXTAUTH_SECRET in .env");
  }
  const encryptionSecret = await hkdf(
    "sha256",
    secretRaw,
    "",
    "NextAuth.js Generated Encryption Key", // DO NOT CHANGE THIS, or encryption will break
    32
  );

  const result = await jose.jwtDecrypt(
    !!jweToken ? jweToken : sampleJWE,
    encryptionSecret,
    {
      clockTolerance: 15,
    }
  );

  console.log("result:", result);
}
