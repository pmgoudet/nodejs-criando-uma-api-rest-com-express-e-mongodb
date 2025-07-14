import NaoEncontrado from "../error/NaoEncontrado.js";
import AutorModel from "../models/Autor.js";

const autor = AutorModel.autor;


class AutorController {

  static async listarAutores(req, res) {
    try {
      const listaAutores = await autor.find({});
      res.status(200).json(listaAutores);
    } catch (erro) {
      res.status(500).json({ message: `Deu merda aqui, parça: ${erro.message}` });
    }
  }

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);

      if (autorEncontrado !== null) {
        res.status(200).send(autorEncontrado);
      } else {
        next(new NaoEncontrado("Id do autor não localizado."));
      }


    } catch (erro) {
      next(erro)
    }
  }

  static async cadastrarAutor(req, res, next) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Autor cadastrado com sucesso.", autor: novoAutor })

    } catch (erro) {
      next(erro)
    }
  }

  static async atualizarAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findByIdAndUpdate(id, req.body);

      if (autorEncontrado !== null) {
        res.status(200).json(autorEncontrado);
      } else {
        next(new NaoEncontrado("Id do autor não localizado."));
      }

    } catch (erro) {
      next(erro)
    }
  }

  static async deletarAutor(req, res, next) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findByIdAndDelete(id);
      if (autorEncontrado !== null) {
        res.status(200).json({ message: "Autor excluído com sucesso." });
      } else {
        next(new NaoEncontrado("Id do autor não localizado."));

      }
    } catch (erro) {
      next(erro)
    }
  }


};

export default AutorController;