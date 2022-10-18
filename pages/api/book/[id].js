import {deleteBook, getBook, updateBook} from "../../../api-helpers/controller/books-controller";
import { Connection } from "../../../api-helpers/utils";

export default async function handler(req,res){
    await Connection();
    if(req.method==='PUT'){
        return updateBook(req,res);
    }else if(req.method ==='DELETE'){
        return deleteBook(req,res);
    }else if(req.method === 'GET'){
        return getBook(req,res);
    }
}