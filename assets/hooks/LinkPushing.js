// This will be used to navigate through both Development and Production modes
export default function LinkPushing(rooter, routeDev, routeProd) {
  const env = process.env.NODE_ENV;

  if (env == "development") {
    rooter.push(routeDev, undefined, { shallow: true }); //  (undefined, {shallow: true}) - Prevents refresh/reload on router.push() IF the user is not pushing to another page;
  }

  if (env == "production") {
    rooter.push("/" + routeProd, undefined, { shallow: true });
  }
}
