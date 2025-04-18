export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { sendMail } = useNodeMailer();

  return sendMail({
    subject: body.name,
    text: body.message,
    to: body.email,
  });
});
