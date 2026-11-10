function validarColheita(req, res, next) {
    const { voluntario, cultivo, quilos } = req.body

    if (!voluntario) {
        return res.status(400).json({
            erro: "O campo voluntario e obrigatorio"
        })
    }

    if (!cultivo) {
        return res.status(400).json({
            erro: "O campo cultivo e obrigatorio"
        })
    }

    if (typeof quilos !== "number") {
        return res.status(400).json({
            erro: "O campo quilos deve ser um numero"
        })
    }

    if (quilos <= 0) {
        return res.status(400).json({
            erro: "O campo quilos deve ser maior que zero"
        })
    }

    next()
}

module.exports = validarColheita