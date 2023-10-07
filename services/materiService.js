const { prisma } = require('../config/prisma')

const getMateriService = async () => {
    const kursus = await prisma.kursus.findMany()
    if (kursus.length === 0) {
        return {
            message: "Belum ada produk yang dibuat"
        }
    }
    return kursus
}

const getMateriByIdService = async (id) => {
    const kursus = await prisma.kursus.findMany({
        where: {
            id: Number(id)
        }
    })
    return kursus
}

const getMateriByCategoryService = async (kategori) => {
    const kursus = await prisma.kursus.findMany({
        where: {
            kategori: Number(kategori)
        }
    })
    return kursus
}

const createMateriService = async (body) => {
    const { judul, deskripsi, link, kategori } = body;
    console.log(body);

    const createdKursus = await prisma.kursus.create({
        data: {
            judul,
            deskripsi,
            link,
            kategori: Number(kategori)
        }
    })

    return createdKursus
}

module.exports = { getMateriService, getMateriByIdService, getMateriByCategoryService, createMateriService }