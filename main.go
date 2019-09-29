package main

import (
    "net/http"
    "github.com/gorilla/mux"
)
func main() {
    r := mux.NewRouter()
    r.PathPrefix("/").Handler(http.FileServer(http.Dir("./elan-beta-home/")))
    http.ListenAndServe(":8080", r)
}
