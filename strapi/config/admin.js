module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3ebf899e7a9f1d07501b3ec759d280fb'),
  },
});
