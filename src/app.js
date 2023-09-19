import express from 'express';
import mongoose from 'mongoose';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';

import viewsRouter from './routes/views.router.js'
import ropaRouter from './routes/ropa.router.js'

import { mensajeModel } from './dao/models/mensajes.model.js';

mongoose.connect('mongodb+srv://tomasmaker2:topper10@cluster0.na8mlhz.mongodb.net/?retryWrites=true&w=majority')

const app = express();
const httpServer = app.listen(8080, () => console.log('tuki'));
const socketServer = new Server(httpServer);

app.use(express.json());
app.use(express.urlencoded({extended : true}));

app.engine('handlebars', handlebars.engine());
app.set('views', './src/views');
app.set('view engine','handlebars');

app.use('/static', express.static('./public'));
app.use(viewsRouter);
app.use('/ropa' , ropaRouter);

socketServer.on('connection', (socket) => {
    console.log('se conectó' , socket.id);
    socket.on('mensaje', async (data) => {
        await mensajeModel.create(data);
        const mensajes = await mensajeModel.find().lean();
        socketServer.emit('nuevo_mensaje', mensajes)
    })
})