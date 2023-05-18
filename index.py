from flask import Flask
from flask_socketio import SocketIO, emit
app=Flask('senior-communication-backend')
socket = SocketIO(app)
port = 900

@app.route('/')
def index():
    return 'Backend is running.'

@socket.on('message')
def recv_message(message):
    emit('messageResponse', message)


if __name__ == '__main__':
    socket.run(app,port=900)
    print(f'Socket.IO server running at http://localhost:{port}/')