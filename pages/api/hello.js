// req = HTTP incoming message;     instance of http.IncomingMessage, plus some pre-built middlewares
//res = HTTP server response;       instance of http.ServerResponse, plus some helper functions
export default function handler(req, res) {
    res.status(200).json({ text: "Hello" });
}