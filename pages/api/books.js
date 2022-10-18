import mongoose from 'mongoose';
import {addBooks, getAllBooks} from '../../api-helpers/controller/books-controller';
import {Connection} from '../../api-helpers/utils';

export default async function hanlder(req,res){
   await Connection();
   if (req.method === 'GET'){
    return getAllBooks(req,res);
   }else if(req.method === 'POST'){
    return addBooks(req,res);
   }else if(req.method === 'GET'){
      return getBook(req,res);
   }
}