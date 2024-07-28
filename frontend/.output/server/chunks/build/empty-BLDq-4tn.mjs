import { _ as __nuxt_component_0 } from './VitePwaManifest-DOFbgYE0.mjs';
import { _ as _export_sfc, K as __nuxt_component_1 } from './server.mjs';
import script from './toast.esm-DkLq1MgA.mjs';
import { useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import './index-BabADJUJ.mjs';
import '@unhead/shared';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import 'vue-router';
import '@formkit/auto-animate/vue';
import 'framesync';
import 'popmotion';
import 'style-value-types';
import './portal.esm-CdWWxjdD.mjs';
import './basecomponent.esm-DXWDIfdj.mjs';
import './index.esm-BIjuQzNw.mjs';
import './baseicon.esm-DbzTeshI.mjs';
import './index.esm-BxozaLeM.mjs';
import './index.esm-CbKY_bSB.mjs';
import './index.esm-DilncAGe.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_VitePwaManifest = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  const _component_Toast = script;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_VitePwaManifest, null, null, _parent));
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(ssrRenderComponent(_component_Toast, {
    position: "bottom-left",
    group: "bl"
  }, null, _parent));
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/empty.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const empty = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { empty as default };
//# sourceMappingURL=empty-BLDq-4tn.mjs.map
