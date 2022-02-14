import Axios from 'axios'

import { transformResponse } from './Transformer'

const Server = Axios.create({})

Server.defaults.auth = {
  username: process.env.REACT_APP_API_USER || '',
  password: process.env.REACT_APP_API_PASSWORD || '',
}

export default Server
