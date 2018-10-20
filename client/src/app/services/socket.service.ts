import * as openSocket from 'socket.io-client';
import { baseUrl } from '../../constants/baseUrl';

export class SocketService {

    private socket: SocketIOClient.Socket;

    public constructor () {}

    getSocket() {
        if (!this.socket) {
            // this.socket = openSocket('http://localhost:3030');
            this.socket = openSocket(baseUrl);
        }

        return this.socket;
    }
}
