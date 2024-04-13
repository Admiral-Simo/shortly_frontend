package url

import (
	"testing"
)

func TestGetRandomHash(t *testing.T) {
	const hashLength = 6
	hash := GetRandomHash()

	if len(hash) != hashLength {
		t.Errorf("Expected hash length %d, but got %d", hashLength, len(hash))
	}
}
