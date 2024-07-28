import script from './tag.esm-Bkya-FxV.mjs';
import script$1 from './iconfield.esm-CMjnwUAR.mjs';
import script$2 from './inputicon.esm-DsrGfACI.mjs';
import __nuxt_component_1 from './Icon-B04GAuZ4.mjs';
import script$3 from './inputtext.esm-Blvd_dSV.mjs';
import script$4 from './button.esm-D8sVcJb8.mjs';
import script$5 from './datatable.esm-BAh19VmC.mjs';
import script$6 from './column.esm-KktM_xTo.mjs';
import { u as useHighPaymentProcessStore, _ as _sfc_main$2, a as _sfc_main$1, b as _sfc_main$3 } from './DeleteHighPaymentProcessDialog-04KoSKqT.mjs';
import script$7 from './dynamicdialog.esm-D3Qnqlk-.mjs';
import { defineAsyncComponent, withAsyncContext, computed, ref, resolveDirective, unref, withCtx, createVNode, mergeProps, createTextVNode, toDisplayString, useSSRContext, markRaw } from 'vue';
import { c as useRouter, G as useDialog, s as storeToRefs, F as FilterMatchMode } from './server.mjs';
import { u as useHighAreasStore } from './high-area-store-B-d20OaI.mjs';
import { u as useCustomersStore } from './customers-store-DoxVOnyQ.mjs';
import { a as convertDateTime } from './core_utils-WJ_cJnbk.mjs';
import { ssrRenderComponent, ssrGetDirectiveProps, ssrInterpolate } from 'vue/server-renderer';
import './basecomponent.esm-DXWDIfdj.mjs';
import './index-DE5HZNjr.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import '@iconify/vue/dist/offline';
import '@iconify/vue';
import './badge.esm-CGMv5799.mjs';
import './index.esm-C7T4V9vj.mjs';
import './baseicon.esm-DbzTeshI.mjs';
import './paginator.esm-BvYTZ1KY.mjs';
import './index.esm-7xcJfJVp.mjs';
import './dropdown.esm-BZz-eegH.mjs';
import './index.esm-BIjuQzNw.mjs';
import './index.esm-Clcms31c.mjs';
import './index.esm-CBLFGZyH.mjs';
import './index.esm-CbKY_bSB.mjs';
import './overlayeventbus.esm-Cq2NCN3a.mjs';
import './portal.esm-CdWWxjdD.mjs';
import './virtualscroller.esm-QhUci9XU.mjs';
import './inputnumber.esm-CMvh_h4P.mjs';
import './index.esm-Dpdcp6OZ.mjs';
import './index.esm-CE-esNCM.mjs';
import './index.esm-ByqdG2PS.mjs';
import './index.esm-C03T_CK6.mjs';
import './index.esm-Cs4cT7wr.mjs';
import './checkbox.esm-Duuim8Iu.mjs';
import './radiobutton.esm-CQ1mq00b.mjs';
import './index.esm-BvZNBu0f.mjs';
import './index.esm-DTIot6dj.mjs';
import './dialog.esm-Wemb0g_v.mjs';
import './fetch-DXSGE_KZ.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@formkit/auto-animate/vue';
import 'framesync';
import 'popmotion';
import 'style-value-types';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useRouter();
    const dialog = useDialog();
    const CheckProgressExampleDialogData = defineAsyncComponent(
      () => import('./CheckProgressExampleDialogData-CpEDeRmZ.mjs')
    );
    const CheckProgressExampleDialogFooter = defineAsyncComponent(
      () => import('./CheckProgressExampleDialogFooter-DNTgG5e3.mjs')
    );
    const { currentHighAreaIDFromLocalStore } = storeToRefs(useHighAreasStore());
    const { highPaymentProcesses, currentHighPaymentProcess } = storeToRefs(
      useHighPaymentProcessStore()
    );
    const { getHighPaymentProcesses } = useHighPaymentProcessStore();
    const { getCustomers } = useCustomersStore();
    [__temp, __restore] = withAsyncContext(() => getHighPaymentProcesses()), await __temp, __restore();
    [__temp, __restore] = withAsyncContext(() => getCustomers()), await __temp, __restore();
    const myPaymentBaseOnHighID = computed(() => {
      return highPaymentProcesses.value.filter((payment) => {
        return payment["high_area_id"] == currentHighAreaIDFromLocalStore.value;
      });
    });
    const statuses = ref([{ name: "Done", value: "Done" }]);
    const filters = ref({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS }
    });
    const createHighPaymentProcessDialogVisible = ref(false);
    const editHighPaymentProcessDialogVisible = ref(false);
    const deleteHighPaymentProcessDialogVisible = ref(false);
    const toggleEditPayment = (data) => {
      currentHighPaymentProcess.value = data;
      editHighPaymentProcessDialogVisible.value = !editHighPaymentProcessDialogVisible.value;
    };
    const toggleDeletePayment = (data) => {
      currentHighPaymentProcess.value = data;
      deleteHighPaymentProcessDialogVisible.value = !deleteHighPaymentProcessDialogVisible.value;
    };
    const viewProgressExample = () => {
      dialog.open(CheckProgressExampleDialogData, {
        props: {
          header: "Check Progress Example",
          style: { width: "50rem" },
          breakpoints: { "1199px": "75vw", "575px": "90vw" },
          modal: true,
          maximizable: true
        },
        templates: {
          footer: markRaw(CheckProgressExampleDialogFooter)
        }
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tag = script;
      const _component_IconField = script$1;
      const _component_InputIcon = script$2;
      const _component_Icon = __nuxt_component_1;
      const _component_InputText = script$3;
      const _component_Button = script$4;
      const _component_DataTable = script$5;
      const _component_Column = script$6;
      const _component_CreateHighPaymentProcessDialog = _sfc_main$2;
      const _component_EditHighPaymentProcessDialog = _sfc_main$1;
      const _component_DeleteHighPaymentProcessDialog = _sfc_main$3;
      const _component_DynamicDialog = script$7;
      const _directive_auto_animate = resolveDirective("auto-animate");
      _push(`<!--[--><div class="w-full h-full flex flex-col"><div class="fixed right-0 top-0 z-50 backdrop-blur-xl w-full h-[10%] px-4 border-b flex justify-between items-center"><div class="flex flex-col justify-center gap-2"><p class="text-[#10b98e] cursor-pointer text-sm hover:underline"> Back to High Area </p><div class="flex items-center gap-2"><span class="font-semibold text-lg">Payment</span>`);
      _push(ssrRenderComponent(_component_Tag, {
        value: unref(myPaymentBaseOnHighID).length
      }, null, _parent));
      _push(`</div></div><div class="flex items-center gap-2">`);
      _push(ssrRenderComponent(_component_IconField, { iconPosition: "left" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_InputIcon, { class: "flex items-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Icon, { name: "mdi:filter-outline" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Icon, { name: "mdi:filter-outline" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              modelValue: filters.value["global"].value,
              "onUpdate:modelValue": ($event) => filters.value["global"].value = $event,
              placeholder: "Filter payment..."
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_InputIcon, { class: "flex items-center" }, {
                default: withCtx(() => [
                  createVNode(_component_Icon, { name: "mdi:filter-outline" })
                ]),
                _: 1
              }),
              createVNode(_component_InputText, {
                modelValue: filters.value["global"].value,
                "onUpdate:modelValue": ($event) => filters.value["global"].value = $event,
                placeholder: "Filter payment..."
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Button, {
        size: "small",
        label: "New",
        onClick: ($event) => createHighPaymentProcessDialogVisible.value = !createHighPaymentProcessDialogVisible.value
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        size: "small",
        label: "Check Progress Example",
        onClick: viewProgressExample
      }, null, _parent));
      _push(`</div></div><div class="absolute top-[10%] w-full h-[90%]">`);
      _push(ssrRenderComponent(_component_DataTable, mergeProps({
        value: unref(myPaymentBaseOnHighID),
        filters: filters.value,
        "onUpdate:filters": ($event) => filters.value = $event,
        paginator: true,
        rows: 50,
        rowsPerPageOptions: [5, 10, 20, 50],
        scrollable: "",
        scrollHeight: "flex",
        removableSort: ""
      }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)), {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex justify-center items-center"${_scopeId}><span${_scopeId}>No payment found.</span></div>`);
          } else {
            return [
              createVNode("div", { class: "flex justify-center items-center" }, [
                createVNode("span", null, "No payment found.")
              ])
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Column, {
              field: "payment_time",
              header: "Payment Time",
              sortable: ""
            }, {
              body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(data["payment_time"])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(data["payment_time"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "amount_of_money",
              header: "Amount Of Money",
              sortable: ""
            }, {
              body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(data["amount_of_money"])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(data["amount_of_money"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "amount_of_debt",
              header: "Amount Of Debt",
              sortable: ""
            }, {
              body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(data["amount_of_debt"])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(data["amount_of_debt"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "submitter",
              header: "Submitter",
              sortable: ""
            }, {
              body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(data["submitter"])}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(data["submitter"]), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "created_at",
              header: "Created At",
              sortable: ""
            }, {
              body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(("convertDateTime" in _ctx ? _ctx.convertDateTime : unref(convertDateTime))(data["created_at"]))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(("convertDateTime" in _ctx ? _ctx.convertDateTime : unref(convertDateTime))(data["created_at"])), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, {
              field: "status",
              header: "Status"
            }, {
              body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Tag, {
                    severity: data["status"] == "done" ? "success" : "danger",
                    value: data["status"].toUpperCase()
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Tag, {
                      severity: data["status"] == "done" ? "success" : "danger",
                      value: data["status"].toUpperCase()
                    }, null, 8, ["severity", "value"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Column, { header: "Actions" }, {
              body: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Button, {
                    text: "",
                    severity: "secondary",
                    onClick: ($event) => toggleEditPayment(data)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, { name: "mdi:edit-outline" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, { name: "mdi:edit-outline" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    text: "",
                    severity: "danger",
                    onClick: ($event) => toggleDeletePayment(data)
                  }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_Icon, { name: "mdi:delete-outline" }, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_Icon, { name: "mdi:delete-outline" })
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_Button, {
                      text: "",
                      severity: "secondary",
                      onClick: ($event) => toggleEditPayment(data)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, { name: "mdi:edit-outline" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"]),
                    createVNode(_component_Button, {
                      text: "",
                      severity: "danger",
                      onClick: ($event) => toggleDeletePayment(data)
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_Icon, { name: "mdi:delete-outline" })
                      ]),
                      _: 2
                    }, 1032, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Column, {
                field: "payment_time",
                header: "Payment Time",
                sortable: ""
              }, {
                body: withCtx(({ data }) => [
                  createTextVNode(toDisplayString(data["payment_time"]), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "amount_of_money",
                header: "Amount Of Money",
                sortable: ""
              }, {
                body: withCtx(({ data }) => [
                  createTextVNode(toDisplayString(data["amount_of_money"]), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "amount_of_debt",
                header: "Amount Of Debt",
                sortable: ""
              }, {
                body: withCtx(({ data }) => [
                  createTextVNode(toDisplayString(data["amount_of_debt"]), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "submitter",
                header: "Submitter",
                sortable: ""
              }, {
                body: withCtx(({ data }) => [
                  createTextVNode(toDisplayString(data["submitter"]), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "created_at",
                header: "Created At",
                sortable: ""
              }, {
                body: withCtx(({ data }) => [
                  createTextVNode(toDisplayString(("convertDateTime" in _ctx ? _ctx.convertDateTime : unref(convertDateTime))(data["created_at"])), 1)
                ]),
                _: 1
              }),
              createVNode(_component_Column, {
                field: "status",
                header: "Status"
              }, {
                body: withCtx(({ data }) => [
                  createVNode(_component_Tag, {
                    severity: data["status"] == "done" ? "success" : "danger",
                    value: data["status"].toUpperCase()
                  }, null, 8, ["severity", "value"])
                ]),
                _: 1
              }),
              createVNode(_component_Column, { header: "Actions" }, {
                body: withCtx(({ data }) => [
                  createVNode(_component_Button, {
                    text: "",
                    severity: "secondary",
                    onClick: ($event) => toggleEditPayment(data)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, { name: "mdi:edit-outline" })
                    ]),
                    _: 2
                  }, 1032, ["onClick"]),
                  createVNode(_component_Button, {
                    text: "",
                    severity: "danger",
                    onClick: ($event) => toggleDeletePayment(data)
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_Icon, { name: "mdi:delete-outline" })
                    ]),
                    _: 2
                  }, 1032, ["onClick"])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      if (createHighPaymentProcessDialogVisible.value) {
        _push(ssrRenderComponent(_component_CreateHighPaymentProcessDialog, {
          visible: createHighPaymentProcessDialogVisible.value,
          statuses: statuses.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (editHighPaymentProcessDialogVisible.value) {
        _push(ssrRenderComponent(_component_EditHighPaymentProcessDialog, {
          visible: editHighPaymentProcessDialogVisible.value,
          statuses: statuses.value
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (deleteHighPaymentProcessDialogVisible.value) {
        _push(ssrRenderComponent(_component_DeleteHighPaymentProcessDialog, { visible: deleteHighPaymentProcessDialogVisible.value }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_DynamicDialog, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/project_details/svg_animation_viewer/floor/high_area/high_area_payment/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-SbA_kXn0.mjs.map
