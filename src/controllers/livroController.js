import NaoEncontrado from "../error/NaoEncontrado.js";
import { autor, livro } from "../models/index.js";


class LivroController {

  static async listarLivros(req, res, next) {
    try {
      const listaLivros = await livro.find({}).populate("autor");
      res.status(200).json(listaLivros);
    } catch (erro) {
      next(erro)
    }
  }

  static async listarLivroPorId(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findById(id).populate("autor");

      if (livroEncontrado !== null) {
        res.status(200).json(livroEncontrado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }

    } catch (erro) {
      next(erro)
    }
  }

  static async cadastrarLivro(req, res, next) {
    const novoLivro = req.body;

    try {
      const autorEncontrado = await autor.findById(novoLivro.autor);

      if (!autorEncontrado) {
        return res.status(404).json({ message: "Autor não encontrado com o ID fornecido." });
      }

      const livroCriado = await livro.create(novoLivro);
      const livroComAutor = await livro.findById(livroCriado._id).populate("autor");

      res.status(201).json({ message: "Livro cadastrado com sucesso.", livro: livroComAutor });

    } catch (erro) {
      next(erro);
    }
  }

  static async atualizarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findByIdAndUpdate(id, req.body);

      if (livroEncontrado !== null) {
        res.status(200).json(livroEncontrado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }

    } catch (erro) {
      next(erro)
    }
  }

  static async deletarLivro(req, res, next) {
    try {
      const id = req.params.id;
      const livroEncontrado = await livro.findByIdAndDelete(id);

      if (livroEncontrado !== null) {
        res.status(200).json({ message: "Livro excluído com sucesso." });
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }

    } catch (erro) {
      next(erro)
    }
  }

  static async listarLivrosPorEditora(req, res, next) {
    const editora = req.query.editora

    try {
      const livrosPorEditora = await livro.find({ editora: editora })
      res.status(200).json({ message: "Achei.", livrosPorEditora });
    } catch (erro) {
      next(erro)
    }
  }


};

export default LivroController;