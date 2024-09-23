import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function testPrisma() {
  try {
    // Tenta buscar todos os usuários
    const users = await prisma.userZ.findMany()
    console.log('Conexão com o banco de dados bem-sucedida')
    console.log('Usuários:', users)

    // Tenta buscar todos os tweets
    const tweets = await prisma.tweet.findMany()
    console.log('Tweets:', tweets)

    // Tenta buscar todas as tendências
    const trends = await prisma.trend.findMany()
    console.log('Tendências:', trends)

  } catch (error) {
    console.error('Erro ao conectar com o banco de dados:', error)
  } finally {
    await prisma.$disconnect()
  }
}

testPrisma()