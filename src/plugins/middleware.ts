import store from "@/store";
const IStore = store as any;

const publicRouter = "authLogin";

export const authMiddleware = (ctx: any) => {
  const vuex = sessionStorage.getItem("vuex");
  if (!vuex) {
    return ctx.next();
  }
  const auth = JSON.parse(vuex)
  if (auth.auth.token === null && ctx.to.name !== publicRouter) {
    console.log(auth.auth.token, ctx.to.name);
    return ctx.next("/auth/login");
  }
  if (auth.auth.token !== null && ctx.to.name === publicRouter) {
    return ctx.next("/");
  }
  return ctx.next();
};
