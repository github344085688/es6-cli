function _sleep2s () {
  return new Promise(resolve => setTimeout(resolve, 2000))
}

async function walk () {
  await _sleep2s()
  console.log('walk')
}

export default walk
