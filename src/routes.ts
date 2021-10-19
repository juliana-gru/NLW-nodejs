import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handle);
router.get("/authenticate", (req, res) => {
  res.send("Hmm");
});

export { router };