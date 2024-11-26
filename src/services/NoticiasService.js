import Api from "./Api"

const buscarNoticiaPorId= async (id) =>{
    try{
        const res = await Api.get(`/noticias/${id}`)
        return res;
    }catch(erro){
        alert(erro);
    }
}

const editarNoticia= async (id, titulo, subtitulo, texto ) =>{
    try{
        const res = await Api.put(`/noticias/${id}`, { titulo, subtitulo, texto })
        return res;
    }catch(erro){
        alert(erro);
    }
}

const criarNoticia= async (titulo, subtitulo, texto ) =>{
    try{
        const res = await Api.post(`/noticias`, { titulo, subtitulo, texto })
        return res;
    }catch(erro){
        alert(erro);
    }
}

const buscarNoticias = async () =>{
    try{
        const res = await Api.get(`/noticias/`)
        return res;
    }catch(erro){
        alert(erro);
    }
}

const deletarNoticiaPorId= async (id) =>{
    try{
        const res = await Api.delete(`/noticias/${id}`)
        return res;
    }catch(erro){
        alert(erro);
    }
}

const NoticiasService = {
    buscarNoticiaPorId,
    editarNoticia,
    buscarNoticias,
    deletarNoticiaPorId,
    criarNoticia,
}

export default NoticiasService;