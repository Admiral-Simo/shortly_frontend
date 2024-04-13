package db

var db map[string]string

func init() {
	db = make(map[string]string)
}

func GetUrl(hash string) (*string, *ErrorResponse) {
	value, ok := db[hash]
	if !ok {
		return nil, &ErrorResponse{Message: "Url not found"}
	}
	return &value, nil
}

func SaveUrl(hash, url string) {
	db[hash] = url
}

type ErrorResponse struct {
	Message string
}
