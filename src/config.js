export function getUrl() {
  return process.env.NODE_ENV === "production"
    ? "https://anytime-mailer.herokuapp.com/"
    : "http://localhost:3001";
}
