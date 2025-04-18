export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  // if(body.name === '')
  // console.log(await body);

  return {
    mess: body,
  };
});
