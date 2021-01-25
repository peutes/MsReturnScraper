/* eslint-disable import/prefer-default-export */
import * as express from 'express'
import { HttpFunction } from '@google-cloud/functions-framework/build/src/functions'

export const main: HttpFunction = (
  _req: express.Request,
  res: express.Response
) => res.status(200).send('Hello Typescript3!!!')
