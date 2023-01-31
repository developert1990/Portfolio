export const API_BASE = process.env.NODE_ENV === "development" ? "http://localhost:9002" : `http://${process.env.REACT_APP_API_BASE}:9002`;
