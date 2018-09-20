const SERVER=process.env.API_HOST
const PORT=process.env.API_PORT
export const environment = {
  production: true,
  HOST:`http://${SERVER}:${PORT}/`
};
