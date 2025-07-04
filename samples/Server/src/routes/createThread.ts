// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import * as express from 'express';
import { createThread } from '../lib/chat/moderator';

const router = express.Router();

/**
 * route: /createThread/
 *
 * purpose: Create a new chat thread.
 *
 * @returns The new threadId as string
 *
 */

router.post('/', async function (req, res) {
  res.send(await createThread());
});

export default router;
