import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function handler(req, res) {
  const products = await prisma.product.findMany({
    where: {
      categoryId
    }
  })
  res.status(200).json(products)
}