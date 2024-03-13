import { setRegisterFormListener } from "./handlers/register.mjs";
import { setLoginFormListener } from "./handlers/login.mjs";
import * as post from "./api/posts/index.mjs";

const path = location.pathname;

if (path == "/profile/login/") {
  setLoginFormListener();
} else if (path == "/profile/register/") {
  setRegisterFormListener();
}

//post.createPost ()
//post.updatePost ()
post.removePost(403).then(console.log);
//post.getPost(11535).then(console.log);
//post.getPosts().then(console.log);
