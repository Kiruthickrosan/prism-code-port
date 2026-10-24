import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { pageHead, seoPages } from "./seo";

describe("canonical portfolio identity", () => {
  test("the homepage canonical uses the requested production URL", () => {
    assert.deepEqual(pageHead("/").links, [
      { rel: "canonical", href: "https://kiruthickrosanportfolio.vercel.app/" },
    ]);
  });

  test("all eight public pages self-reference the requested production origin", () => {
    const paths = Object.keys(seoPages) as Array<keyof typeof seoPages>;
    assert.equal(paths.length, 8);
    for (const path of paths) {
      assert.equal(pageHead(path).links[0]?.href, `https://kiruthickrosanportfolio.vercel.app${path}`);
    }
  });

  test("Person schema uses the personal profile, not the repository", () => {
    const scripts = pageHead("/").scripts;
    assert.equal(scripts?.length, 1);
    const person = JSON.parse(scripts?.[0]?.children ?? "{}")["@graph"][0];
    assert.equal(person.url, "https://kiruthickrosanportfolio.vercel.app/");
    assert.ok(person.sameAs.includes("https://github.com/Kiruthickrosan"));
    assert.ok(!person.sameAs.includes("https://github.com/Kiruthickrosan/prism-code-port"));
  });
});