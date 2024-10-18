import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { W as WebVM } from "../../../chunks/WebVM.js";
const diskImageUrl = "wss://disks.webvm.io/alpine_20240307_i3_slimmed.ext2";
const diskImageType = "cloud";
const printIntro = false;
const needsDisplay = true;
const cmd = "/sbin/init";
const args = [];
const opts = {
  // User id
  uid: 0,
  // Group id
  gid: 0
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
  if (processCount == 1) {
    plausible("Alpine init");
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(WebVM, "WebVM").$$render(
    $$result,
    {
      configObj,
      processCallback: handleProcessCreated,
      cacheId: "blocks_alpine"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
