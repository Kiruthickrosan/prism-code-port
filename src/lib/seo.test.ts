import { describe, expect, test } from "bun:test";
import { pageHead, seoPages } from "./seo";

describe("canonical portfolio identity", () => {
  test("the homepage canonical uses the requested production URL", () => {
    expect(pageHead("/").links).toEqual([
      { rel: "canonical", href: "https://kiruthickrosanportfolio.vercel.app/" },
    ]);
  });

  test("all eight public pages self-reference the requested production origin", () => {
    const paths = Object.keys(seoPages) as Array<keyof typeof seoPages>;
    expect(paths.length).toBe(8);
    for (const path of paths) {
      expect(pageHead(path).links[0]?.href).toBe(`https://kiruthickrosanportfolio.vercel.app${path}`);
    }
  });

  test("Person schema uses the personal profile, not the repository", () => {
    const scripts = pageHead("/").scripts;
    expect(scripts?.length).toBe(1);
    const person = JSON.parse(scripts?.[0]?.children ?? "{}")["@graph"][0];
    expect(person.url).toBe("https://kiruthickrosanportfolio.vercel.app/");
    expect(person.sameAs).toContain("https://github.com/Kiruthickrosan");
    expect(person.sameAs).not.toContain("https://github.com/Kiruthickrosan/prism-code-port");
  });
});