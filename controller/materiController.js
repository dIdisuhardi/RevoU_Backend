const { getMateriService, getMateriByIdService, getMateriByCategoryService, createMateriService } = require('../services/materiService')

const getMateriController = async (req, res) => {
    const kursus = await getMateriService()
    res.status(200).json(kursus)
}

const getMateriByIdController = async (req, res) => {
    const kursus = await getMateriByIdService(req.params.id)
    if (!kursus || kursus.length === 0) {
        res.status(404).json({
            message: "kursus tidak ditemukan"
        })
    }
    res.status(200).json(kursus)
}

const getMateriByCategoryController = async (req, res) => {
    const kursus = await getMateriByCategoryService(req.params.kategori)
    if (!kursus || kursus.length === 0) {
        res.status(404).json({
            message: "kategori kursus tidak ditemukan"
        })
    }
    res.status(200).json(kursus)
}

const createMateriController = async (req, res) => {
    const createdKursus = await createMateriService(req.body)
    if (!createdKursus) {
        res.status(400).json({
            message: "kursus gagal dibuat"
        })
    }
    res.status(201).json({
        message: "kursus berhasil dibuat",
        data: createdKursus
    })
}

module.exports = { getMateriController, getMateriByIdController, getMateriByCategoryController, createMateriController }