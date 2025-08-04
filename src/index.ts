import { Hono } from 'hono'
import {getCharacter} from "./lib/rick-and-morty-api";

const app = new Hono()

app.get('/:id', async (c) => {
  const id = c.req.param('id') // Obtiene el id de la solicitud.

  if(!id) {
    return c.json({
      error: 'missing.id',
      data: null,
    }, 400)
  }

  const character = await getCharacter(id);

  return c.json({ data: character })
})

export default app
