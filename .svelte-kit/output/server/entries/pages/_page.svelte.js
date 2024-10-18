import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
import { W as WebVM } from "../../chunks/WebVM.js";
const diskImageUrl = "wss://disks.webvm.io/debian_large_20230522_5044875331.ext2";
const diskImageType = "cloud";
const printIntro = true;
const needsDisplay = false;
const cmd = "/bin/bash";
const args = ["--login"];
const opts = {
  // Environment variables
  env: ["HOME=/home/user", "TERM=xterm", "USER=user", "SHELL=/bin/bash", "EDITOR=vim", "LANG=en_US.UTF-8", "LC_ALL=C"],
  // Current working directory
  cwd: "/home/user",
  // User id
  uid: 1e3,
  // Group id
  gid: 1e3
};
const configObj = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  args,
  cmd,
  diskImageType,
  diskImageUrl,
  needsDisplay,
  opts,
  printIntro
}, Symbol.toStringTag, { value: "Module" }));
function handleProcessCreated(processCount) {
  if (processCount <= 5) {
    plausible(`Process started: ${processCount}`);
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WebVM, "WebVM").$$render(
    $$result,
    {
      configObj,
      processCallback: handleProcessCreated,
      cacheId: "blocks_terminal"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
