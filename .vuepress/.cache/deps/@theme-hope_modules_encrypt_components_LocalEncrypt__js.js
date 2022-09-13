import {
  PasswordModal_default,
  usePathEncrypt
} from "./chunk-2DYVJFTL.js";
import "./chunk-KJQEHQMH.js";
import "./chunk-S5MSB2HL.js";
import "./chunk-R56XOF7Y.js";
import "./chunk-B6YVLY2D.js";
import "./chunk-2UKU5Z4C.js";
import "./chunk-ANKY43RT.js";
import "./chunk-AV7X2VFR.js";
import "./chunk-WCXEAEE2.js";
import {
  defineComponent,
  h
} from "./chunk-PWHMU4FR.js";
import "./chunk-WXFYXWFA.js";
import "./chunk-BPKF3OQJ.js";

// node_modules/vuepress-theme-hope/lib/client/modules/encrypt/components/LocalEncrypt.js
var LocalEncrypt_default = defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { isEncrypted, validateToken } = usePathEncrypt();
    return () => {
      var _a;
      return isEncrypted.value ? h(PasswordModal_default, { full: true, onVerify: validateToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});

// dep:@theme-hope_modules_encrypt_components_LocalEncrypt__js
var theme_hope_modules_encrypt_components_LocalEncrypt_js_default = LocalEncrypt_default;
export {
  theme_hope_modules_encrypt_components_LocalEncrypt_js_default as default
};
//# sourceMappingURL=@theme-hope_modules_encrypt_components_LocalEncrypt__js.js.map
