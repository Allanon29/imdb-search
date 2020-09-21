'use strict'
import * as express from 'express'
import controller from './controller'
import { wrap } from '../../common/exceptions'

export default express
  .Router()
  .get('/search', wrap(controller.search))
  .get('/wiki-search', wrap(controller.getWiki))