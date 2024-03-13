import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";

setRegisterFormListener();
setLoginFormListener();

const path = location.pathname;
if (path == "/profile/login/") {
  setLoginFormListener();
} else if (path == "/profile/register/") {
  setRegisterFormListener();
}

import * as constants from "./api/constants.mjs";

console.log(constants.API_SOCIAL_URL);
console.log(8);
