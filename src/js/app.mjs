import * as postMethods from "./api/posts/index.mjs";

import { setLoginFormListener } from "./handlers/login.mjs";
import { setRegisterFormListener } from "./handlers/register.mjs";
import { setCreatePostFormListener } from "./handlers/createPost.mjs";
import { setUpdatePostListener } from "./handlers/updatePost.mjs";

import * as templates from "./templates/index.mjs";

const path = location.pathname;

if (path == "/profile/login/") {
  setLoginFormListener();
} else if (path == "/profile/register/") {
  setRegisterFormListener();
} else if (path == "./post/create/") {
  setCreatePostFormListener();
} else if (path == "./post/edit/") {
  setUpdatePostListener;
}

//async function testTemplate() {
//const posts = await postMethods.getPost(11535);
//const post = posts;
//const container = document.querySelector("#post");
// templates.renderPostTemplate(post, container);
//}
//testTemplate();

//postMethods.getPost(11535).then(console.log);

postMethods.getPosts().then(console.log);

async function testTemplate() {
  const posts = await postMethods.getPosts();
  const post = posts;
  const container = document.querySelector("#post");
  templates.renderPostTemplates(post, container);
}
testTemplate();
