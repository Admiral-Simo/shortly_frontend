package url

import (
	"crypto/rand"
	"math/big"
)

const alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

// len(hash) = 6
func GetRandomHash() string {
	var result string
	for i := 0; i < 6; i++ {
		RAND_INT, _ := rand.Int(rand.Reader, big.NewInt(int64(len(alphabets))))
		random_character := alphabets[RAND_INT.Int64()]
		result += string(random_character)
	}
	return result
}
