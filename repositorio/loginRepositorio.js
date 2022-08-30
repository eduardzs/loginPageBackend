import fs from 'fs/promises';
import bancoDados from './datadb.js'

const db = async () => {
  try {
    return bancoDados
  } catch (err) {
    console.log(err);
  }
}

const validarLogindb = async(login = '', senha = '') => {
  const data = await db()
  let { usuario } = data.dadosLogin.find((dados) => dados.login.usuario == login && dados.login.senha == senha)
  return usuario
}

export default validarLogindb
